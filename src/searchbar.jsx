import React, { useState } from "react";

const SearchBar = ({ onCityChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCityChange(inputValue);
        <Link to='/'/>
        setInputValue(""); 
    };

    return (
        <form className="mb-4 " onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={inputValue}
                onChange={handleInputChange}
                className="w-[90%] h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="rounded-lg bg-blue-600 p-2" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;