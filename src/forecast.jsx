/* import { useEffect, useState } from "react";

const Forecast = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const cityName = city;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=20&appid=1c1f425bb34ff5776dbdc83b1c81a41b`;

  function unixTimestampToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}`;
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        const mappedData = data.list.map(item => ({
          date: unixTimestampToDate(item.dt),
          high: item.main.temp_max,
          low: item.main.temp_min,
          windspeed: item.wind.speed,
          weather: item.weather[0].main,
        }));
        setWeatherData(mappedData);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    getData();
  }, [city]);

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

  return (
    <>
      <h1 className="text-3xl mb-4 bg-slate-500 text-white p-2 rounded-md font-sans">Hourly Forecast</h1>
      <div className="bg-blue-500 rounded-md py-4 px-2 overflow-x-auto">
        <div className="grid grid-flow-col gap-4 overflow-x-auto">
          {weatherData.map((item, index) => (
            <div key={index} className="bg-blue-600 h-[500px] w-[250px] rounded-md mx-2 my-2 p-2"> 
              <h2 className="text-white text-2xl bg-indigo-400 p-2 rounded-md mt-4 font-sans">{item.date}</h2>
              <img src={getWeatherImage(item.weather)} alt={item.weather} className="h-64 w-64 object-cover rounded-md my-10" />
              <p className="text-white text-xl font-sans">High: {Math.floor(item.high)}°F</p>
              <p className="text-white text-xl font-sans">Low: {Math.floor(item.low)}°F</p>
              <p className="text-white text-xl font-sans">Wind Speed: {Math.floor(item.windspeed)} MPH</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
*/

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Forecast = ({ city }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);
    const cityName = city;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=20&appid=1c1f425bb34ff5776dbdc83b1c81a41b`;
    
    function unixTimestampToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); 
        const hour = String(date.getHours()).padStart(2, '0'); 
        const minutes = String(date.getMinutes()).padStart(2, '0'); 
        return `${hour}:${minutes}`;
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                const mappedData = data.list.map(item => ({
                    date: unixTimestampToDate(item.dt),
                    High: item.main.temp_max,
                    Low: item.main.temp_min,
                    windspeed: item.wind.speed,
                    weather: item.weather[0].main
                }));
                setWeatherData(mappedData);
            } catch (error) {
                setError(error.message);
            }
        };
        getData();
    }, [city]);

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

    return (
        <>
        <h1 className="text-3xl mb-4 bg-slate-600 text-white p-2 rounded-md">Hourly Forecast</h1>
        <div className="bg-blue-600 rounded-md py-4 px-2 overflow-x-auto">
            <LineChart
                width={1200}
                height={400}
                data={weatherData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
                <CartesianGrid stroke="#d4d4d4" strokeDasharray="3 3" />
                <XAxis dataKey="date" stroke="#d4d4d4" label={{ value: 'Time', position: 'Bottom', fill: '#d4d4d4' }} />
                <YAxis stroke="#d4d4d4" label={{ value: 'Temperature (°F)', angle: -90, position: 'insideLeft', fill: '#d4d4d4' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="High" stroke="#ff7f50" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Low" stroke="#1e90ff" />
            </LineChart>
        </div>
        </>
    );
};

export default Forecast;