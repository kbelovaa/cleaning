import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { bathrooms, bedrooms, kitchens, livingRooms } from '../../constants/selectOptions';
import CustomSelect from '../CustomSelect/CustomSelect';
import { createAddress, getAddress, updateAddress } from '../../http/addressAPI';
import './Address.scss';

const Address = () => {
  const user = useSelector((state) => state.user);

  const [apartmentSize, setApartmentSize] = useState('');
  const [isApartmentSizeValid, setIsApartmentSizeValid] = useState(true);
  const [livingRoomsNum, setLivingRoomsNum] = useState(livingRooms[0]);
  const [bedroomsNum, setBedroomsNum] = useState(bedrooms[0]);
  const [bathroomsNum, setBathroomsNum] = useState(bathrooms[0]);
  const [kitchensNum, setKitchensNum] = useState(kitchens[0]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const { addressId } = useParams();

  const { t } = useTranslation();

  const navigate = useNavigate();

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
      }
    };

    if (addressId) {
      getAddressData();
    }
  }, []);

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
          user.id,
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
        setLoading(false);
        navigate('/addresses');
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="container">
      <div className="address">
        <h2 className="address__title">{addressId ? t('editAddress') : t('newAddress')}</h2>
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
              />
              <input
                id="address2"
                type="text"
                className={`input form__address ${!address2 ? 'invalid-field' : ''}`}
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
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
              <label htmlFor="size" className="form__label">
                {t('apartmentSize')}
                <sup className="top-index">2</sup>
              </label>
              <input
                id="size"
                type="text"
                className={`input ${!apartmentSize ? 'invalid-field' : ''}`}
                value={apartmentSize}
                onChange={(e) => handleApartmentSizeChange(e.target.value)}
              />
              <p className={isApartmentSizeValid ? 'hidden' : 'auth__note'}>
                {t('apartmentSizeMessage')}
                <sup className="top-index">2</sup>
              </p>
            </div>
            <div className="form__properties">
              <div className="form__property">
                <span className="form__label">{t('howManyLivingRooms')}</span>
                <CustomSelect
                  options={livingRooms}
                  selectedOption={livingRoomsNum}
                  setSelectedOption={setLivingRoomsNum}
                />
              </div>
              <div className="form__property">
                <span className="form__label">{t('howManyBedrooms')}</span>
                <CustomSelect options={bedrooms} selectedOption={bedroomsNum} setSelectedOption={setBedroomsNum} />
              </div>
              <div className="form__property">
                <span className="form__label">{t('howManyBathrooms')}</span>
                <CustomSelect options={bathrooms} selectedOption={bathroomsNum} setSelectedOption={setBathroomsNum} />
              </div>
              <div className="form__property">
                <span className="form__label">{t('howManyKitchens')}</span>
                <CustomSelect options={kitchens} selectedOption={kitchensNum} setSelectedOption={setKitchensNum} />
                <p className={!isFormValid ? 'auth__note' : 'hidden'}>{t('fillInAllFieldsMessage')}</p>
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
      </div>
    </div>
  );
};

export default Address;
