import { useState } from "react";

const Navbar = ({ onCityChange }) => {
    const cities = ["London", "New York", "Paris", "Sydney", "Toronto", "Tokyo"];

    const handleInputChange = (city) => {
        onCityChange(city);
    };

    return (
        <div className="flex justify-center mb-4 bg-blue-400 p-8 rounded-md w-full">
            <ul className="flex flex-wrap">
                {cities.map((city) => (
                    <li key={city} className="mx-10">
                        <button className="text-2xl font-sans text-white hover:text-blue-200 transition-colors" onClick={() => handleInputChange(city)}>
                            {city}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;