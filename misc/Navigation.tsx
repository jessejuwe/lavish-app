import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes, FaFingerprint } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Button from '../components/Buttons/Button';
import { NAVBAR } from '../helpers/navbar';

type Props = {};

const Navigation: React.FC = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const clickhandler = () => setClicked(!clicked);

  const closeMobileMenuHandler = () => setClicked(false);

  let navMenuClass = 'nav-menu';

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
      <nav className="bg-[#1c2237] h-20 flex justify-center items-center text-[1.2rem] relative top-0 z-[999] md:sticky">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link
            href="/"
            className="absolute top-0 left-0 translate-x-1/4 translate-y-2/4 md:navbar-logo"
            onClick={closeMobileMenuHandler}
          >
            <div className="icon-group">
              <FaFingerprint className="navbar-icon" />
              <p className="self-center text-xl font-semibold whitespace-nowrap">
                LAVISH
              </p>
            </div>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-400 transition-all duration-500 ease-in"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={clickhandler}
          >
            {clicked ? <FaTimes /> : <FaBars />}
          </button>

          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul
              className={
                clicked
                  ? 'nav-menu active'
                  : 'flex flex-col w-full h-[90vh] absolute top-20 -left-full opacity-100 transition-all duration-500 ease-in md:flex-row md:items-center md:list-none md:text-center md:justify-end md:static'
              }
            >
              {NAVBAR.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    href={item.to}
                    className=""
                    onClick={closeMobileMenuHandler}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-btn">
                {button ? (
                  <Link href="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link href="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenuHandler}
                    >
                      Sign Up
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

export default Navigation;
