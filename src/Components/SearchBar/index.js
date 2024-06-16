import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const SearchBar = (props) => {
  const { onSearch, darkMode } = props;
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name or zip code"
        className="search-input"
      />
      <button type="button" className="weather-btn" onClick={handleSearchClick}>
        <FaSearch color={`${darkMode ? "#fff" : "#000"}`} />
      </button>
    </div>
  );
};

export default SearchBar;
