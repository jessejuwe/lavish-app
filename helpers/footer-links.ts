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
  { title: 'Instagram', to: 'instagram.com' },
  { title: 'Facebook', to: 'facebook.com' },
  { title: 'YouTube', to: 'youtube.com' },
  { title: 'Twitter', to: 'twitter.com' },
];

type Icons = {
  to: string;
  target: string;
  icon: IconType;
};

export const ICONS: Array<Icons> = [
  {
    to: 'facebook.com',
    target: '_blank',
    icon: FaFacebook,
  },
  {
    to: 'instagram.com',
    target: '_blank',
    icon: FaInstagram,
  },
  {
    to: 'youtube.com',
    target: '_blank',
    icon: FaYoutube,
  },
  {
    to: 'twitter.com',
    target: '_blank',
    icon: FaTwitter,
  },
  {
    to: 'linkedin.com',
    target: '_blank',
    icon: FaLinkedin,
  },
];
