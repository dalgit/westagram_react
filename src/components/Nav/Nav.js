import React from "react";
import "./Nav.scss";
import NavDropDown from "./NavDropDown/NavDropDown";
import NavDropSearch from "./NavDropSearch/NavDropSearch";

const Nav = ({ search, setSearch }) => {
  function saveSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <nav className="navbar">
      <div className="leftLogo">
        <img src="images/instagram.png" alt="tmp" className="leftLogoImg" />|
        westagram
      </div>
      <div>
        <input
          onChange={(e) => {
            saveSearch(e);
          }}
          className="navInput"
          type="text"
          placeholder="검색"
        />
        <div className="dropContainer">
          {search === "" ? (
            <NavDropDown search={search} />
          ) : (
            <NavDropSearch search={search} />
          )}
        </div>
      </div>
      <div className="rigthMenu">
        <img src="images/explore.png" alt="tmp" />
        <img src="images/heart.png" alt="tmp" />
        <img src="images/profile.png" alt="tmp" />
      </div>
    </nav>
  );
};

export default Nav;
