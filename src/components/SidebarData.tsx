import * as FaIcons from 'react-icons/fa';
import { MdArticle } from 'react-icons/md';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <FaIcons.FaHome />,
  // },
  {
    title: 'Create Card',
    path: '/createNewCard',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'My Cards',
    path: '/adminPanel',
    icon: <MdArticle />,
  },
  {
    title: 'All Cards',
    path: '/displayallcards',
    icon: <MdArticle />,
  },

  {
    title: 'About',
    path: '/about',
    icon: <InfoIcon />,
  },
];
