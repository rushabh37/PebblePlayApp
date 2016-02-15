
// UI Module has windows and cards
var UI = require('ui');
var ajax = require('ajax');

var APPID = '5d03929aca48a14cb15264b52293cb8f';
var CITYNAME = 'Seattle';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + 
          CITYNAME
          + '&appid=' + APPID;

// Create a card with title and subtitle
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Display the Card
card.show()

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
    // Extract data
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + 'C';

     // Always upper-case first letter of description
     var description = data.weather[0].description;
     description = description.charAt(0).toUpperCase() + description.substring(1);
     // Show to user
     card.subtitle(location + ', ' + temperature);
     card.body(description);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);