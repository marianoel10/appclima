import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  const { temp, temp_min, temp_max, humidity, pressure } = main;
  const { icon, description } = weather[0];

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
        </div>
        <div className="weather-details">
          <p>Temperatura: {temp}°C</p>
          <p>Temperatura Mínima: {temp_min}°C</p>
          <p>Temperatura Máxima: {temp_max}°C</p>
          <p>Humedad: {humidity}%</p>
          <p>Presión Atmosférica: {pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
