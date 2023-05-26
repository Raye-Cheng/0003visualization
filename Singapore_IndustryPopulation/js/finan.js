const data = [
  { "name": "Brunei Darussalam", "coords": [4.4137155, 114.5653908], "value": 4.7 },
  { "name": "Mainland China", "coords": [19.1153424, 72.9085796], "value": 9282.9 },
  { "name": "Hong Kong", "coords": [22.2793278, 114.1628131], "value": 10027.2 },
  { "name": "India", "coords": [22.3511148, 78.6677428], "value": 204.2 },
  { "name": "Indonesia", "coords": [-2.4833826, 117.8902853], "value": 1491.4 },
  { "name": "Israel", "coords": [30.8124247, 34.8594762], "value": 80.6 },
  { "name": "Japan", "coords": [36.5748441, 139.2394179], "value": 23352 },
  { "name": "Republic Of Korea", "coords": [36.638392, 127.6961188], "value": 8264.9 },
  { "name": "Malaysia", "coords": [4.5693754, 102.2656823], "value": 2653.9 },
  { "name": "Myanmar", "coords": [17.1750495, 95.9999652], "value": -24.3 },
  { "name": "Philippines", "coords": [12.7503486, 122.7312101], "value": 333.3 },
  { "name": "Taiwan", "coords": [23.9739374, 120.9820179], "value": 6098.5 },
  { "name": "Thailand", "coords": [14.8971921, 100.83273], "value": 3634.9 },
  { "name": "Vietnam", "coords": [15.9266657, 107.9650855], "value": 349.1 },
  { "name": "Austria", "coords": [47.59397, 14.12456], "value": 18.2 },
  { "name": "Belgium", "coords": [50.6402809, 4.6667145], "value": 640.7 },
  { "name": "Denmark", "coords": [55.670249, 10.3333283], "value": -431.7 },
  { "name": "Finland", "coords": [63.2467777, 25.9209164], "value": -117.5 },
  { "name": "France", "coords": [46.603354, 1.8883335], "value": 5905.5 },
  { "name": "Germany", "coords": [51.1638175, 10.4478313], "value": 3150.3 },
  { "name": "Ireland", "coords": [52.865196, -7.9794599], "value": 4998.1 },
  { "name": "Luxembourg", "coords": [49.8158683, 6.1296751], "value": 2870.1 },
  { "name": "Netherlands", "coords": [52.2434979, 5.6343227], "value": 8490.7 },
  { "name": "Norway", "coords": [61.1529386, 8.7876653], "value": -756.5 },
  { "name": "Switzerland", "coords": [46.7985624, 8.2319736], "value": 6938.7 },
  { "name": "United Kingdom", "coords": [54.7023545, -3.2765753], "value": 12067.8 },
  { "name": "United States", "coords": [39.7837304, -100.445882], "value": 33238 },
  { "name": "Canada", "coords": [61.0666922, -107.991707], "value": 5144.3 },
  { "name": "Australia", "coords": [-24.7761086, 134.755], "value": 2882 },
  { "name": "New Zealand", "coords": [-41.5000831, 172.8344077], "value": -153.7 }
];


mapboxgl.accessToken = 'pk.eyJ1IjoiaHVzaXlhIiwiYSI6ImNsZHhpeHJodzBpMWgzbnBoMnN4dXliY28ifQ.LiFbhAGXvlGKmU8aXtX_8g';

// Load a new map in the 'map' HTML div
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/husiya/cli1zxau702h501pn487gepxj',
  center: [103.8198, 1.3521], // starting position [lng, lat]
  zoom: 2 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl()); //Adds zoom control


// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// add marker for Singapore
var singaporeMarker = new mapboxgl.Marker()
  .setLngLat([103.8198, 1.3521])
  .addTo(map);


map.on('load', function () {


  d3.json("", function () {

    var myGeojson = {};
    myGeojson.type = 'FeatureCollection';
    myGeojson.features = [];

    // 使用您的数据进行循环
    data.forEach(function (d) {
      var newFeature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [d.coords[1], d.coords[0]]
        },
        "properties": {
          "Name": d.name,
          "InvestmentValue": d.value
        }
      };
      myGeojson.features.push(newFeature);
    });

    console.log(myGeojson);

    map.addSource('points', {
      'type': 'geojson',
      'data': myGeojson
    });

    map.addLayer({
      id: 'InvestmentPoints',
      type: 'circle',
      source: 'points',
      'layout': {
        'visibility': 'visible'
      },
      paint: {
        'circle-color': {
          property: 'InvestmentValue',
          stops: [
            [-4000, "#f00"],
            [0, "#999"],
            [4000, "#00f"]
          ]
        },
        'circle-opacity': 0.6,
        'circle-stroke-width': 0.1,
        'circle-stroke-color': '#999',
        'circle-stroke-opacity': 1,
        'circle-radius': {
          property: 'InvestmentValue',
          stops: [
            [-4000, 5],
            [0, 10],
            [4000, 15]
          ]
        }
      }
    });


    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    map.on('mouseenter', 'InvestmentPoint', function (e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = "<h2>" + e.features[0].properties.Name + "</h2><p>Bikes: " + e.features[0].properties.NbBikes + "</p><p>Empty Docks: " + e.features[0].properties.NbEmptyDocks + "<p>Percent Full: " + (e.features[0].properties.PropFull).toFixed(1) + "%</p>";

      popup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);

    });


    map.on('mouseleave', 'InvestmentPoints', function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });



  });


});