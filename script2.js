

const date1=document.getElementById('date1');
const day1=document.getElementById('day1');
const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// const API_KEY='60d4fecc4376868655033d8c6427e83c';	
setInterval(() => {
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const hoursIn12HrFormat=hour =>13 ? hour %12 :hour;
    const minutes =time.getMinutes();
    const date1=document.querySelectorAll("#date1");
    // date1.innerHTML=date;
    // day1.innerHTML=day;
	document.getElementById('day1').innerHTML=days[day%7];
	document.getElementById('day2').innerHTML=days[(day+1)%7];
	document.getElementById('day3').innerHTML=days[(day+2)%7];
	document.getElementById('day4').innerHTML=days[(day+3)%7];
	document.getElementById('day5').innerHTML=days[(day+4)%7];
	document.getElementById('day6').innerHTML=days[(day+5)%7];
	document.getElementById('day7').innerHTML=days[(day+6)%7];
   

},1000);


getWeatherData()
function getWeatherData(){
	navigator.geolocation.getCurrentPosition((success) =>{
		let {latitude,longitude} = success.coords;
		console.log(latitude);
		console.log(longitude)
		const option= {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '29ad7fd13cmsh7ae26a8b966a428p17eb58jsn4ad159c56631',
				'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
			}
		};
		
		fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=28.5912&lon=77.224', option)
			.then(response => response.json())
			.then(response => {
				console.log(response)
				// console.log(response.data[0].clouds);
				// showWeatherData(data)
				document.getElementById('temp2').innerHTML=response.data[1].temp;
				document.getElementById('temp3').innerHTML=response.data[2].temp
				document.getElementById('temp4').innerHTML=response.data[3].temp
				document.getElementById('temp5').innerHTML=response.data[4].temp
				document.getElementById('temp6').innerHTML=response.data[5].temp
				document.getElementById('temp7').innerHTML=response.data[6].temp
				document.getElementById('temp8').innerHTML=response.data[7].temp
				//percipitation
				document.getElementById('perp2').innerHTML=response.data[1].precip
				document.getElementById('perp3').innerHTML=response.data[2].precip
				document.getElementById('perp4').innerHTML=response.data[3].precip
				document.getElementById('perp5').innerHTML=response.data[4].precip
				document.getElementById('perp6').innerHTML=response.data[5].precip
				document.getElementById('perp7').innerHTML=response.data[6].precip
				document.getElementById('perp8').innerHTML=response.data[7].precip
				//wind speed
				document.getElementById('windS2').innerHTML=response.data[1].wind_spd
				document.getElementById('windS3').innerHTML=response.data[2].wind_spd
				document.getElementById('windS4').innerHTML=response.data[3].wind_spd
				document.getElementById('windS5').innerHTML=response.data[4].wind_spd
				document.getElementById('windS6').innerHTML=response.data[5].wind_spd
				document.getElementById('windS7').innerHTML=response.data[6].wind_spd
				document.getElementById('windS8').innerHTML=response.data[7].wind_spd
				//wind degree
				document.getElementById('windD2').innerHTML=response.data[1].wind_cdir_full
				document.getElementById('windD3').innerHTML=response.data[2].wind_cdir_full
				document.getElementById('windD4').innerHTML=response.data[3].wind_cdir_full
				document.getElementById('windD5').innerHTML=response.data[4].wind_cdir_full
				document.getElementById('windD6').innerHTML=response.data[5].wind_cdir_full
				document.getElementById('windD7').innerHTML=response.data[6].wind_cdir_full
				document.getElementById('windD8').innerHTML=response.data[7].wind_cdir_full
					//visibility
				document.getElementById('vis2').innerHTML=response.data[1].vis
				document.getElementById('vis3').innerHTML=response.data[2].vis
				document.getElementById('vis4').innerHTML=response.data[3].vis
				document.getElementById('vis5').innerHTML=response.data[4].vis
				document.getElementById('vis6').innerHTML=response.data[5].vis
				document.getElementById('vis7').innerHTML=response.data[6].vis
				document.getElementById('vis8').innerHTML=response.data[7].vis
				//solar radiation
				document.getElementById('sr2').innerHTML=response.data[1].solar_rad
				document.getElementById('sr3').innerHTML=response.data[2].solar_rad
				document.getElementById('sr4').innerHTML=response.data[3].solar_rad
				document.getElementById('sr5').innerHTML=response.data[4].solar_rad
				document.getElementById('sr6').innerHTML=response.data[5].solar_rad
				document.getElementById('sr7').innerHTML=response.data[6].solar_rad
				document.getElementById('sr8').innerHTML=response.data[7].solar_rad
			})
			.catch(err => console.error(err));
	})
}
function showWeatherData(data)
{
	// let {humidity,pressure, temperature,sunrise,sunset,wind_speed} = data.current;
	let otherDayForecast=''
	data.daily.forEach((day,idx) =>{
		if(idx==0){
			doucument.getElementById(temp1).innerHTML=data[0].clouds;
		}
		else{
			document.getElementById('temp2').innerHTML="Dh"
			document.getElementById('temp3').innerHTML="Dh"
			document.getElementById('temp4').innerHTML="Dh"
			document.getElementById('temp5').innerHTML="Dh"
			document.getElementById('temp6').innerHTML="Dh"
			document.getElementById('temp7').innerHTML="Dh"
			document.getElementById('temp8').innerHTML="Dh"

		}
	})

}
showWeatherData(data);	