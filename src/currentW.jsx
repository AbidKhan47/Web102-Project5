import React, { useState, useEffect } from 'react';

const WeatherComponent = ({city}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cityName = city;
    const apiKey = import.meta.env.VITE_APP_API_KEY; 
    console.log(apiKey)
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=1c1f425bb34ff5776dbdc83b1c81a41b`

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
        case "Clear":
            return "src/weathers/sun-regular-24.png";
        case "Clouds":
            return "src/weathers/cloud-regular-24.png";
        case "Rain":
            return "src/weathers/cloud-rain-regular-24.png";
        // Add more cases for other weather conditions as needed
        default:
            return "src/weathers/sun-regular-24.png";
    }
};

  return (
    <>
      <div className='flex flex-col items-center justify-center m-auto mb-4'>
        <h1 className='bg-blue-300 p-2 rounded-md mb-2 text-3xl'>Weather in {weatherData.name}</h1>
        <div className='flex flex-row items-center bg-blue-400 p-2 rounded-md text-lg w-full'>
          <img src={getWeatherImage(weatherData.weather[0].main)} alt={weatherData.weather[0].main} className="h-52 w-52 rounded-md my-10 item-center mx-8" /> 
          <p className='mx-2 text-white text-xl'>Current Temp: {Math.floor(weatherData.main.temp)}°F </p>
          <p className='mx-2 text-white text-xl'>Wind Speeds: {Math.floor(weatherData.wind.speed)} MPH </p>
          <p className='mx-2 text-white text-xl'>Humidity: {Math.floor(weatherData.main.humidity)}% </p>
          <p className='mx-2 text-white text-xl'>Today's High: {Math.floor(weatherData.main.temp_max)}°F</p>
          <p className='mx-2 text-white text-xl'>Today's Low: {Math.floor(weatherData.main.temp_min)}°F </p>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;