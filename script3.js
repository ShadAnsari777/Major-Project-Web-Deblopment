const option1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29ad7fd13cmsh7ae26a8b966a428p17eb58jsn4ad159c56631',
		'X-RapidAPI-Host': 'city-sun-info.p.rapidapi.com'
	}
};

fetch('https://city-sun-info.p.rapidapi.com/city?city=LAKHIMPUR%20KHERI&date=2023-03-11&state=Uttar%20Pradesh&country=India', option1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));