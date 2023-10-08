const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

export default class Weather {
    static key = '3941436912164c0b9d120339233009';
    static default_location = "Cebu"

    constructor(location) {
        this.location = location || Weather.default_location
        this.rain
        this.humidity
        this.wind
        this.temp
        this.feelsTemp
    }
  
    async getWeatherInfo(location = this.location) {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${Weather.key}&q=${encodeURIComponent(location)}&days=3`,
          {
            mode: 'cors',
          }
        );
        if (response.status === 400) {
          return false
        } else {
          const weatherInfo = await response.json();
          this.assignWeatherInfo(weatherInfo)
          return true
        }
      }

      assignWeatherInfo(weatherInfo) {
        const current = weatherInfo.forecast.forecastday[0].hour[hours]
        this.rain = current.chance_of_rain
        this.humidity = current.humidity
        this.wind = current.wind_kph
        this.temp = current.temp_c
        this.feelsTemp = current.feelslike_c
      }
}