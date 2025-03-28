import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../Styles/Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    fetch("https://smart-parking-system-backend-3.onrender.com/WeatherForecast")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, []);

  const removeHandle = () => {
    setNav(true);
  };
  return (
    <>
      {!nav && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            className="weather_container"
          >
            <div className="weather_content">
              <h2>
                <i className="fas fa-cloud-sun"></i>5-Day Weather Forecast
                <div className="back_chev" onClick={removeHandle}>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </h2>
              {loading ? (
                <p>Loading weather...</p>
              ) : weather.length > 0 ? (
                <div className="weather_list">
                  {weather.map((day, index) => (
                    <div key={index} className="weather_card">
                      <div>
                        <h3>{new Date(day.date).toDateString()}</h3>
                        <p>{day.temperatureC}</p>
                        <p>Temp: {day.temperatureF}°F</p>
                        <p>{day.summary}</p>
                      </div>
                      <i className="fas fa-cloud-sun"></i>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No weather data available</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Weather;
