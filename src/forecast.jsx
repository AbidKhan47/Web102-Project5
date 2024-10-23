import { useEffect, useState } from "react";

const Forecast = ({city}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [errors, setError] = useState(null);
    const cityName = city;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&cnt=20&appid=1c1f425bb34ff5776dbdc83b1c81a41b`
    
    function unixTimestampToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if month is single digit
        const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if day is single digit
        const hours = String(date.getHours()).padStart(2, '0'); // Add leading zero if hour is single digit
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Add leading zero if minute is single digit
        return `${month}/${day} ${hours}:${minutes}`;
    }

    useEffect(()=> {
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
                    weather: item.weather[0].main
                }));
                setWeatherData(mappedData);
                }catch (error) {
                    setError(error.message);
                    console.log(errors)
                }
        }
        getData()
    }, [city])

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

    console.log(weatherData)

    return (
        <>
            <h1 className="text-3xl mb-4 bg-slate-500 text-white p-2 rounded-md">Hourly Forecast</h1>
            <div className="bg-blue-500 rounded-md py-4 px-2 overflow-x-auto">
                <div className="grid grid-flow-col gap-4 overflow-x-auto">
                    {weatherData.map((item, index) => (
                        <div key={index} className="bg-blue-600 h-[500px] w-[250px] rounded-md mx-2 my-2 p-2"> 
                            <h className="text-white text-2xl bg-indigo-400 p-2 rounded-md mt-4">{item.date}</h>
                            <img src={getWeatherImage(item.weather)} alt={item.weather} className="h-64 w-64 object-cover rounded-md my-10" />
                            <p className="text-white text-xl">High: {Math.floor(item.high)}°F</p>
                            <p className="text-white text-xl">Low: {Math.floor(item.low)}°F</p>
                            <p className="text-white text-xl">Wind Speed: {Math.floor(item.windspeed)} MPH</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
};
export default Forecast;