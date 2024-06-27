import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getNotifications } from '../../http/notificationsAPI';
import Footer from '../Footer/Footer';
import Authorization from '../Authorization/Authorization';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Notifications from '../Notifications/Notifications';
import './Header.scss';

const Header = ({ loading, socket }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const userId = useSelector((state) => state.user.id);

  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('');
  const [showSdl, setShowSdl] = useState(false);
  const [isLanguageOpened, setIsLanguageOpened] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [newNotifications, setNewNotifications] = useState([]);
  const [archiveNotifications, setArchiveNotifications] = useState([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [breakPoint1, setBreakPoint1] = useState();
  const [breakPoint2, setBreakPoint2] = useState();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isBook = pathname.startsWith('/booking');
  const isMain = pathname === '/';
  const isVerification = pathname.startsWith('/verification');

  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const availableLanguages = Object.keys(i18n.options.resources);

  const lngRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const result = await getNotifications(userId);

      if (result.status === 200) {
        setNotifications(result.data.notifications);
        setNotificationsLoading(false);
      }
    };
    if (userId) {
      getData();
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      socket.on('new-notification', ({ newNotification }) => {
        if (newNotification.userId === userId) {
          setNotifications((notifications) => [...notifications, newNotification]);
        }
      });
    }

    return () => {
      socket.disconnect();
    };
  }, [socket, userId]);

  useEffect(() => {
    const newNotifications = notifications.filter((elem) => !elem.readStatus);
    setNewNotifications(newNotifications.reverse());
    const archiveNotifications = notifications.filter((elem) => elem.readStatus);
    setArchiveNotifications(archiveNotifications.reverse());
  }, [notifications]);

  useEffect(() => {
    const handleResize = () => {
      const { width } = window.screen;

      switch (true) {
        case width <= 744:
          setBreakPoint1(130);
          setBreakPoint2(220);
          break;
        case width <= 1024:
          setBreakPoint1(175);
          setBreakPoint2(320);
          break;
        case width <= 1440:
          setBreakPoint1(195);
          setBreakPoint2(340);
          break;
        default:
          setBreakPoint1(170);
          setBreakPoint2(360);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        if (scrollY > breakPoint2) {
          color = 'white';
          setShowSdl(true);
        } else if (scrollY > 0) {
          if (scrollY > breakPoint1) {
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
  }, [pathname, breakPoint1, breakPoint2]);

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
              <ul className={isVerification ? 'hidden' : 'header__auth'}>
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
              <div
                className={isAuth && !isVerification ? 'bell' : 'hidden'}
                onClick={() => setIsNotificationsOpen(true)}
              >
                <svg
                  className="bell__sign"
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
                <span className={newNotifications.length > 0 ? 'bell__counter' : 'hidden'}>
                  {newNotifications.length > 99 ? '99+' : newNotifications.length}
                </span>
              </div>
              <div className={isVerification ? 'hidden' : 'burger'} onClick={() => setIsBurgerMenuOpen(true)}>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Outlet context={setIsAuthorizationOpen} />
      {!isVerification && <Footer />}
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
      <Notifications
        isOpen={isNotificationsOpen}
        setIsOpen={setIsNotificationsOpen}
        newNotifications={newNotifications}
        archiveNotifications={archiveNotifications}
        loading={notificationsLoading}
        setNotifications={setNotifications}
      />
    </div>
  );
};

export default Header;
