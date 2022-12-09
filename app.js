/* Global Variables */
//these consts will make it ez for us to callback in coding
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',&appid=e7462b564406bef96c46f760ac8f4a82&units=metric';
const zipArea = document.getElementById('zip');
const baseFeelings = document.getElementById('feelings');
const temprature = document.getElementById('temp');
// Create a new date instance dynamically with JS
let d = new Date();
//add 1 to make a natural numeric
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

//Event listener to add function to exiting html dom elemnt
document.getElementById('generate').addEventListener('click', () => {
	//check if the user click on button without type anything
	if (zipArea.value.trim() === '' || baseFeelings.value.trim() === '') {
		alert('please enter zip code and feelings');
		return;
	}

	getWeatherInfo(baseUrl, zipArea.value, apiKey)
		.then((data) => {
			sendData('/giveData', {
				date: newDate,
				temp: data.main.temp,
				content: baseFeelings.value,
			});
		})
		.then(() => {
			updateUI();
		});
});
