import { IconType } from 'react-icons';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

// Type Aliases
type Footer = { title: string; to: string };

export const ABOUT_US: Array<Footer> = [
  { title: 'How it works', to: '/sign-up' },
  { title: 'Careers', to: '/' },
  { title: 'Investors', to: '/' },
  { title: 'Terms of Service', to: '/' },
];

export const CONTACT_US: Array<Footer> = [
  { title: 'Contact', to: '/' },
  { title: 'Support', to: '/' },
  { title: 'Destinations', to: '/' },
  { title: 'Sponsorships', to: '/' },
];

export const VIDEOS: Array<Footer> = [
  { title: 'Submit video', to: '/' },
  { title: 'Ambassadors', to: '/' },
  { title: 'Agency', to: '/' },
  { title: 'Influencer', to: '/' },
];

export const SOCIAL_MEDIA: Array<Footer> = [
  { title: 'Instagram', to: '/' },
  { title: 'Facebook', to: '/' },
  { title: 'YouTube', to: '/' },
  { title: 'Twitter', to: '/' },
];

type Icons = {
  to: string;
  target: string;
  'aria-label': string;
  icon: IconType;
};

export const ICONS: Array<Icons> = [
  {
    to: 'facebook.com',
    target: '_blank',
    'aria-label': 'Facebook',
    icon: FaFacebook,
  },
  {
    to: 'instagram.com',
    target: '_blank',
    'aria-label': 'Instagram',
    icon: FaInstagram,
  },
  {
    to: 'youtube.com',
    target: '_blank',
    'aria-label': 'Youtube',
    icon: FaYoutube,
  },
  {
    to: 'twitter.com',
    target: '_blank',
    'aria-label': 'Twitter',
    icon: FaTwitter,
  },
  {
    to: '/',
    target: '_blank',
    'aria-label': 'LinkedIn',
    icon: FaLinkedin,
  },
];
