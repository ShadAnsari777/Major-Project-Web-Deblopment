const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29ad7fd13cmsh7ae26a8b966a428p17eb58jsn4ad159c56631',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			temp1.innerHTML = response.temp
			temp.innerHTML = response.temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			humidity.innerHTML = response.humidity
			sunrise.innerHTML = "<div>${window.moment(sunrise*1000).format('HH:mm a')}</div>"
			// sunriseset.innerHTML=''
			feels_like1.innerHTML = response.feels_like
			sunset.innerHTML = response.sunset
			feels_like.innerHTML = response.feels_like
		})
		.catch(err => console.error(err));
}
function validateForm() {
	const submit = document.querySelector('#submit');
	submit.addEventListener('click', (e) => {
		e.preventDefault();
		// console.log(city)
	})
	getWeather(city.value);
	// console.log(city.value);
}
// validateForm();
// const cityName = document.querySelectorAll("#cityName");
// cityName.innerHTML = "Delhi";
// document.g
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		temp1.innerHTML = response.temp
		temp.innerHTML = response.temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		humidity.innerHTML = response.humidity
		sunrise.innerHTML = response.sunrise
		feels_like1.innerHTML = response.feels_like
		sunset.innerHTML = response.sunset
		feels_like.innerHTML = response.feels_like
	})
	.catch(err => console.error(err));
