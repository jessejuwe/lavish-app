import imgSix from '../public/assets/images/svg-6.svg';

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

export const signupObjOne: Props = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'SIGN UP TODAY',
  headline: 'Join today to receive an exclusive offer',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  buttonLabel: 'Sign Up',
  imgStart: '',
  img: imgSix,
  alt: 'Credit Card',
};
