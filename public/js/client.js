
$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    fetchPizza(position);
  });

});

function fetchPizza(position) {
  var url = '/query/'+position.coords.latitude+'/'+position.coords.longitude;
  console.log(url);
  $.getJSON(url, function(data) {
    var businesses = data.businesses;
    console.log(businesses);
    for(var i = 0; i < businesses.length; i++) {
      var $newDiv = $('<div class="res">');
      $newDiv.append('<img src="'+businesses[i].image_url+'"><div class="info"><h3><a href="'+businesses[i].url+'">'+businesses[i].name+'</a></h3>'+'<div><a href="tel:'+businesses[i].phone+'">'+businesses[i].display_phone+'</a></div></div>');
      $('#output').append($newDiv);
    }
  });
}
