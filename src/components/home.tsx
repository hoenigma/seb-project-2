import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container amiibo has-text-centered" id="intro">
            <Link to={"/characterlist"}>
              <h2 className="title">Amiibo Search</h2>
              <p className="subtitle">Details on all your favourite Amiibos!</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
