import React from "react";
import { Link, useParams } from "react-router-dom";
import CharacterThumbnail from "./characterThumbnail";

function CharacterShow() {
  const { name } = useParams();

  const [character, setCharacter] = React.useState(null);
  console.log(character);

  async function fetchCharacter() {
    const resp = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.&name=${name}`
    );
    const data = await resp.json();
    // console.log(data)
    // console.log(data.amiibo[0].character)
    // console.log(data.amiibo[0].image)
    setCharacter(data.amiibo);
    //console.log(character.name)
  }

  React.useEffect(() => {
    fetchCharacter();
  }, [name]);

  //------------COME BACK FOR LOADING SPINNER-------------
  if (!character) {
    return <p>Character Loading...</p>;
  }

  return (
    <section className="section">
      <Link to="/characterlist">{"⬅ Back to all amiibo"}</Link>
      <div className="container">
        <div className="columns">
          {character?.map((dataTest) => {
            return (
              <>
                <div className="column is-vcentered is-half is-mobile is-touch">
                  <figure className="image">
                    <img src={dataTest.image} />
                  </figure>
                </div>
                <div className="imagetext column is-half is-mobile is-touch">
                  <h2 className="title is-1">
                    <span className="has-text-weight-bold">
                      Character Name:
                    </span>{" "}
                    {dataTest.name}
                  </h2>
                  <p className="title is-3">
                    <span className="has-text-weight-bold">Amiibo Series:</span>{" "}
                    {dataTest.amiiboSeries}
                  </p>
                  <p className="title is-3">
                    <span className="has-text-weight-bold">Game Series : </span>
                    {dataTest.gameSeries}
                  </p>
                  <p className="title is-3">
                    <span className="has-text-weight-bold">
                      Type of Amiibo:
                    </span>{" "}
                    {dataTest.type}
                  </p>
                  <p className="title is-4">
                    <span className="has-text-weight-bold">
                      {" "}
                      Region Release Date:
                    </span></p>
                    <div className="list">
                      <ul>
                        <div className="list-item is-size-4">
                          <li> Austrailia:{dataTest.release.au}</li>
                        </div>
                        <div className="list-item is-size-4">
                          <li> Europe: {dataTest.release.eu}</li>
                        </div>
                        <div className="list-item is-size-4">
                          <li> Japan: {dataTest.release.jp}</li>
                        </div>
                        <div className="list-item is-size-4">
                          <li> USA: {dataTest.release.na} </li>
                        </div>
                      </ul>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CharacterShow;
