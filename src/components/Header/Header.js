import React from "react";
import "./Header.css";

const navItems = ["Home", "Favorites"];

const Header = ({ viewChange }) => (
  <header className="App-header">
    <div className="logo">
      <h1>TopMusic</h1>
    </div>
    <div className="nav-list flex">
      {navItems.map(item => (
        <div className="nav-list-item" onClick={viewChange}>
          {item}
        </div>
      ))}
    </div>
  </header>
);

export default Header;
