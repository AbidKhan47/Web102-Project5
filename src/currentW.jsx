import React, { useState, useEffect } from 'react';

const WeatherComponent = ({ city, pic, description, link }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const cities = ["London", "New York", "Paris", "Sydney", "Toronto", "Tokyo"];

  useEffect(() => {
    const cityName = city;
    const apiKey = import.meta.env.VITE_APP_API_KEY; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

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
        return "src/images/sun.png";
      case "Clouds":
        return "src/images/cloud.png";
      case "Rain":
        return "src/images/rain.png";
      default:
        return "src/images/sun.png";
    }
  };

  const isCityIncluded = cities.includes(city);

  return (
    <div className="flex flex-col items-center justify-center m-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 min-h-screen py-10">
      <h1 className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4 text-4xl font-bold">
        Weather in {weatherData.name}
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-around bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-4xl backdrop-filter backdrop-blur-lg">
        <img 
          src={getWeatherImage(weatherData.weather[0].main)} 
          alt={weatherData.weather[0].main} 
          className="h-52 w-52 object-cover rounded-lg mb-6 sm:mb-0 shadow-lg"
        />
        
        <div className="text-white text-lg flex flex-col space-y-4">
          <p className="text-3xl font-semibold">
            {Math.floor(weatherData.main.temp)}°F
          </p>
          <p className="font-medium">
            Wind Speed: <span className="font-normal">{Math.floor(weatherData.wind.speed)} MPH</span>
          </p>
          <p className="font-medium">
            Humidity: <span className="font-normal">{Math.floor(weatherData.main.humidity)}%</span>
          </p>
          <p className="font-medium">
            High: <span className="font-normal">{Math.floor(weatherData.main.temp_max)}°F</span>
          </p>
          <p className="font-medium">
            Low: <span className="font-normal">{Math.floor(weatherData.main.temp_min)}°F</span>
          </p>
        </div>
      </div>

      {isCityIncluded && (
        <div className="flex my-2 rounded-md citiesif bg-white bg-opacity-20 p-4 rounded-lg shadow-lg w-full max-w-4xl backdrop-filter backdrop-blur-lg">
          <img src={pic} alt={city} className="w-1/2 rounded-md" />
          <div className="flex flex-col justify-start rounded-md">
            <p className="bg-blue-300 m-2 p-2 overflow-wrap break-word rounded-md">
              {description}
            </p>
            <a href={link} className="bg-blue-300 m-2 p-2 rounded-md">
              Visit today!
            </a>
          </div>
        </div>
      )}

      <footer className="text-center text-white mt-6">
        <p className="text-sm">Powered by Your Weather App</p>
      </footer>
    </div>
  );
};

export default WeatherComponent;