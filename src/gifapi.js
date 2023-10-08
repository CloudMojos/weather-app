export default class Gif {
    // static key = '83WteZPKwzjQeo6Sw6cSpNDxmMwryoeu'; // GIPHY
    static key = 'AIzaSyBHygGigtemjFXKTbjNPwXbkZE9Cd3pps4'; // TENOR
    static default_search = "michael scott"

    constructor(search) {
        this.search = search || Gif.default_search
        this.info
    }

    async getGifInfo(search = this.search) {
      const response = await fetch(
        `https://tenor.googleapis.com/v2/search?key=${Gif.key}&q=${encodeURIComponent(search)}&limit=2`,
        // https://tenor.googleapis.com/v2/search?key=AIzaSyBHygGigtemjFXKTbjNPwXbkZE9Cd3pps4&q=happycat&limit=2
      );
      const result = await response.json()
      return result
    }

  
    // async getWeatherInfo(location = this.location) {
    //     const response = await fetch(
    //       `http://api.weatherapi.com/v1/forecast.json?key=${Weather.key}&q=${this.location}&days=3`,
    //       {
    //         mode: 'cors',
    //       }
    //     );
    //     if (response.status === 400) {
    //       throwErrorMsg();
    //     } else {
    //       const weatherInfo = await response.json();
    //       console.log(weatherInfo)
    //     }
    //   }
}