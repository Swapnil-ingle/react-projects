import React from "react";

const NavLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.id} href={link.url}>
            {link.name}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
