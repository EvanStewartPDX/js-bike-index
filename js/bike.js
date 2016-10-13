function Bike(color, make, zip, before, after){
  this.color = color;
  this.make = make;
  this.zip = zip;
  this.before = before;
  this.after = after;
  this.abikes = 0;
}


Bike.prototype.getBike = function(displayBikes, displayZips) {
  var that = this;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&colors=' + that.color + '&manufacturer=' + that.make + '&proximity=' + that.zip + '&proximity_square=5&stolen_before='+ that.before + '&stolen_after=' + that.after).then(function(response) {
      // for (var bike of response.bikes) {
      //   var title = bike.title;
      //   bikes.push(bike);
      // }
      // console.log(that.zip);
      that.getZips(response.bikes, displayZips);
      displayBikes(response.bikes.length);
    });
    // console.log("abikes after request: " + this.abikes);
    // return this.abikes;
};

Bike.prototype.getZips = function(bikes, displayZips) {
  var ziparray = [];
  for (var bike of bikes) {
    var location = bike.stolen_location;
    var part = location.split(",");
    var stolenzip = part[2];
    if(ziparray.indexOf(stolenzip) === -1 && !isNaN(stolenzip)) {
      ziparray.push(stolenzip);
      console.log(ziparray);
    }
  }

  displayZips(ziparray);
};

exports.bikeModule = Bike;
