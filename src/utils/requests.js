const API_KEY = '694807e56a256cbe52bf258e4abb7229';

export const fetchWeather = async (setWeatherData, city = 'Karlsruhe') => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setWeatherData(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
