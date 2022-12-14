$(document).ready(function () {
  coordVet = {
    lat: 9.934642700998236,
    lng: -84.0655354917108,
  }

  coordUsuario = {}

  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  /*PARA OBTENER UBICACION DEL USUARIO*/
  initMap = function () {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        coordUsuario = {
          lng: position.coords.longitude,
          lat: position.coords.latitude
        };
        setMapa(coordUsuario);
      }, function (error) { console.log(error); });
  }

  directionsDisplay = new google.maps.DirectionsRenderer();

  map = new google.maps.Map(document.getElementById("map"), {
    center: coordVet,
    zoom: 17,
  });

  directionsDisplay.setMap(map);

  var markerVet = new google.maps.Marker({
    position: coordVet,
    map: map,
    draggable: false,
    title: "Veterinaria",
  })

  var markerUsuario = new google.maps.Marker({
    position: coordUsuario,
    map: map,
    draggable: true,
    title: "Usuario",
  })

  calcRoute();

  /*function calcRoute() {
    var start = coordUsuario;
    var end = coordVet;
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
        directionsDisplay.setOptions({
          polylineOptions: {
            strokeColor: 'red'
          }
        });
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }*/

  function calcRoute() {
    var request = {
      origin: coordUsuario,
      destination: coordVet,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.METRIC, //IMPERIAL, METRIC
    };

    directionsDisplay.setMap(map); //Se vincula el mapa pasado

    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
      else {
        alert("No entr?? al coso, nimodo.");
        console.log(result);
      }
    });
  }
});

/* PARQUE FRANCIA
9.934642700998236, -84.0655354917108
*/

/* MI CASA
9.942627372490914, -84.06434330685224
*/