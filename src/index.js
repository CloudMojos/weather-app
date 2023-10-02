import './styles/styles.css';

import Weather from './weatherapi';

const key = '3941436912164c0b9d120339233009';

    // const store = fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London`, {
    //     mode: 'cors'
    //   })
    // .then(response => {
    //     console.log("THEN HAPPENED");
    //     // Check if the response status is OK before parsing JSON
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     // Parse the response as JSON and return it
    //     return response.json();
    //   })
    //   .then(data => {
    //     // This block is executed when the JSON parsing is complete
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log("CATCH HAPPENED");
    //     console.error(err);
    //   });
    // console.log(store)

    (async function getWeatherData(location) {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=Manila`,
          {
            mode: 'cors',
          }
        );
        if (response.status === 400) {
          throwErrorMsg();
        } else {
          const weatherData = await response.json();
          console.log(weatherData)
        }
      })("Bulacan")
    
    
      