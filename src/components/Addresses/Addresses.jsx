import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setAddressesAction } from '../../store/actions/userActions';
import { deleteAddress, getAddresses, saveDefaultAddress } from '../../http/addressAPI';
import edit from '../../images/edit.png';
import './Addresses.scss';

const Addresses = () => {
  const userId = useSelector((state) => state.user.id);
  const addresses = useSelector((state) => state.user.addresses);

  const [defaultAddress, setDefaultAddress] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const getAdressesData = async () => {
      const addresses = await getAddresses(userId);
      dispatch(setAddressesAction(addresses));
      setLoading(false);
    };

    if (userId && addresses.length === 0) {
      getAdressesData();
    }

    if (addresses.length !== 0) {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (addresses.length !== 0) {
      const defaultAddress = addresses.find((address) => address.isDefault);
      setDefaultAddress(defaultAddress);
    }
  }, [addresses]);

  const handleDefaultAddressSetting = (address) => {
    if (!address.isDefault) {
      saveDefaultAddress(address._id);
      const updatedAddresses = [
        ...addresses.map((elem) => {
          if (elem._id !== address._id) {
            return { ...elem, isDefault: false };
          }

          return { ...elem, isDefault: true };
        }),
      ];
      dispatch(setAddressesAction(updatedAddresses));
    }
  };

  const handleEditAddress = (e, addressId) => {
    e.stopPropagation();
    navigate(`/address/edit/${addressId}`);
  };

  const handleDeleteAddress = (e, address) => {
    e.stopPropagation();
    deleteAddress(address._id);
    const filteredAddresses = addresses.filter((elem) => elem._id !== address._id);
    if (filteredAddresses.length !== 0) {
      if (address.isDefault) {
        filteredAddresses[0] = { ...filteredAddresses[0], isDefault: true };
      }
      dispatch(setAddressesAction(filteredAddresses));
    } else {
      dispatch(setAddressesAction([]));
    }

    if (sessionStorage.getItem('cleaning')) {
      const cleaning = JSON.parse(sessionStorage.getItem('cleaning'));
      if (cleaning.defaultAddressId === address._id) {
        const updatedCleaning = { ...cleaning, defaultAddressId: '' };
        sessionStorage.setItem('cleaning', JSON.stringify(updatedCleaning));
      }
    }
  };

  return (
    <div className="container">
      <div className="addresses">
        <h2 className="addresses__title">{t('addresses')}</h2>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="addresses__container">
            {addresses.length === 0 ? (
              <p className="addresses__no-data">{t('noSavedAddresses')}</p>
            ) : (
              <div className="addresses__wrap">
                <p className="adresses__text">{t('chooseDefaultAddress')}</p>
                <div className="addresses__list">
                  {defaultAddress._id &&
                    [defaultAddress, ...addresses.filter((address) => address._id !== defaultAddress._id)].map(
                      (address, index) => (
                        <div
                          key={index}
                          onClick={() => handleDefaultAddressSetting(address)}
                          className={`form__radio ${address.isDefault ? 'checked' : ''}`}
                        >
                          <div className="form__radio-value">
                            <svg
                              className={`form__radio-checked ${address.isDefault ? 'checked' : ''}`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                                fill="#E8E7E7"
                              />
                              <path
                                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                                fill="transparent"
                              />
                            </svg>
                            <span className="form__radio-label">
                              {`${address.address} ${address.secondAddress} ${address.postalCode} ${address.city} ${address.province}`}
                            </span>
                          </div>
                          <div className="form__buttons">
                            <div className="form__action-btn" onClick={(e) => handleEditAddress(e, address._id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9.99968 3.33333C10.7361 2.59695 11.93 2.59695 12.6663 3.33333V3.33333C13.4027 4.06971 13.4027 5.26362 12.6663 6L5.91879 12.7475C5.54372 13.1226 5.03501 13.3333 4.50458 13.3333L2.66634 13.3333L2.66634 11.4951C2.66634 10.9647 2.87705 10.456 3.25213 10.0809L9.99968 3.33333Z"
                                  stroke="#268664"
                                />
                                <path d="M9.33301 4L11.9997 6.66667" stroke="#268664" />
                              </svg>
                            </div>
                            <div className="form__action-btn" onClick={(e) => handleDeleteAddress(e, address)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path d="M12.6663 4.00065H3.33301" stroke="#268664" strokeLinecap="round" />
                                <path d="M9.33366 3.33268H6.66699" stroke="#268664" strokeLinecap="round" />
                                <path
                                  d="M4 6.66602V13.9993H12C12 13.3327 12 6.66602 12 6.66602"
                                  stroke="#268664"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                </div>
              </div>
            )}
            <button className="btn btn_light addresses__btn" onClick={() => navigate('/address/new')}>
              <img className="addresses__edit" src={edit} alt="Edit" />
              {t('newAddress')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addresses;
