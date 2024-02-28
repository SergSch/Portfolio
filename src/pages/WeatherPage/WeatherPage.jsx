import { useEffect, useState } from 'react';
import classes from '../../styles/Weather/WeatherPage.module.css';
import { fetchWeather } from '../../utils/requests';
import Button from '../../UI/Button/Button';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    fetchWeather(setWeatherData);
  }, []);
  console.log(weatherData);

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  const addCity = async () => {
    await fetchWeather(setWeatherData, city);
    setCity('');
  };

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const forecast = weatherData
    ? weatherData?.list
        .filter((elem, i) => i % 8 === 0)
        .slice(0, 5)
        .map((elem) => {
          const data = new Date(elem.dt * 1000);
          const day = days[data.getDay()];
          const temperature = Math.round(elem.main.temp - 273);
          const description = elem.weather[0].description;
          return { data, day, temperature, description };
        })
    : [];

  return (
    <div className={classes.wrapper}>
      <div className={classes.weatherBlock}>
        <h2>Weather Forecast</h2>
        <div className={classes.searchBlock}>
          <input
            type="text"
            value={city}
            onChange={inputHandler}
            placeholder="Search Locations"
            className={classes.inputSearch}
          />
          <Button text="Search" handleClick={addCity} />
        </div>
        <h3 className={classes.title}>{weatherData?.city.name}</h3>
        <div className={classes.wrap}>
          {forecast?.map((elem) => (
            <div key={elem.data} className={classes.descriptionBlock}>
              <h4>{elem.day}</h4>
              <p>{elem.data.toLocaleDateString()}</p>
              <p>{elem.temperature}°</p>
              <p>{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WeatherPage;
