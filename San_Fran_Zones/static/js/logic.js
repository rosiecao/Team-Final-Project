// Add console.log to check to see if our code is working.
console.log("working");


//  // Get data from cities.js
// let cityData = BAZip;

// // Loop through the cities array and create one marker for each city.
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(features.po_name)
//   L.multiPolygon(features.po_name.coordinates, {
//     radius: features.po_name.coordinates
//   })
//   .bindPopup("<h2>" + features.po_name + ", " + features.state + "</h2> <hr> <h3>Population " + features.zip.toLocaleString() + "</h3>")
// .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = { 
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

let map = L.map('mapid', {
  center: [37.77, -122.41],
  zoom: 12, 
  layers: [satelliteStreets]
});

// Pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map)

let BayCounties = "https://data.sfgov.org/api/views/wamw-vt4s/rows.json?accessType=DOWNLOAD"

//Grabbing our Geo JSON data
d3.json(BayCounties).then(function(data) { 
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJSON(data).addTo(map)
});