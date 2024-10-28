import './App.css'
import { useEffect, useState } from 'react'
import CurrentW from './CurrentW'
import Forecast from './forecast'
import SearchBar from './searchbar'
import Navbar from './navbar'

function App({description, pic, link}) {
  const [city, setCity] = useState("New%20York"); 

  const handleCityChange = (newCity) => {
      setCity(newCity);
  };

  return (
    <>
      <Navbar onCityChange = {handleCityChange}></Navbar>
      <CurrentW city = {city} pic = {pic} description = {description} link = {link}></CurrentW>
      <SearchBar onCityChange={handleCityChange} />
      <Forecast city = {city}></Forecast>
    </>
  )
}

export default App