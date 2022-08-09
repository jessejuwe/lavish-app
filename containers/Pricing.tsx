import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Button from '../components/Buttons/Button';
import { PRICING } from '../helpers/pricing';

type Props = {
  to: string;
  icon: IconType;
  h3: string;
  h4: string;
  p: string;
  ul: Array<string>;
  buttonSize: string;
  buttonColor: string;
  buttonText: string;
};

const Pricing: React.FC = props => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '64' }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            {PRICING.map((item, index) => (
              <Link href={item.to} key={index}>
                <div className="pricing__container-card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <item.icon />
                    </div>
                    <h3>{item.h3}</h3>
                    <h4>{item.h4}</h4>
                    <p>{item.p}</p>
                    <ul className="pricing__container-features">
                      {item.ul.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <Button
                      buttonSize={item.buttonSize}
                      buttonColor={item.buttonColor}
                    >
                      {item.buttonText}
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Pricing;
