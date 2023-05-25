const data2015 = [
  { name: "Brunei Darussalam", coords: [4.4137155, 114.5653908], value: -41.1 },
  { name: "Mainland China", coords: [19.1153424, 72.9085796], value: 5487.20 },
  { name: "Hong Kong", coords: [22.2793278, 114.1628131], value: -3559.80 },
  { name: "India", coords: [22.3511148, 78.6677428], value: 1880.80 },
  { name: "Indonesia", coords: [-2.4833826, 117.8902853], value: 554.8 },
  { name: "Israel", coords: [30.8124247, 34.8594762], value: -1660.90 },
  { name: "Japan", coords: [36.5748441, 139.2394179], value: 2466.60 },
  { name: "Republic Of Korea", coords: [36.638392, 127.6961188], value: 1804.40 },
  { name: "Malaysia", coords: [4.5693754, 102.2656823], value: 2694.60 },
  { name: "Myanmar", coords: [17.1750495, 95.9999652], value: 40.7 },
  { name: "Philippines", coords: [12.7503486, 122.7312101], value: 1153.80 },
  { name: "Taiwan", coords: [23.9739374, 120.9820179], value: 1711 },
  { name: "Thailand", coords: [14.8971921, 100.83273], value: -205.4 },
  { name: "Vietnam", coords: [15.9266657, 107.9650855], value: -24.4 },
  { name: "Austria", coords: [47.59397, 14.12456], value: -163.8 },
  { name: "Belgium", coords: [50.6402809, 4.6667145], value: -261.3 },
  { name: "Denmark", coords: [55.670249, 10.3333283], value: 68 },
  { name: "Finland", coords: [63.2467777, 25.9209164], value: 164.1 },
  { name: "France", coords: [46.603354, 1.8883335], value: 81.7 },
  { name: "Germany", coords: [51.1638175, 10.4478313], value: -1173.60 },
  { name: "Ireland", coords: [52.865196, -7.9794599], value: 10848.80 },
  { name: "Luxembourg", coords: [49.8158683, 6.1296751], value: 412.1 },
  { name: "Netherlands", coords: [52.2434979, 5.6343227], value: 7454 },
  { name: "Norway", coords: [61.1529386, 8.7876653], value: 1153.60 },
  { name: "Switzerland", coords: [46.7985624, 8.2319736], value: 2132.70 },
  { name: "United Kingdom", coords: [54.7023545, -3.2765753], value: 2500.80 },
  { name: "United States", coords: [39.7837304, -100.445882], value: 24449 },
  { name: "Canada", coords: [61.0666922, -107.991707], value: 1076.30 },
  { name: "Australia", coords: [-24.7761086, 134.755], value: 1089.90 },
  { name: "New Zealand", coords: [-41.5000831, 172.8344077], value: -161.1 }
];

const data2016 = [
  { name: "Brunei Darussalam", coords: [4.4137155, 114.5653908], value: 24.5 },
  { name: "Mainland China", coords: [19.1153424, 72.9085796], value: 3903.80 },
  { name: "Hong Kong", coords: [22.2793278, 114.1628131], value: 1763 },
  { name: "India", coords: [22.3511148, 78.6677428], value: 1913.90 },
  { name: "Indonesia", coords: [-2.4833826, 117.8902853], value: 2847.70 },
  { name: "Israel", coords: [30.8124247, 34.8594762], value: 100.2 },
  { name: "Japan", coords: [36.5748441, 139.2394179], value: 6728.90 },
  { name: "Republic Of Korea", coords: [36.638392, 127.6961188], value: 3231.90 },
  { name: "Malaysia", coords: [4.5693754, 102.2656823], value: 4393 },
  { name: "Myanmar", coords: [17.1750495, 95.9999652], value: 112.5 },
  { name: "Philippines", coords: [12.7503486, 122.7312101], value: 416.2 },
  { name: "Taiwan", coords: [23.9739374, 120.9820179], value: 2674.40 },
  { name: "Thailand", coords: [14.8971921, 100.83273], value: 1856.10 },
  { name: "Vietnam", coords: [15.9266657, 107.9650855], value: -38.7 },
  { name: "Austria", coords: [47.59397, 14.12456], value: -47.9 },
  { name: "Belgium", coords: [50.6402809, 4.6667145], value: 690.1 },
  { name: "Denmark", coords: [55.670249, 10.3333283], value: 1069.40 },
  { name: "Finland", coords: [63.2467777, 25.9209164], value: 266.6 },
  { name: "France", coords: [46.603354, 1.8883335], value: 3059.20 },
  { name: "Germany", coords: [51.1638175, 10.4478313], value: -1177.30 },
  { name: "Ireland", coords: [52.865196, -7.9794599], value: 12872.70 },
  { name: "Luxembourg", coords: [49.8158683, 6.1296751], value: 9881 },
  { name: "Netherlands", coords: [52.2434979, 5.6343227], value: 2737.90 },
  { name: "Norway", coords: [61.1529386, 8.7876653], value: 356.8 },
  { name: "Switzerland", coords: [46.7985624, 8.2319736], value: -6215.70 },
  { name: "United Kingdom", coords: [54.7023545, -3.2765753], value: 5374.60 },
  { name: "United States", coords: [39.7837304, -100.445882], value: 14735.70 },
  { name: "Canada", coords: [61.0666922, -107.991707], value: 1503.40 },
  { name: "Australia", coords: [-24.7761086, 134.755], value: 1040.30 },
  { name: "New Zealand", coords: [-41.5000831, 172.8344077], value: 447.3 }
];

mapboxgl.accessToken = 'pk.eyJ1IjoiaHVzaXlhIiwiYSI6ImNsZHhpeHJodzBpMWgzbnBoMnN4dXliY28ifQ.LiFbhAGXvlGKmU8aXtX_8g';

// Load a new map in the 'map' HTML div
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/husiya/cli1zxau702h501pn487gepxj',
  center: [103.8198, 1.3521], // starting position [lng, lat]
  zoom: 4 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl()); //Adds zoom control


// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();


map.on('load', function () {
  d3.json("", function () {

    var myGeojson = {};
    myGeojson.type = 'FeatureCollection';
    myGeojson.features = [];
  
    // Use your data for the loop
    data.forEach(function (d) {
      var newFeature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [d.coords[1], d.coords[0]]
        },
        "properties": {
          "name": d.name,
          "value": d.value,
        }
      };
  
      myGeojson.features.push(newFeature);
    });
  
    // Add the GeoJSON data to the map as a new source
    map.addSource('myData', {
      'type': 'geojson',
      'data': myGeojson
    });
  
    // Add a layer to the map using the GeoJSON source
    map.addLayer({
      'id': 'myLayer',
      'type': 'circle',
      'source': 'myData',
      'paint': {
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          4, 10,
          10, 18
        ],
        'circle-color': [
          'interpolate',
          ['linear'],
          ['get', 'value'],
          -15000, 'lightgreen',
          15000, 'darkblue'
        ],
        'circle-opacity': 0.4
      }
    });
  });
});

// Create a time slider component
var timeSlider = new RangeSliderComponent({
  id: 'time-slider',
  min: 2015,
  max: 2016,
  step: 1,
  value: 2016,
  unit: '',
  onChange: function (value) {
    // Update the map data based on the selected year
    var selectedYear = value.toString();
    map.getSource('myData').setData(data[selectedYear]);
  }
});

// Append the time slider to a container element
var timeSliderContainer = document.getElementById('time-slider-container');
timeSliderContainer.appendChild(timeSlider.getElement());

// Trigger the initial map data update
timeSlider.onChange(2016);