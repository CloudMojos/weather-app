import './styles/styles.css';

import Weather from './weatherapi';
import Gif from './gifapi';

let weather = new Weather();

weather.getWeatherInfo().then(isSuccess => {
    // Weather info
    const title = document.querySelector('#content-header')
    const status = weather.rain >= 50 ? 'rainy' : 'sunny'
    const emoji = status === 'rainy' ? '☂️' : '😎'
    title.textContent = `${emoji} It's ${status} in ${weather.location} ${emoji}`
    const rainInfo = document.querySelector('#rain-info')
    console.log(weather)
    // rainInfo.innerHTML = String(
    //     'Rain: ' + weather.rain + "% " + '<br>' +
    //     'Humidity: ' + weather.humidity + "% " + '<br>' +
    //     'Wind: ' + weather.wind + "kph"
    // )
    rainInfo.querySelector("#rain").textContent = `Rain: ${weather.rain}%`
    rainInfo.querySelector("#humidity").textContent = `Humidity: ${weather.humidity}%`
    rainInfo.querySelector("#wind").textContent = `Rain: ${weather.wind}%`

    const tempInfo = document.querySelector('#temp-info')

    tempInfo.querySelector('#temp').textContent = `${weather.temp}° Celcius`
    tempInfo.querySelector('#feels').textContent = `${weather.feelsTemp}° Celcius`
});

let gif = new Gif();

gif.info = gif.getGifInfo();



// Image 
const imgGif = document.querySelector('#gif');
// console.log(imgGif)
gif.info.then(result => {
    // console.log(result.results[0])
    imgGif.src = result.results[1].media_formats.gif.url
})

