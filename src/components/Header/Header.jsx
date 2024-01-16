import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Authorization from '../Authorization/Authorization';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('');
  const [showSdl, setShowSdl] = useState(false);
  const [isLanguageOpened, setIsLanguageOpened] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isBook = pathname.startsWith('/booking');
  const isMain = pathname === '/';

  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const availableLanguages = Object.keys(i18n.options.resources);

  const lngRef = useRef(null);

  useEffect(() => {
    if (isBook || isMain) {
      setShowSdl(false);
    } else {
      setShowSdl(true);
    }

    const handleScroll = () => {
      const { scrollY } = window;
      let color = '';
      if (isBook) {
        if (scrollY > 410) {
          color = 'white';
          setShowSdl(true);
        } else if (scrollY > 0) {
          if (scrollY > 170) {
            setShowSdl(true);
          } else {
            setShowSdl(false);
          }
          color = 'green';
        }
      } else if (scrollY > 0 && !isMain) {
        color = 'white';
      }
      setHeaderColor(color);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (lngRef.current && !lngRef.current.contains(e.target)) {
        setIsLanguageOpened(false);
      }
    };

    if (isLanguageOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpened]);

  const openLanguages = () => {
    setIsLanguageOpened((state) => !state);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    setIsLanguageOpened(false);
  };

  const handleAuthModalOpen = (isLoginOpen) => {
    setIsLoginOpen(isLoginOpen);
    setIsAuthorizationOpen(true);
  };

  return (
    <div className="content">
      <header id="header" className={`header-section ${headerColor} ${isMain ? 'main' : ''}`}>
        <div className="container">
          <div className={`header ${isAuth ? 'isauth' : ''}`}>
            <span className={`header__label ${showSdl ? '' : 'header__label_hidden'}`} onClick={() => navigate('/')}>
              Sdl
            </span>
            <nav className="header__menu">
              <ul className="header__auth">
                <li className="header__link" onClick={() => handleAuthModalOpen(false)}>
                  {t('signUp')}
                </li>
                <li className="header__link" onClick={() => handleAuthModalOpen(true)}>
                  {t('logIn')}
                </li>
              </ul>
              <div className="language-wrap">
                <div className={`language ${isLanguageOpened ? 'opened' : ''}`} ref={lngRef}>
                  <div className="language__selected" onClick={openLanguages}>
                    <span className="language__value">{language}</span>
                    <svg
                      className="language__arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.716265 3.83318C0.314979 4.25521 0.314979 4.91773 0.716265 5.33976L8 13L15.2837 5.33976C15.685 4.91773 15.685 4.25521 15.2837 3.83318C14.8528 3.37997 14.1302 3.37997 13.6993 3.83318L8 9.82706L2.30072 3.83318C1.86979 3.37998 1.14719 3.37998 0.716265 3.83318Z"
                        fill="#B0B0B0"
                      />
                    </svg>
                  </div>
                  <div className="language__variants">
                    {availableLanguages.map((elem, index) => (
                      <span
                        key={index}
                        className={`language__value ${elem !== language ? 'not-selected' : ''}`}
                        onClick={() => changeLanguage(elem)}
                      >
                        {elem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="burger" onClick={() => setIsBurgerMenuOpen(true)}>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Outlet context={setIsAuthorizationOpen} />
      <Footer />
      <Authorization
        isOpen={isAuthorizationOpen}
        setIsOpen={setIsAuthorizationOpen}
        isLogin={isLoginOpen}
        setIsLogin={setIsLoginOpen}
      />
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        setIsOpen={setIsBurgerMenuOpen}
        setIsLoginOpen={setIsLoginOpen}
        setIsAuthorizationOpen={setIsAuthorizationOpen}
      />
    </div>
  );
};

export default Header;
