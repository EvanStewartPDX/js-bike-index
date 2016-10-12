Bike = function() {

}

Bike.prototype.getBike(make, color, date_before, date_after, zip) {

  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&proximity=45.521728%2C-122.67326&proximity_square=0&stolen_before='+ before +'&stolen_after='+ after).then(function(response) {
    // console.log(bikes.title);
    response.bikes.forEach
    for (var bike in response.bikes) {

    }
  });
}

exports.bikeModule = Bike;
