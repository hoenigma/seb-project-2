import React from "react";
import { Link } from "react-router-dom";
import CharacterThumbnail from "./characterThumbnail";

function CharacterList(){
  const [amiibo, setAmiibo] = React.useState(null)
  const [search, setSearch] = React.useState('')
  console.log(amiibo)
  console.log(search)
    
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

function handleChange(e: any) {
  setSearch(e.currentTarget.value)
}

function filterCharacters() {
  return amiibo?.filter(dataTest => {
    return dataTest.name.toLowerCase().includes(search.toLowerCase())
  })
}


return (
  <section className="section">
    <div className="container">
      <div className="searchbar">
      <input id="searchBar"
      className="input is-normal"
      placeholder="Search for an Amiibo"
      onChange={handleChange}
      value={search}
      />
      </div>
    </div>
    <div>
      <div className="columns is-multiline">
      {/* we changed this from amiibo?.map */}
      {filterCharacters()?.map((dataTest) => {
        return <div className="column is-one-quarter-desktop is-one-third-tablet">
        <CharacterThumbnail
        name={dataTest.name}
       image={dataTest.image} />
       </div> 
      })}
      </div>
    </div>
  </section>
)


}

export default CharacterList 