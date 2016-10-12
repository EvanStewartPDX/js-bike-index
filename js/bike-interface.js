var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var bike = new Bike();

    var color = "purple";
    var stamp = "1476264600";
    var myDate = new Date("10/03/2016"); // Your timezone!
    var before = myDate.getTime()/1000.0;
    // var before = "";

    var myDate1 = new Date("10/01/2016"); // Your timezone!
    var after = myDate1.getTime()/1000.0;
    // var after = "";
    console.log(before, after);

    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=10&proximity=45.521728%2C-122.67326&proximity_square=0&stolen_before='+ before +'&stolen_after='+ after).then(function(response) {
      // console.log(bikes.title);
    });
    $('h1').text(response.bikes.title);
  });
});
