
const getWeatherData = (city) => {
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

  return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));

  
}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
 

}


const showWeatherData = (weatherData) => {
  
  console.log(weatherData, '🍪')
  console.log(weatherData.main.temp)
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

