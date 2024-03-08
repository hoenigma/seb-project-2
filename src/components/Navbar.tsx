import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/amiiboLogoTP.png"
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-info">
          <div className="navbar-start">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <img src={logo} alt="logo"/>
                  </div>
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/characterlist">
                    Character List
                  </Link>

                  {/* <Link to="/character">
            -------------Random Character--------------------------------
        </Link> */}
                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
