import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/home"
import CharacterList from "./components/CharacterList"
import CharacterShow from "./components/CharacterShow"
import Navbar from "./components/Navbar"


function App(){
return <Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/characterlist" element={<CharacterList/>}/>
    <Route path="/charactershow/:name" element={<CharacterShow/>}/>
  </Routes>
</Router>
   




}

export default App