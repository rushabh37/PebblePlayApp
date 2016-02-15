
// UI Module has windows and cards
var UI = require('ui');

// Create a card with title and subtitle
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Display the Card
card.show()