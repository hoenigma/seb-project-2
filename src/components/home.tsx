import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Amiibo Search</h2>
            <p>Details on all your favourite Amiibos!</p>
            <Link to = {"/Characterlist"}>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
