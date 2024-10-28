import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = ({ onCityChange }) => {
    const cities = ["London", "New York", "Paris", "Sydney", "Toronto", "Tokyo"];

    const handleInputChange = (city) => {
        onCityChange(city)
    };

    return (
        <div className="flex justify-center mb-4 bg-blue-400 p-8 rounded-md w-full">
            <ul className="flex flex-wrap">
                {cities.map((city) => (
                    <li key={city} className="mx-10">
                        <Link to={`/${city}`} className="text-2xl" onClick={() => handleInputChange(city)}>{city}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;