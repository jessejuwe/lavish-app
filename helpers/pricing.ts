import { IconType } from 'react-icons';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';

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

export const PRICING: Array<Props> = [
  {
    to: '/sign-up',
    icon: FaFire,
    h3: 'Starter',
    h4: '$8.99',
    p: 'per month',
    ul: ['100 Transactions', '2% Cash Back', '$10,000 Limit'],
    buttonSize: 'btn--wide',
    buttonColor: 'primary',
    buttonText: 'Choose Plan',
  },
  {
    to: '/sign-up',
    icon: BsXDiamondFill,
    h3: 'Gold',
    h4: '$29.99',
    p: 'per month',
    ul: ['1000 Transactions', '3.5% Cash Back', '$100,000 Limit'],
    buttonSize: 'btn--wide',
    buttonColor: 'accent-blue',
    buttonText: 'Choose Plan',
  },
  {
    to: '/sign-up',
    icon: GiCrystalize,
    h3: 'Diamond',
    h4: '$99.99',
    p: 'per month',
    ul: ['Unlimited Transactions', '5% Cash Back', 'Unlimited Spending'],
    buttonSize: 'btn--wide',
    buttonColor: 'primary',
    buttonText: 'Choose Plan',
  },
];
