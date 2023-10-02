export default class Weather {
    static key = '3941436912164c0b9d120339233009';
    static default_location = "Philadelphia"

    constructor(location) {
        this.location = location || Weather.default_location
    }
  
    async getWeatherInfo(location) {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${Weather.key}&q=${this.location}&days=3`,
          {
            mode: 'cors',
          }
        );
        if (response.status === 400) {
          throwErrorMsg();
        } else {
          const weatherInfo = await response.json();
          console.log(weatherInfo)
        }
      }
}