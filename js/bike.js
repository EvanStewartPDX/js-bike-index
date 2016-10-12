function Bike(){
  this.abikes = 0;
}


Bike.prototype.getBike = function(color, make, zip, before, after) {
  var that = this;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&colors=' + color + '&manufacturer=' + make + '&proximity=' + zip + '&proximity_square=5&stolen_before='+ before + '&stolen_after=' + after).then(function(response) {
      // for (var bike of response.bikes) {
      //   var title = bike.title;
      //   bikes.push(bike);
      // }
      // console.log(that);
      that.abikes = response.bikes.length;
      // console.log(that);
    });
    // console.log("abikes after request: " + this.abikes);
    // return this.abikes;
};

exports.bikeModule = Bike;
