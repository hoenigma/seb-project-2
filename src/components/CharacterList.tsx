import React from "react";
import { Link } from "react-router-dom";
import CharacterThumbnail from "./characterThumbnail";

function CharacterList(){
  const [amiibo, setAmiibo] = React.useState(null)
  console.log(amiibo)
    
     async function fetchAmiibo() {
      const resp = await fetch("https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.")
      const data = await resp.json()
      // console.log(data)
      // console.log(data.amiibo[0].character)
      // console.log(data.amiibo[0].image)
      setAmiibo(data.amiibo)
    console.log(amiibo)
    }

React.useEffect(() => {
  fetchAmiibo()
}, [])



return (
  <section>
    <div>
      {amiibo?.map((dataTest) => {
        return <CharacterThumbnail
        name={dataTest.name}
       image={dataTest.image} />
      })}
    </div>
  </section>
)


}

export default CharacterList 