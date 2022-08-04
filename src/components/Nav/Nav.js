import React from 'react'
import './Nav.scss'
const Nav = () => {
  return (
    <nav className="navbar">
    <div className="leftLogo">
        <img src="images/instagram.png" alt='tmp' className='leftLogoImg'/>| westagram
    </div>
    <input className="navInput" type="text" placeholder="검색" />
    <div className="rigthMenu">
        <img src="images/explore.png" alt='tmp' />
        <img src="images/heart.png" alt='tmp' />
        <img src="images/profile.png" alt='tmp' />
    </div>
</nav>
  )
}

export default Nav