const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b41ac54e79msh4cbeef0015cfe61p18edebjsnd9c29c515f10',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
let inputCountry = document.querySelector('.inputCountry')
let searchInput = 'Thisted'
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
        console.log('wind status: ' + response.current.wind_mph + ' ' + 'miles')
        console.log('sunset: ' + response.forecast.forecastday[0].astro.sunset)
        console.log('sunrise: ' + response.forecast.forecastday[0].astro.sunrise)
        console.log('Temperature at 12AM: ' + response.forecast.forecastday[0].hour[12].temp_c)
        console.log('Temperature at 9PM: ' + response.forecast.forecastday[0].hour[21].temp_c)
        console.log('visibility in km: ' + response.current.vis_km)
    
/*First Container*/
        let name = document.querySelector('.name')
        name.innerText = response.location.name
        let time = document.querySelector('.time')
        time.innerText = response.location.localtime
        let temperature = document.querySelector('.firstContentDegrees')
        temperature.innerText = Math.floor(response.current.temp_c) + '°'

/*Second Container*/
        /*Chance of rain*/
        let rainStatus = document.querySelector('.highlightRain')
        let rainBall = document.querySelector('.rainBall')
        let rainText = document.querySelector('.rainSpan')
        if(response.forecast.forecastday[0].day.daily_chance_of_rain <= 0) {
            rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
            rainBall.classList.add('bot')
            rainText.innerText = 'Bad'
            rainText.style.color = '#e23131'
        } else if (response.forecast.forecastday[0].day.daily_chance_of_rain <=50) {
            rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
            rainBall.classList.add('mid')
            rainText.innerText = 'Good'
            rainText.style.color = '#fbdf4d'
        } else if (response.forecast.forecastday[0].day.daily_chance_of_rain > 50) {
            rainStatus.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
            rainBall.classList.add('Top')
            rainText.innerText = 'Good'
            rainText.style.color = '#4d76e7'
        }
        /*Wind Status*/
        let windNumber = document.querySelector('.windNumber')
        let windFeelsLike = document.querySelector('.windFeelsLike p')
        windNumber.innerText = response.current.wind_kph
        windFeelsLike.innerText = response.current.wind_dir
        /*Sunrise and sunset*/
        let sunrise = document.querySelector('.rise')
        let sunImg = document.querySelector('.sunImg')
        let sunset = document.querySelector('.set')
        sunrise.innerText = response.forecast.forecastday[0].astro.sunrise
        sunset.innerText = response.forecast.forecastday[0].astro.sunset
        sunImg.innerText = "/weather icons/64x64/day/113.png"
        /*Humidity*/
        let humidity = document.querySelector('.highlightHumidity')
        let humidityBall = document.querySelector('.humidityBall')
        let humidityText = document.querySelector('.humiditySpan')
        if(response.current.humidity <= 20) {
            humidity.innerText = response.current.humidity + '%'
            humidityBall.classList.add('mid')
            humidityText.innerText = 'Very dry'
            humidityText.style.color = '#e23131'
        } else if (response.current.humidity <= 60) {
            humidity.innerText = response.current.humidity + '%'
            humidityBall.classList.add('top')
            humidityText.innerText = 'Comfortable'
            humidityText.style.color = '#4d76e7'
        } else {
            humidity.innerText = response.current.humidity + '%'
            humidityBall.classList.add('bot')
            humidityText.innerText = 'Very wet'
            humidityText.style.color = '#e23131'
        }
        /*Visibility*/
        let visibility = document.querySelector('.highlightVis')
        let visBall = document.querySelector('.visBall')
        let visText = document.querySelector('.higlightSpan')
        if(response.current.vis_km >= 10) {
            visibility.innerText = response.current.vis_km + '/km';
            visBall.classList.add('top')
            visText.innerText = 'Good'
            visText.style.color = '#4d76e7'
        } else if (response.current.vis_km <= 5) {
            visibility.innerText = response.current.vis_km + '/km';
            visBall.classList.add('mid')
            visText.innerText = 'Fine'
            visText.style.color = '#fbdf4d'
        } else {
            visBall.classList.add('bot')
            visibility.innerText = response.current.vis_km + '/km';
            visText.innerText = 'Bad'
            visText.style.color = '#e23131'
        }

        /*UV*/
        let UV = document.querySelector('.highlightUV')
        let uvBall = document.querySelector('.UvBall')
        let qualityText = document.querySelector('.UVText span')
        if(response.current.uv <= 2) {
            UV.innerText = response.current.uv
            uvBall.classList.add('top')
            qualityText.innerText = 'Good Quality'
            qualityText.style.color = '#4d76e7'
        } else if(response.current.uv <= 5) {
            UV.innerText = response.current.uv
            uvBall.classList.add('mid')
            qualityText.innerText = 'Medium Quality'
            qualityText.style.color = '#fbdf4d'
        }
        else{
            UV.innerText = response.current.uv
            uvBall.classList.add('bot')
            qualityText.innerText = 'Bad Quality'
            qualityText.style.color = '#e23131'
        }
    })