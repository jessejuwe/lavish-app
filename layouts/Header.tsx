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
  const [navbar, setNavbar] = useState(false);

  const clickhandler = () => setClicked(!clicked);

  const closeMobileMenuHandler = () => setClicked(false);

  const showButtonHandler = useCallback(() => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);

  // prettier-ignore
  const navbarBackgroundHandler = () => window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);

  useEffect(() => {
    showButtonHandler();
    // Event Listener for resize
    window.addEventListener('resize', showButtonHandler);
    // Event Listener for scroll
    window.addEventListener('scroll', navbarBackgroundHandler);
    return window.removeEventListener('resize', showButtonHandler);
  }, [showButtonHandler]);

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      {/* <nav className={navbar ? 'navbar active' : 'navbar'}> */}
      <nav className="navbar">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="navbar-logo">
            <div className="icon-group" onClick={closeMobileMenuHandler}>
              <SiStartrek className="navbar-icon" />
              <p className="text-white self-center text-xl font-semibold whitespace-nowrap">
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
                  className={navbar ? 'nav-item active' : 'nav-item'}
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
