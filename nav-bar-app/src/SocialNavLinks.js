import React from "react";

const SocialNavLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.id} href={link.url} target="_blank">
            {link.icon}
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNavLinks;
