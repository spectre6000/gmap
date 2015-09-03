var map;

function initMap() {
  var myLatLng = {lat: 39.910, lng: -105.085};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });
}

function initMarker(myLat, myLng, message) {

  var newLatLng = new google.maps.LatLng(myLat,myLng);

  var marker = new google.maps.Marker({
    position: newLatLng,
    map: map,
    title: 'Hello World!'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  var infowindow = new google.maps.InfoWindow({
    content: message
  });

}


$(document).ready(function(){

  $('#go').click(function(){
    //Prevent reload
    event.preventDefault();

    var myLat = Number($('#latitude_field').val());
    var myLng = Number($('#longitude_field').val());
    var message = $('#message_field').val();

    initMarker(myLat, myLng, message);
  });

});