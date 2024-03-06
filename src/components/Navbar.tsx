import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/characterlist">Character List</Link>
        {/* <Link to="/character">
            -------------Random Character--------------------------------
        </Link> */}
      </header>
    </>
  );
}

export default Navbar;
