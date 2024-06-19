import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { bathrooms, bedrooms, kitchens, livingRooms } from '../../constants/selectOptions';
import { createAddress, getAddress, getAddresses, updateAddress } from '../../http/addressAPI';
import { setAddressesAction, setUpdatedAddressesAction } from '../../store/actions/userActions';
import { setDefaultAddressIdAction } from '../../store/actions/cleaningActions';
import CustomSelect from '../CustomSelect/CustomSelect';
import './Address.scss';

const Address = () => {
  const userId = useSelector((state) => state.user.id);
  const addresses = useSelector((state) => state.user.addresses);

  const [apartmentSize, setApartmentSize] = useState('');
  const [isApartmentSizeValid, setIsApartmentSizeValid] = useState(true);
  const [livingRoomsNum, setLivingRoomsNum] = useState(livingRooms[1]);
  const [bedroomsNum, setBedroomsNum] = useState(bedrooms[1]);
  const [bathroomsNum, setBathroomsNum] = useState(bathrooms[1]);
  const [kitchensNum, setKitchensNum] = useState(kitchens[1]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [addressLoading, setAddressLoading] = useState(true);

  const dispatch = useDispatch();

  const { addressId } = useParams();
  const { pathname } = useLocation();
  const routes = pathname.split('/');
  const booking = routes[3] === 'booking';

  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const addresses = await getAddresses(userId);
      dispatch(setAddressesAction(addresses));
    };

    if (addresses.length === 0 && userId) {
      getData();
    }
  }, [userId]);

  useEffect(() => {
    const getAddressData = async () => {
      const result = await getAddress(addressId);

      if (result.status === 200) {
        const { address } = result.data;
        setApartmentSize(address.size);
        setLivingRoomsNum(livingRooms.find((elem) => Number(elem.split(' ')[0]) === address.livingRooms));
        setBedroomsNum(bedrooms.find((elem) => Number(elem.split(' ')[0]) === address.bedrooms));
        setBathroomsNum(bathrooms.find((elem) => Number(elem.split(' ')[0]) === address.bathrooms));
        setKitchensNum(kitchens.find((elem) => Number(elem.split(' ')[0]) === address.kitchens));
        setAddress1(address.address);
        setAddress2(address.secondAddress);
        setPostalCode(address.postalCode);
        setCity(address.city);
        setProvince(address.province);
        setAddressLoading(false);
      }
    };

    if (addressId) {
      getAddressData();
    } else {
      setAddressLoading(false);
    }
  }, [addressId]);

  const handleApartmentSizeChange = (size) => {
    if (/^\d+$/.test(size) || size === '') {
      setIsApartmentSizeValid(true);
      if (size <= 10000) {
        setApartmentSize(size);
      } else {
        setIsApartmentSizeValid(false);
        setTimeout(() => setIsApartmentSizeValid(true), 3000);
      }
    }
  };

  const handleWheel = (event) => {
    event.target.blur();
    event.preventDefault();
  };

  const checkIsFormValid = () => {
    if (apartmentSize && address1 && postalCode && city && province) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setLoading(true);
      setIsFormValid(true);
      let result;
      if (addressId) {
        result = await updateAddress(
          addressId,
          address1,
          address2,
          postalCode,
          city,
          province,
          apartmentSize,
          livingRoomsNum.split(' ')[0],
          bedroomsNum.split(' ')[0],
          bathroomsNum.split(' ')[0],
          kitchensNum.split(' ')[0],
        );
      } else {
        result = await createAddress(
          userId,
          address1,
          address2,
          postalCode,
          city,
          province,
          apartmentSize,
          livingRoomsNum.split(' ')[0],
          bedroomsNum.split(' ')[0],
          bathroomsNum.split(' ')[0],
          kitchensNum.split(' ')[0],
        );
      }
      if (result.status === 201) {
        dispatch(setUpdatedAddressesAction(result.data.address));
        const cleaningObj = JSON.parse(sessionStorage.getItem('cleaning'));
        if (cleaningObj) {
          dispatch(setDefaultAddressIdAction(result.data.address._id));
          sessionStorage.setItem(
            'cleaning',
            JSON.stringify({ ...cleaningObj, defaultAddressId: result.data.address._id }),
          );
        }
        setLoading(false);
        if (booking) {
          navigate('/booking');
        } else {
          navigate('/addresses');
        }
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="container">
      <div className="address">
        <h2 className="address__title">{addressId ? t('editAddress') : t('newAddress')}</h2>
        {addressLoading ? (
          <div className="spinner"></div>
        ) : (
          <form className={`address__form ${isFormValid ? '' : 'invalid'}`}>
            <div className="address__data">
              <div className="form__input-wrap">
                <label htmlFor="address1" className="form__label">
                  {t('address')}
                </label>
                <input
                  id="address1"
                  type="text"
                  className={`input form__address ${!address1 ? 'invalid-field' : ''}`}
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder={t('address1Placeholder')}
                />
                <input
                  id="address2"
                  type="text"
                  className="input form__address"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder={t('address2Placeholder')}
                />
              </div>
              <div className="form__city">
                <div className="form__input-wrap form__code">
                  <label htmlFor="code" className="form__label">
                    {t('postalCode')}
                  </label>
                  <input
                    id="code"
                    type="number"
                    onWheel={handleWheel}
                    className={`input form__address ${!postalCode ? 'invalid-field' : ''}`}
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="form__input-wrap form__city-name">
                  <label htmlFor="city" className="form__label">
                    {t('city')}
                  </label>
                  <input
                    id="city"
                    type="text"
                    className={`input form__address ${!city ? 'invalid-field' : ''}`}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="form__input-wrap">
                <label htmlFor="province" className="form__label">
                  {t('province')}
                </label>
                <input
                  id="province"
                  type="text"
                  className={`input form__address ${!province ? 'invalid-field' : ''}`}
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
            </div>
            <div className="address__apartment">
              <div className="form__input-wrap">
                <label htmlFor="size" className={`form__label ${addressId ? 'disabled' : ''}`}>
                  {t('apartmentSize')}
                  <sup className="top-index">2</sup>
                  <svg
                    className={addressId ? 'lock' : 'hidden'}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <rect
                      x="3.33337"
                      y="7.83398"
                      width="9.33333"
                      height="6.66667"
                      rx="1"
                      stroke="#268664"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66663 5.83333C4.66663 3.99239 6.15901 2.5 7.99996 2.5V2.5C9.84091 2.5 11.3333 3.99238 11.3333 5.83333V7.83333H4.66663V5.83333Z"
                      stroke="#268664"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <input
                  id="size"
                  type="text"
                  className={`input ${addressId ? 'disabled' : !apartmentSize ? 'invalid-field' : ''}`}
                  value={apartmentSize}
                  onChange={(e) => handleApartmentSizeChange(e.target.value)}
                />
                <p className={isApartmentSizeValid ? 'hidden' : 'auth__note'}>
                  {t('apartmentSizeMessage')}
                  <sup className="top-index">2</sup>
                </p>
              </div>
              <div className="form__properties">
                <div className={`form__property ${addressId ? 'disabled' : ''}`}>
                  <span className="form__label">
                    {t('howManyLivingRooms')}
                    <svg
                      className={addressId ? 'lock' : 'hidden'}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <rect
                        x="3.33337"
                        y="7.83398"
                        width="9.33333"
                        height="6.66667"
                        rx="1"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66663 5.83333C4.66663 3.99239 6.15901 2.5 7.99996 2.5V2.5C9.84091 2.5 11.3333 3.99238 11.3333 5.83333V7.83333H4.66663V5.83333Z"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CustomSelect
                    options={livingRooms}
                    selectedOption={livingRoomsNum}
                    setSelectedOption={setLivingRoomsNum}
                  />
                </div>
                <div className={`form__property ${addressId ? 'disabled' : ''}`}>
                  <span className="form__label">
                    {t('howManyKitchens')}
                    <svg
                      className={addressId ? 'lock' : 'hidden'}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <rect
                        x="3.33337"
                        y="7.83398"
                        width="9.33333"
                        height="6.66667"
                        rx="1"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66663 5.83333C4.66663 3.99239 6.15901 2.5 7.99996 2.5V2.5C9.84091 2.5 11.3333 3.99238 11.3333 5.83333V7.83333H4.66663V5.83333Z"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CustomSelect options={kitchens} selectedOption={kitchensNum} setSelectedOption={setKitchensNum} />
                  <p className={!isFormValid ? 'auth__note' : 'hidden'}>{t('fillInAllFieldsMessage')}</p>
                </div>
                <div className={`form__property ${addressId ? 'disabled' : ''}`}>
                  <span className="form__label">
                    {t('howManyBedrooms')}
                    <svg
                      className={addressId ? 'lock' : 'hidden'}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <rect
                        x="3.33337"
                        y="7.83398"
                        width="9.33333"
                        height="6.66667"
                        rx="1"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66663 5.83333C4.66663 3.99239 6.15901 2.5 7.99996 2.5V2.5C9.84091 2.5 11.3333 3.99238 11.3333 5.83333V7.83333H4.66663V5.83333Z"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CustomSelect options={bedrooms} selectedOption={bedroomsNum} setSelectedOption={setBedroomsNum} />
                </div>
                <div className={`form__property ${addressId ? 'disabled' : ''}`}>
                  <span className="form__label">
                    {t('howManyBathrooms')}
                    <svg
                      className={addressId ? 'lock' : 'hidden'}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <rect
                        x="3.33337"
                        y="7.83398"
                        width="9.33333"
                        height="6.66667"
                        rx="1"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66663 5.83333C4.66663 3.99239 6.15901 2.5 7.99996 2.5V2.5C9.84091 2.5 11.3333 3.99238 11.3333 5.83333V7.83333H4.66663V5.83333Z"
                        stroke="#268664"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CustomSelect options={bathrooms} selectedOption={bathroomsNum} setSelectedOption={setBathroomsNum} />
                </div>
              </div>
            </div>
            {loading ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button className={`btn address__btn ${checkIsFormValid() ? '' : 'inactive'}`} onClick={handleFormSubmit}>
                {t('save')}
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Address;
