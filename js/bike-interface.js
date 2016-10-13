var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikes) {
  $(".showbikes").text(bikes);
};
var displayZips = function(stolenzips) {
  $(".showzips").append("<li>" + stolenzips + "</li>");
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    // console.log('sup')

    // var make = $('#make').val();
    // var zip = $('#zip').val();
    // var color = $('#color').val();
    // var date_before = new Date($("#before").val());
    // var date_after = new Date($("#after").val());
    var date_before = new Date('10/12/2016');
    var date_after = new Date('08/01/2016');

    var color = '';
    var make = '';
    var zip = "97210";
    var before = date_before.getTime()/1000.0;
    var after = date_after.getTime()/1000.0;
    var newbike = new Bike(color, make, zip, before, after);

    var bikes = newbike.getBike(displayBikes, displayZips);
      // console.log(bikes);
      // setTimeout(bikeText, 5000);
      //
      // function bikeText(){
      //   $(".showbikes").text(newbike.abikes);
      // }
  });
});
