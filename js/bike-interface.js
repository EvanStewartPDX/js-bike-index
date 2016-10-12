var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var bike = new Bike();

  $('#search').submit(function(event) {

    event.preventDefault();
    var color = "purple";
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=' + color + '&manufacturer=giant&proximity=45.521728%2C-122.67326&proximity_square=100').then(function(response) {
      console.log(response);
    });
  });
});
