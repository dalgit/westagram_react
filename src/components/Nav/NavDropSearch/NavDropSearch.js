import React from "react";
import "./NavDropSearch.scss";
import { useNavigate, Link } from "react-router-dom";

const NavDropSearch = ({ search, data, setSearchs }) => {
  function inputFiltering() {
    return data?.filter((c) => c["user_name"].toLowerCase().includes(search));
  }

  function seee() {
    console.log("fff");
  }
  return (
    <>
      <div className="searchDropBox">
        {inputFiltering().map((c) => {
          return (
            <div className="searchUserProfile" onclick={seee}>
              <img src={c["user_img"]} alt="" className="userImg" />
              <div>
                <div className="userName1">{c["user_name"]}</div>
                <div className="userName2">{c["user_second_name"]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavDropSearch;
