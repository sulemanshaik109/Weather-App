import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

import SearchBar from "../SearchBar";
import useWeather from "../../Hooks/useWeather";
import WeatherDisplay from "../WeatherDisplay";
import "./index.css";

const WeatherApp = () => {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem("locations")) || []
  );
  const { weatherData, loading, errors } = useWeather(locations);

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  const addLocation = (newLocation) => {
    if (!locations.includes(newLocation)) {
      setLocations([...locations, newLocation]);
    }
  };

  const removeLocation = (locationToRemove) => {
    const updatedLocations = locations.filter(
      (location) => location !== locationToRemove
    );
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  return (
    <div className="weather-app-container">
      <h1 className="title">Weather App</h1>
      <SearchBar onSearch={addLocation} />
      <div className="weather-body-container">
        {locations.length === 0 ? (
          <div>
            <h2 className="welcome-text">Welcome to the Weather App</h2>
            <p className="welcome-description">
              Please add a location to get started.
            </p>
          </div>
        ) : (
          <div>
            {loading ? (
              <div className="loader-container">
                <TailSpin color="#0b69ff" height="50" width="50" />
              </div>
            ) : errors.length > 0 ? (
              <div>
                <h2>Errors</h2>
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            ) : (
              <ul className="weather-data-list">
                {weatherData.map((data, index) => (
                  <WeatherDisplay
                    key={index}
                    weatherData={data}
                    weatherLocation={locations[index]}
                    removeLocation={removeLocation}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
