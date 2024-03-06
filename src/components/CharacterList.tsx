import React from "react";
import { Link } from "react-router-dom";

function CharacterList(){

    
     async function fetchAmiibo() {
      const resp = await fetch("https://www.amiiboapi.com/api/amiibo")
      const data = await resp.json()
      console.log(data)
      console.log(data.amiibo[0].character)
      console.log(data.amiibo[0].image)
      
    }
    fetchAmiibo()

}

export default CharacterList 