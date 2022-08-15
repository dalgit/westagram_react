import React from "react";
import "./NavDropSearch.scss";

const NavDropSearch = ({ search, data }) => {
  function inputFiltering() {
    return data?.filter((c) => c["user_name"].toLowerCase().includes(search));
  }

  return (
    <>
      <div className="searchDropBox">
        {inputFiltering().map((c) => {
          return (
            <div className="searchUserProfile">
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
