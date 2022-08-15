import React from "react";
import "./NavDropDown.scss";

const NavDropDown = ({ search }) => {
  return (
    <div className="recentDropBox">
      <div class="recentTop">
        <div className="topText1">최근 검색 항목</div>
        <div className="topText2">모두 지우기</div>
      </div>
      <div className="recentUser">
        <div className="recentUserProfile">
          <img src="./images/user1.jpg" alt="" className="userImg" />
          <div>
            <div className="userName1">nickName</div>
            <div className="userName2">안녕하세요</div>
          </div>
        </div>
        <img src="./images/close.png" alt="" className="closeImg" />
      </div>
      <div className="recentUser">
        <div className="recentUserProfile">
          <img src="./images/user1.jpg" alt="" className="userImg" />
          <div>
            <div className="userName1">nickName</div>
            <div className="userName2">안녕하세요</div>
          </div>
        </div>
        <img src="./images/close.png" alt="" className="closeImg" />
      </div>
    </div>
  );
};

export default NavDropDown;
