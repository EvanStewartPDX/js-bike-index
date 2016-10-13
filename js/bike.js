function Search(color, make, zip, before, after){
  this.color = color;
  this.make = make;
  this.zip = zip;
  this.before = before;
  this.after = after;
  this.abikes = 0;
}


Search.prototype.getBike = function(displayBikes, displayZips) {
  var that = this;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&colors=' + that.color + '&manufacturer=' + that.make + '&proximity=' + that.zip + '&proximity_square=5&stolen_before='+ that.before + '&stolen_after=' + that.after).then(function(response) {
    console.log(response.bikes);
    that.getZips(response.bikes, displayZips);
    displayBikes(response.bikes.length);
  });
};

Search.prototype.getZips = function(bikes, displayZips) {
  var ziparray = [];
  var result = { };

  for (var bike of bikes) {
    var location = bike.stolen_location;
    var part = location.split(",");
    var stolenzip = part[2];
    ziparray.push(stolenzip);
  }

  this.countZips(ziparray, displayZips);
};

Search.prototype.countZips = function(ziparray, displayZips)  {
  var zip = 0;
  var count = 0;
  zipCount = [];
  var zips = ziparray.sort();
  for (var i = 0; i <= zips.length; i++) {
    if (zips[i] != zip) {
      if (count > 0) {
        displayZips(zip, count);
      }
      zip = zips[i];
      count=1;
    } else {
      count++;
    }
  }
};


exports.searchModule = Search;
