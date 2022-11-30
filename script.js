const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b41ac54e79msh4cbeef0015cfe61p18edebjsnd9c29c515f10',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let searchInput = 'Qatar'
fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchInput}`, options)
    .then(response => response.json())
    .then(response => {
    
        console.log(response)
        console.log('Icon: ' + response.current.condition.icon)
        console.log('name and country: ' + response.location.name + ' ' + response.location.country)
        console.log('Temperature: ' + response.current.temp_c)
        console.log('feels like: ' + response.current.feelslike_c)
        console.log('max temperature: ' + response.forecast.forecastday[0].day.maxtemp_c)
        console.log('min temperature: ' + response.forecast.forecastday[0].day.mintemp_c)
        console.log('current time: ' + response.location.localtime)
        console.log('text: ' + response.current.condition.text)
        console.log('% Chance of rain: ' + response.forecast.forecastday[0].day.daily_chance_of_rain + '%')
        console.log('Humidity: ' + response.current.humidity)
        console.log('UV index: ' + response.current.uv)
        console.log('wind status: ' + response.current.wind_kph + 'kph')
        console.log('sunset: ' + response.forecast.forecastday[0].astro.sunset)
        console.log('sunrise: ' + response.forecast.forecastday[0].astro.sunrise)
        console.log('Temperature at 12AM: ' + response.forecast.forecastday[0].hour[12].temp_c)
        console.log('Temperature at 9PM: ' + response.forecast.forecastday[0].hour[21].temp_c)
    })