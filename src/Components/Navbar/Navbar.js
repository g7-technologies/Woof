/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import logo from "../../images/mainlogo.png";
import Discord from "../../images/discord.png";
import Twitter from "../../images/twitter.png";
import Sea from "../../images/opensea.png";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 350 + "px";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="nav-logo">
        <img src={logo} className="img-fluid" alt="" />
      </div>
      <div className="nav-link-container">
        <ul>
          <li>
            <Link
              to="/"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/mint"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              Mint
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/roadmap"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              Roadmap
            </Link>
          </li>

          <li className="social-media-icon">
            <a href="https://discord.com/invite/HWRTA8MCpu">
              <img src={Discord} className="img-fluid" alt="Discord" />
            </a>
            <a href="https://twitter.com/wolfgangtwit">
              <img src={Twitter} className="img-fluid" alt="twitter" />
            </a>
            <a href="#">
              <img src={Sea} className="img-fluid" alt="sea" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {mobileMenu ? (
            <Icon icon="akar-icons:cross" />
          ) : (
            <Icon icon="uim:bars" />
          )}
        </button>
      </div>
    </Wrapper>
  );
}

export default Navbar;
