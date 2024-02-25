import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Authorization from '../Authorization/Authorization';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

const Header = ({ loading }) => {
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
        if (scrollY > 360) {
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
            <nav className={`header__menu ${loading ? '' : 'visible'}`}>
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M6 9L12 15L18 9" stroke="#B0B0B0" strokeLinecap="round" />
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
              <svg
                className={isAuth ? 'bell' : 'hidden'}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 3.75C19.1421 3.75 22.5 7.1078 22.5 11.2499C22.5 13.6414 22.5 16.0427 22.5 17.5C22.5 21.25 25 22.5 25 22.5L5 22.5C5 22.5 7.5 21.25 7.5 17.5C7.5 16.0427 7.5 13.6414 7.5 11.2499C7.5 7.1078 10.8579 3.75 15 3.75V3.75Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
                <path d="M12.5 22.5C12.5 23.8807 13.6193 25 15 25C16.3807 25 17.5 23.8807 17.5 22.5" stroke="black" />
              </svg>
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
