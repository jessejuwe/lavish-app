import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes, FaFingerprint } from 'react-icons/fa';
import { SiStartrek } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import Button from '../components/Buttons/Button';
import { NAVBAR } from '../helpers/navbar';

type Props = {};

const Header: React.FC = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const clickhandler = () => setClicked(!clicked);

  const closeMobileMenuHandler = () => setClicked(false);

  const showButtonHandler = useCallback(() => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);

  useEffect(() => {
    showButtonHandler();
    window.addEventListener('resize', showButtonHandler);
    return window.removeEventListener('resize', showButtonHandler);
  }, [showButtonHandler]);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className="navbar">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="navbar-logo">
            <div className="icon-group" onClick={closeMobileMenuHandler}>
              <SiStartrek className="navbar-icon" />
              <p className="text-[#fff] self-center text-xl font-semibold whitespace-nowrap">
                LAVISH
              </p>
            </div>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="menu-icon"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={clickhandler}
          >
            {clicked ? <FaTimes /> : <FaBars />}
          </button>

          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              {NAVBAR.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onClick={closeMobileMenuHandler}
                >
                  <Link href={item.to} className="nav-links">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-btn">
                {button ? (
                  <Link href="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link href="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenuHandler}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Header;
