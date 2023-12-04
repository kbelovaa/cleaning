import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className={`header ${isAuth ? 'isauth' : ''}`}>
            <span className="header__label" onClick={() => navigate('/')}>
              Cleaning
            </span>
            <nav className='header__menu'>
              <ul className="header__auth">
                <li className="header__link" onClick={() => navigate('/sign-up')}>
                  Sign up
                </li>
                <li className="header__link" onClick={() => navigate('/log-in')}>
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
      <Outlet />
      <Footer />
      {/* <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} /> */}
    </div>
  );
};

export default Header;
