import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const isBook = pathname === '/';

    const handleScroll = () => {
      const { scrollY } = window;
      let color = '';
      if (isBook) {
        if (scrollY > 410) {
          color = 'white';
        } else if (scrollY > 0) {
          color = 'green';
        }
      } else if (scrollY > 0) {
        color = 'white';
      }
      setHeaderColor(color);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleAuthModalOpen = (isLoginOpen) => {
    setIsLoginOpen(isLoginOpen);
    setIsAuthorizationOpen(true);
  };

  return (
    <div className="content">
      <header className={`header-section ${headerColor}`}>
        <div className="container">
          <div className={`header ${isAuth ? 'isauth' : ''}`}>
            <span className="header__label" onClick={() => navigate('/')}>
              Cleaning
            </span>
            <nav className="header__menu">
              <ul className="header__auth">
                <li className="header__link" onClick={() => handleAuthModalOpen(false)}>
                  Sign up
                </li>
                <li className="header__link" onClick={() => handleAuthModalOpen(true)}>
                  Log in
                </li>
              </ul>
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
      <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
    </div>
  );
};

export default Header;
