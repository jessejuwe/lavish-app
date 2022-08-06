import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Button from '../components/Buttons/Button';

type Props = {
  lightBg: Boolean;
  lightText: Boolean;
  lightTextDesc: Boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
  imgStart: string;
};

const SectionOne: React.FC<Props> = props => {
  return (
    <Fragment>
      <div
        className={
          props.lightBg ? 'home__section-one' : 'home__section-one darkBg'
        }
      >
        <div className="container">
          <div
            className={`row home__section-row flex ${
              props.imgStart === 'start' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className="col">
              <div className="home__section-text-wrapper">
                <div className="top-line">{props.topLine}</div>
                <h1 className={props.lightText ? 'heading' : 'heading dark'}>
                  {props.headline}
                </h1>
                <p
                  className={
                    props.lightTextDesc
                      ? 'home__section-subtitle'
                      : 'home__section-subtitle dark'
                  }
                >
                  {props.description}
                </p>
                <Link href="sign-up">
                  <Button
                    buttonSize="btn--wide"
                    buttonColor={props.lightBg ? 'green' : 'blue'}
                  >
                    {props.buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="home__section-img-wrapper">
                <Image
                  src={props.img}
                  alt={props.alt}
                  layout="intrinsic"
                  className="home__section-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionOne;
