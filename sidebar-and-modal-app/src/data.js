import {
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialGithub,
  TiHome,
  TiNews,
  TiContacts,
  TiInfo,
} from "react-icons/ti";

export const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
    icon: <TiHome />,
  },
  {
    id: 3,
    url: "/Blogs",
    name: "Blogs",
    icon: <TiNews />,
  },
  {
    id: 4,
    url: "/Contact",
    name: "Contact",
    icon: <TiContacts />,
  },
  {
    id: 2,
    url: "/About",
    name: "About",
    icon: <TiInfo />,
  },
];

export const socialLinks = [
  {
    id: 2,
    url: "https://youtube.com/",
    icon: <TiSocialYoutube />,
  },
  {
    id: 3,
    url: "https://instagram.com/",
    icon: <TiSocialInstagram />,
  },
  {
    id: 1,
    url: "https://github.com/swapnil-ingle",
    icon: <TiSocialGithub />,
  },
];
