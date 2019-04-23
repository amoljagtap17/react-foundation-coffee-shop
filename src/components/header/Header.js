import React from 'react'
import { Link } from 'react-router-dom'

import headerStyles from 'components/header/header.module.scss'
import logoImg from 'assets/img/logo.svg'

const Header = () => (
  <header className={headerStyles.siteHeader}>
    <div className="container">
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.topSection}>
          <div className={headerStyles.logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={headerStyles.menus}>
            <nav className={headerStyles.socialMenu}>
              <a href="https://www.facebook.com"><span className="hide">Facebook</span></a>
              <a href="https://www.twitter.com"><span className="hide">Twitter</span></a>
              <a href="https://www.instagram.com"><span className="hide">Instagram</span></a>
              <a href="https://www.youtube.com"><span className="hide">Youtube</span></a>
            </nav>

            <div className={`title-bar ${headerStyles.titleBar}`} data-responsive-toggle="main-nav" data-hide-for="medium">
              <button className="menu-icon" type="button" data-toggle="main-nav"></button>
              <div className="title-bar-title">Menu</div>
            </div>

            <ul id="main-nav" className={headerStyles.mainNavigation} data-toggler data-animate={`${headerStyles.menuIn} ${headerStyles.menuOut}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Process</Link>
              </li>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={headerStyles.bottomSection}>
          <h1 className={headerStyles.slogan}>A new Experience Everyday</h1>
        </div>
      </div>
    </div>
  </header>
)

export default Header
