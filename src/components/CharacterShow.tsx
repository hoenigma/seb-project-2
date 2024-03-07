import React from "react";
import { Link, useParams } from "react-router-dom";
import CharacterThumbnail from "./characterThumbnail";



function CharacterShow(){
    const{name} = useParams()

    const [character, setCharacter] = React.useState(null)
    console.log(character)
    

     async function fetchCharacter() {
      const resp = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.&name=${name}`)
      const data = await resp.json()
      // console.log(data)
      // console.log(data.amiibo[0].character)
      // console.log(data.amiibo[0].image)
      setCharacter(data.amiibo)
      //console.log(character.name)
    
    }

React.useEffect(() => {
  fetchCharacter()
}, [name])

//------------COME BACK FOR LOADING SPINNER-------------
if (!character) {
    return <p>Character Loading...</p>
  }

  return <section className="section">
    <div className="container">
      <Link to="/characterlist">{"⬅ Back to all amiibo"}</Link>
      {character?.map((dataTest) => {
        return<>
      <h2 className="title">{dataTest.name}</h2>
      <div>
      <img src={dataTest.image}/>
      </div>
      </>
    })}

    </div>
  </section>

}

export default CharacterShow