import './Navbar.css'
import SideNav from './SideNav';
import { useState } from 'react'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

    return (
      <>
        <div className="navbar">
          <div className="menu" onClick={toggleNav}>
            <div className="menu-lines">
              <div className="split-menu-line">
                <div className="menu-line big" style={{width: "10px"}}></div>
                <div className="menu-line small" style={{width: "4px"}}></div>
              </div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
            <p className="menu-text">Menu</p>
          </div>
          <img src="/BMW-Homepage-Redesign/pictures/BMW.png" alt="BMW logo" className="logo"/>
          <a href="https://www.bmw.ca/en/ssl/MyAccount.html" target="_blank"><i class="ri-user-6-line"></i></a>
        </div>
        <SideNav isMenuOpen={isNavOpen} onClose={toggleNav}/> 
      {isNavOpen && (<div className="menu-overlay" onClick={toggleNav}></div>)}
      </>
    )
}

export default Navbar