var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var newbike = new Bike();

    // var make = $('#make').val();
    // var zip = $('#zip').val();
    // var color = $('#color').val();
    // var date_before = new Date($("#before").val());
    // var date_after = new Date($("#after").val());
    var date_before = new Date('10/12/2016');
    var date_after = new Date('8/01/2016');

    var color = 'blue';
    var make = '';
    var zip = "Portland, OR";
    var before = date_before.getTime()/1000.0;
    var after = date_after.getTime()/1000.0;

    var bikes = newbike.getBike(color, make, zip, before, after);
      // console.log(bikes);
      setTimeout(bikeText, 1500);

      function bikeText(){
        $(".showbikes").text(newbike.abikes);
      }
  });
});
