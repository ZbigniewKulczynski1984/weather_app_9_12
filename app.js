/* Global Variables */
//these consts will make it ez for us to callback in coding
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",&appid=e7462b564406bef96c46f760ac8f4a82&units=metric";
const zipArea = document.getElementById("zip");
const baseFeelings = document.getElementById("feelings");
const temprature = document.getElementById("temp");
// Create a new date instance dynamically with JS
let d = new Date();
//add 1 to make a natural numeric
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
