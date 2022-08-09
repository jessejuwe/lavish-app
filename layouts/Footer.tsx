import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { SiStartrek } from 'react-icons/si';
import Button from '../components/Buttons/Button';
// prettier-ignore
import { ABOUT_US, CONTACT_US, SOCIAL_MEDIA, VIDEOS, ICONS } from '../helpers/footer-links';

type Props = {};

const Footer: React.FC<Props> = props => {
  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <footer>
        <div className="footer-container">
          <section className="footer-subscription">
            <p className="footer-subscription-heading">
              Join our exclusive membership to receive the latest news and
              trends
            </p>
            <p className="footer-subscription-text">
              You can unsubscribe at any time.
            </p>
            <div className="input-areas">
              <form>
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <Button buttonStyle="btn--outline">Subscribe</Button>
              </form>
            </div>
          </section>

          <div className="footer-links">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>About Us</h2>
                {ABOUT_US.map((item, index) => (
                  <Link key={index} href={item.to}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="footer-link-items">
                <h2>Contact Us</h2>
                {CONTACT_US.map((item, index) => (
                  <Link key={index} href={item.to}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>Videos</h2>
                {VIDEOS.map((item, index) => (
                  <Link key={index} href={item.to}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="footer-link-items">
                <h2>Social Media</h2>
                {SOCIAL_MEDIA.map((item, index) => (
                  <a
                    key={index}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link href="/" className="social-logo">
                  <div className="icon-group">
                    <SiStartrek className="navbar-icon" />
                    <p className="text-white self-center text-xl font-semibold whitespace-nowrap">
                      LAVISH
                    </p>
                  </div>
                </Link>
              </div>

              <small className="website-rights">
                Copyright © 2022 LAVISH All rights reserved.
                <span className="text-secondary ml-2">IKTHEENIGMA</span>
              </small>

              <div className="social-icons">
                {ICONS.map((item, index) => (
                  <a
                    href={item.to}
                    key={index}
                    className="social-icon-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
