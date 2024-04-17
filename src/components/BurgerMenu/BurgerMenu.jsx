import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { setIsAuthAction, setUserAction } from '../../store/actions/userActions';
import {
  setActiveOrdersAction,
  setOpenedOrderAction,
  setOpenedSubscriptionAction,
  setPastOrdersAction,
} from '../../store/actions/ordersActions';
import { setCleaningAction } from '../../store/actions/cleaningActions';
import { defaultState } from '../../store/reducers/cleaningReducer';
import { logOut } from '../../http/authAPI';
import './BurgerMenu.scss';

const BurgerMenu = ({ isOpen, setIsOpen, setIsLoginOpen, setIsAuthorizationOpen }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  const dispatch = useDispatch();

  const modalRef = useRef(null);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeBurgerMenu = () => setIsOpen(false);

  const clearStore = () => {
    dispatch(setCleaningAction(defaultState));
    sessionStorage.removeItem('cleaning');
  };

  const handleLogOut = () => {
    closeBurgerMenu();
    logOut();
    dispatch(setIsAuthAction(false));
    dispatch(
      setUserAction({
        id: '',
        name: '',
        surname: '',
        mobile: '',
        email: '',
        role: '',
        addresses: [],
      }),
    );
    dispatch(setActiveOrdersAction([]));
    dispatch(setPastOrdersAction([]));
    dispatch(setOpenedSubscriptionAction({}));
    dispatch(setOpenedOrderAction({}));
    navigate('/');
    clearStore();
  };

  const handleAuthModalOpen = (isLoginOpen) => {
    closeBurgerMenu();
    setIsLoginOpen(isLoginOpen);
    setIsAuthorizationOpen(true);
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="burger-menu" ref={modalRef}>
        <svg
          className="burger-menu__close"
          onClick={() => setIsOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path d="M22.0708 22.0709L7.92862 7.92881" stroke="#268664" strokeLinecap="round" />
          <path d="M22.0714 7.92881L7.92925 22.0709" stroke="#268664" strokeLinecap="round" />
        </svg>
        <ul className="burger-menu__list">
          {!isAuth && (
            <li className="burger-menu__link burger-menu__link-auth" onClick={() => handleAuthModalOpen(false)}>
              {t('signUp')}
            </li>
          )}
          {!isAuth && (
            <li className="burger-menu__link burger-menu__link-auth" onClick={() => handleAuthModalOpen(true)}>
              {t('logIn')}
            </li>
          )}
          {isAuth && (
            <li>
              <div className="burger-menu__item" onClick={() => setIsProfileExpanded((state) => !state)}>
                <span className="burger-menu__link">{t('profile')}</span>
                <svg
                  className={`arrow ${isProfileExpanded ? 'rotated' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 10L12 16L18 10" stroke="black" strokeLinecap="round" />
                </svg>
              </div>
              <ul className={`burger-menu__sublist ${isProfileExpanded ? 'expanded' : ''}`}>
                <li>
                  <NavLink className="burger-menu__sublink" to="/personal-info" onClick={closeBurgerMenu}>
                    {t('personalInfo')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="burger-menu__sublink" to="/addresses" onClick={closeBurgerMenu}>
                    {t('addresses')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="burger-menu__sublink" to="/orders" onClick={closeBurgerMenu}>
                    {t('orders')}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="burger-menu__sublink" to="/settings" onClick={closeBurgerMenu}>
                    {t('settings')}
                  </NavLink>
                </li>
                <li>
                  <span className="burger-menu__sublink" onClick={handleLogOut}>
                    {t('logOut')}
                  </span>
                </li>
              </ul>
            </li>
          )}
          <li>
            <div className="burger-menu__item" onClick={() => setIsInfoExpanded((state) => !state)}>
              <span className="burger-menu__link">{t('info')}</span>
              <svg
                className={`arrow ${isInfoExpanded ? 'rotated' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M6 10L12 16L18 10" stroke="black" strokeLinecap="round" />
              </svg>
            </div>
            <ul className={`burger-menu__sublist ${isInfoExpanded ? 'expanded' : ''}`}>
              <li>
                <NavLink className="burger-menu__sublink" to="/info-price" onClick={closeBurgerMenu}>
                  {t('services')}
                </NavLink>
              </li>
              <li>
                <NavLink className="burger-menu__sublink" to="/cancellation-policy" onClick={closeBurgerMenu}>
                  {t('cancellationPolicy')}
                </NavLink>
              </li>
              <li>
                <NavLink className="burger-menu__sublink" to="/faq" onClick={closeBurgerMenu}>
                  {t('faq')}
                </NavLink>
              </li>
              <li>
                <NavLink className="burger-menu__sublink" to="/contact-us" onClick={closeBurgerMenu}>
                  {t('contactUs')}
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="burger-menu__link" to="/booking" onClick={closeBurgerMenu}>
              {t('bookNow')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
