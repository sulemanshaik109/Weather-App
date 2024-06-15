import { useState, useEffect } from "react";

const useWeather = (locations) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchWeatherForAllLocations = async () => {
      setLoading(true);
      setErrors([]);
      const apiKey = "099d738f470c32be8173e609ae9ed4ca";
      const fetchedData = await Promise.all(
        locations.map(async (location) => {
          try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Weather data not found for ${location}`);
            }
            return response.json();
          } catch (error) {
            setErrors((prevErrors) => [...prevErrors, error.message]);
            return null;
          }
        })
      );
      setWeatherData(fetchedData.filter((data) => data !== null));
      setLoading(false);
    };
    if (locations.length > 0) {
      fetchWeatherForAllLocations();
    }
  }, [locations]);
  return { weatherData, loading, errors };
};

export default useWeather;
