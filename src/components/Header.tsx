import React from "react";

const Header = () => {
  return (
    <header>
      <div className="slide-from-top top-section">
        <h1>Mateo Sierra</h1>
      </div>
      <nav className="main-navigation">
        <ul>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
