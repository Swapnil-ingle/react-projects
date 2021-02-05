import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { socialLinks, links } from "./data";
import NavLinks from "./NavLinks";
import SocialNavLinks from "./SocialNavLinks";

const NavBar = () => {
  const navLinkRespRef = useRef("");

  const displayNavLinksResp = () => {
    navLinkRespRef.current.classList.toggle("hide");
  };

  return (
    <>
      <nav>
        <div className="nav-header">
          <h1>Typical Logo</h1>
        </div>
        <div className="hamburger-container">
          <button onClick={displayNavLinksResp}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="nav-links">
          <NavLinks links={links} />
        </div>
        <div className="nav-social-links">
          <SocialNavLinks links={socialLinks} />
        </div>
      </nav>
      <div className="nav-links-resp hide" ref={navLinkRespRef}>
        <NavLinks links={links} />
      </div>
    </>
  );
};

export default NavBar;
