import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard, SiAboutdotme } from 'react-icons/si';
import { MdArticle } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },

  {
    title: 'Cards',
    path: '/card',
    icon: <MdArticle />,
  },

  {
    title: 'Signup',
    path: '/signup',
    icon: <SiGnuprivacyguard />,
  },
  {
    title: 'Login',
    path: '/login',
    icon: <AiOutlineLogin />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <SiAboutdotme />,
  },
];
