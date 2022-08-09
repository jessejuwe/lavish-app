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
  { title: 'Careers', to: '/#' },
  { title: 'Investors', to: '/#' },
  { title: 'Terms of Service', to: '/#' },
];

export const CONTACT_US: Array<Footer> = [
  { title: 'Contact', to: '/#' },
  { title: 'Support', to: '/#' },
  { title: 'Destinations', to: '/#' },
  { title: 'Sponsorships', to: '/#' },
];

export const VIDEOS: Array<Footer> = [
  { title: 'Submit video', to: '/#' },
  { title: 'Ambassadors', to: '/#' },
  { title: 'Agency', to: '/#' },
  { title: 'Influencer', to: '/#' },
];

export const SOCIAL_MEDIA: Array<Footer> = [
  { title: 'Instagram', to: '//www.instagram.com' },
  { title: 'Facebook', to: '//www.facebook.com' },
  { title: 'YouTube', to: '//www.youtube.com' },
  { title: 'Twitter', to: '//www.twitter.com' },
];

type Icons = {
  to: string;
  icon: IconType;
};

export const ICONS: Array<Icons> = [
  {
    to: '//www.facebook.com',
    icon: FaFacebook,
  },
  {
    to: '//www.instagram.com',
    icon: FaInstagram,
  },
  {
    to: '//www.youtube.com',
    icon: FaYoutube,
  },
  {
    to: '//www.twitter.com',
    icon: FaTwitter,
  },
  {
    to: '//www.linkedin.com',
    icon: FaLinkedin,
  },
];
