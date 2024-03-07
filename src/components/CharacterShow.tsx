import React from "react";
import { Link, useParams } from "react-router-dom";




function CharacterShow(){
    const{name} = useParams()

    const [character, setCharacter] = React.useState(null)

     async function fetchCharacter() {
      const resp = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.&name=${name}`)
      const data = await resp.json()
      // console.log(data)
      // console.log(data.amiibo[0].character)
      // console.log(data.amiibo[0].image)
      setCharacter(data.amiibo)
    console.log(character)
    }

React.useEffect(() => {
  fetchCharacter()
}, [])



    return <div>
        <h2>hello</h2>
    </div>

}

export default CharacterShow