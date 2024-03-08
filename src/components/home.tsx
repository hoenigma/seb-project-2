import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        
        <div className="hero-body ">
          <div className="container amiibo has-text-centered " id="intro">
            <div className ="anything">
            <Link to={"/characterlist"}>
              <h2 id="hometitle">Amiibo Search</h2>
              <p id="homesubtitle">Click to see all your favourite Amiibos!</p>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;
