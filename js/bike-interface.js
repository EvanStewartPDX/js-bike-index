var Search = require('./../js/bike.js').searchModule;

var displayBikes = function(bikes) {
  $(".showbikes").text(bikes);
};
var displayZips = function(zip, count) {
  $("#showzips").append("<p class='zipclick'>" + zip + "</p>");
  $('.zipclick').last().click(function() {
    $('#map').hide();
    $('#map').delay(500).html('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=' +
		zip +
		'&key=AIzaSyC-u-zGtcSYGbK84Yxq9a_cY76NyKvHoVs&zoom=12" allowfullscreen></iframe>').fadeIn(500);
  });
  $("#showcount").append("<p> " + count + " </p>");
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

    var make = $('#make').val();
    var zip = $('#zip').val();
    var color = $('#color').val();
    var date_before = new Date($("#before").val());
    var date_after = new Date($("#after").val());

    var before = date_before.getTime()/1000.0;
    var after = date_after.getTime()/1000.0;
    var newSearch = new Search(color, make, zip, before, after);

    newSearch.getBike(displayBikes, displayZips);
  });

  $('#clear').click(function() {
    location.reload();
  });
});
