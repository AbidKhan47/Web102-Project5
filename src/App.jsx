import './App.css'
import { useEffect, useState } from 'react'
import CurrentW from './CurrentW'
import Forecast from './forecast'
import SearchBar from './searchbar'
import Navbar from './navbar'

function App() {
  const [city, setCity] = useState("New%20York"); // State to hold the city entered by the user

  const handleCityChange = (newCity) => {
      setCity(newCity);
  };

  return (
    <>
    <Navbar onCityChange = {handleCityChange}></Navbar>
    <CurrentW city = {city}></CurrentW>
    <SearchBar onCityChange={handleCityChange} />
    <Forecast city = {city}></Forecast>
    </>
  )
}

export default App