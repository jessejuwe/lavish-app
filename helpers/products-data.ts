import imgFour from '../public/assets/images/svg-4.svg';
import imgFive from '../public/assets/images/svg-5.svg';
import imgSeven from '../public/assets/images/svg-7.svg';
import imgEight from '../public/assets/images/svg-8.svg';

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

export const productsObjOne: Props = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'VIEW OUR PRODUCTS',
  headline: 'Shop through our catalog of products',
  description:
    'We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request',
  buttonLabel: 'Shop Now',
  imgStart: '',
  img: imgFour,
  alt: 'Credit Card',
};

export const productsObjTwo: Props = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '100% SECURE',
  headline: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: imgFive,
  alt: 'Vault',
};

export const productsObjThree: Props = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EASY SETUP',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: imgSeven,
  alt: 'Vault',
};

export const productsObjFour: Props = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'DATA ANALYTICS',
  headline: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: imgEight,
  alt: 'Vault',
};
