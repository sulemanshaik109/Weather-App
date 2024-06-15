import { TiDelete } from "react-icons/ti";
import "./index.css";

const WeatherDisplay = (props) => {
  const { weatherData, weatherLocation, removeLocation } = props;
  console.log(weatherData);

  if (!weatherData) {
    return <p>Loading weather data for {weatherLocation}...</p>;
  }

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const temperatureInCelsius = kelvinToCelsius(weatherData.main.temp);
  const date = new Date(weatherData.dt);

  const deleteLocation = () => {
    const { weatherLocation } = props;
    removeLocation(weatherLocation);
  };

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2 className="location-name">{weatherData.name}</h2>
        <button className="weather-btn" type="button" onClick={deleteLocation}>
          <TiDelete size="30" />
        </button>
      </div>
      <div className="temperature-and-date-time">
        <div className="temperature-and-condition">
          <p className="temperature">{Math.ceil(temperatureInCelsius)} °C</p>
          <p className="condition">{weatherData.weather[0].main}</p>
        </div>
        <div className="date-and-time">
          <p className="text">{date.toDateString()}</p>
          <p className="text">{date.toLocaleTimeString()}</p>
        </div>
      </div>
      <p className="description">
        <strong>Description: </strong>
        {weatherData.weather[0].description}
      </p>
      <ul className="additional-features">
        <li className="info-container">
          <p className="detail-text">
            <strong>Humidity</strong>
          </p>
          <p className="detail-text">{weatherData.main.humidity}%</p>
        </li>
        <li className="info-container">
          <p className="detail-text">
            <strong>Wind</strong>
          </p>
          <p className="detail-text">{weatherData.wind.speed} km/h</p>
        </li>
        <li className="info-container">
          <p className="detail-text">
            <strong>Pressure</strong>
          </p>
          <p className="detail-text">{weatherData.main.pressure} mb</p>
        </li>
        <li className="info-container">
          <p className="detail-text">
            <strong>Visibility</strong>
          </p>
          <p className="detail-text">{weatherData.visibility / 1000} km</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDisplay;
