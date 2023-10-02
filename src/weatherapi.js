class Weather {
    static key = '3941436912164c0b9d120339233009';
    constructor() {

    }

    static getWeatherInfo() {
        return fetch(`http://api.weatherapi.com/v1/current.json?key=${key}`)
        .then(response => {
            return response
        }).catch(err => {
            return err
        })
    }
}