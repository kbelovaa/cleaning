import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { setIsAuthAction } from '../../store/actions/userActions';
import './BurgerMenu.scss';

const BurgerMenu = ({ isOpen, setIsOpen, setIsLoginOpen, setIsAuthorizationOpen }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  const dispatch = useDispatch();

  const modalRef = useRef(null);

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

  const handleLogOut = () => {
    closeBurgerMenu();
    dispatch(setIsAuthAction(false));
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
          <path
            d="M28.5428 28.5443C27.9977 29.0894 27.1147 29.0894 26.5698 28.5443L14.9983 16.9727L3.4268 28.5443C2.8817 29.0894 1.99871 29.0894 1.45375 28.5443C0.908647 27.9992 0.908647 27.1162 1.45375 26.5712L13.0252 14.9996L1.45375 3.428C0.908647 2.8829 0.908647 1.9999 1.45375 1.45493C1.72623 1.18244 2.08335 1.04613 2.44034 1.04613C2.79733 1.04613 3.15432 1.18244 3.42693 1.45493L14.9984 13.0265L26.5699 1.45493C26.8424 1.18244 27.1995 1.04613 27.5565 1.04613C27.9135 1.04613 28.2705 1.18244 28.5431 1.45493C29.0882 2.00003 29.0882 2.88303 28.5431 3.428L16.9716 14.9996L28.5431 26.5712C29.0879 27.1162 29.0879 27.9992 28.5428 28.5443Z"
            fill="#268664"
          />
        </svg>
        <ul className="burger-menu__list">
          <li>
            <NavLink className="burger-menu__link" to="/booking" onClick={closeBurgerMenu}>
              {t('book')}
            </NavLink>
          </li>
          <li className={!isAuth ? 'burger-menu__link burger-menu__link-auth' : 'hidden'} onClick={() => handleAuthModalOpen(false)}>
            {t('signUp')}
          </li>
          <li className={!isAuth ? 'burger-menu__link burger-menu__link-auth' : 'hidden'} onClick={() => handleAuthModalOpen(true)}>
            {t('logIn')}
          </li>
          <li className={isAuth ? '' : 'hidden'}>
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
                {/* <NavLink className="burger-menu__sublink" to="/personal-info" onClick={closeBurgerMenu}> */}
                <NavLink className="burger-menu__sublink" to="/p" onClick={closeBurgerMenu}>
                  {t('personalInfo')}
                </NavLink>
              </li>
              <li>
                {/* <NavLink className="burger-menu__sublink" to="/addresses" onClick={closeBurgerMenu}> */}
                <NavLink className="burger-menu__sublink" to="/a" onClick={closeBurgerMenu}>
                  {t('addresses')}
                </NavLink>
              </li>
              <li>
                {/* <NavLink className="burger-menu__sublink" to="/orders" onClick={closeBurgerMenu}> */}
                <NavLink className="burger-menu__sublink" to="/o" onClick={closeBurgerMenu}>
                  {t('orders')}
                </NavLink>
              </li>
              <li>
                {/* <NavLink className="burger-menu__sublink" to="/settings" onClick={closeBurgerMenu}> */}
                <NavLink className="burger-menu__sublink" to="/s" onClick={closeBurgerMenu}>
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
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
