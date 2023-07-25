import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <li> <a>Portfolio</a></li>
          </div>

          <div className="navlink">
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">Portfolio</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>

              <li>
                <a href="#resume">Skills</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
