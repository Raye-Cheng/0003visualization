var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

// Set your API key here
const API_TOKEN_Mapbox = 'pk.eyJ1IjoiaHVzaXlhIiwiYSI6ImNsZHhpeHJodzBpMWgzbnBoMnN4dXliY28ifQ.LiFbhAGXvlGKmU8aXtX_8g';
mapboxgl.accessToken = API_TOKEN_Mapbox;

const INITIAL_VIEW_STATE = {
    longitude: 103.8198,
    latitude: 1.360270,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  };
const map = new mapboxgl.Map({
    container: 'main',
    style: 'mapbox://styles/husiya/clhz51hwd027701r0eeva57h0',
    interactive: true,
    center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    zoom: INITIAL_VIEW_STATE.zoom,
    bearing: INITIAL_VIEW_STATE.bearing,
    pitch: INITIAL_VIEW_STATE.pitch
  });

const data = [
    {"name": "Brunei Darussalam", "value": -41.1}, {"name": "Mainland China", "value": 5487.20}, {"name": "Hong Kong", "value": -3559.80}, {"name": "India", "value": 1880.80}, {"name": "Indonesia", "value": 554.8}, {"name": "Israel", "value": -1660.90}, {"name": "Japan", "value": 2466.60}, {"name": "Republic Of Korea", "value": 1804.40}, {"name": "Malaysia", "value": 2694.60}, {"name": "Myanmar", "value": 40.7}, {"name": "Philippines", "value": 1153.80}, {"name": "Taiwan", "value": 1711}, {"name": "Thailand", "value": -205.4}, {"name": "Vietnam", "value": -24.4}, {"name": "Austria", "value": -163.8}, {"name": "Belgium", "value": -261.3}, {"name": "Denmark", "value": 68}, {"name": "Finland", "value": 164.1}, {"name": "France", "value": 81.7}, {"name": "Germany", "value": -1173.60}, {"name": "Ireland", "value": 10848.80}, {"name": "Luxembourg", "value": 412.1}, {"name": "Netherlands", "value": 7454}, {"name": "Norway", "value": 1153.60}, {"name": "Switzerland", "value": 2132.70}, {"name": "United Kingdom", "value": 2500.80}, {"name": "United States", "value": 24449}, {"name": "Canada", "value": 1076.30}, {"name": "Australia", "value": 1089.90}, {"name": "New Zealand", "value": -161.1}
];
const geoCoordMap = {
    "Brunei Darussalam": [4.4137155, 114.5653908], "Mainland China": [19.1153424, 72.9085796], "Hong Kong": [22.2793278, 114.1628131], "India": [22.3511148, 78.6677428], "Indonesia": [-2.4833826, 117.8902853], "Israel": [30.8124247, 34.8594762], "Japan": [36.5748441, 139.2394179], "Republic Of Korea": [36.638392, 127.6961188], "Malaysia": [4.5693754, 102.2656823], "Myanmar": [17.1750495, 95.9999652], "Philippines": [12.7503486, 122.7312101], "Taiwan": [23.9739374, 120.9820179], "Thailand": [14.8971921, 100.83273], "Vietnam": [15.9266657, 107.9650855], "Austria": [47.59397, 14.12456], "Belgium": [50.6402809, 4.6667145], "Denmark": [55.670249, 10.3333283], "Finland": [63.2467777, 25.9209164], "France": [46.603354, 1.8883335], "Germany": [51.1638175, 10.4478313], "Ireland": [52.865196, -7.9794599], "Luxembourg": [49.8158683, 6.1296751], "Netherlands": [52.2434979, 5.6343227], "Norway": [61.1529386, 8.7876653], "    Switzerland": [46.7985624, 8.2319736], "United Kingdom": [54.7023545, -3.2765753], "United States": [39.7837304, -100.445882], "Canada": [61.0666922, -107.991707], "Australia": [-24.7761086, 134.755], "New Zealand": [-41.5000831, 172.8344077]
};
const convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};


option = {  
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'investment',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: function (val) {
        return Math.abs(val[2])/100;
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        color: '#FF5722'
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
  ],
  geo: {
    map: 'regions',
    label: {
        show: false
    },
    room: true,
    itemStyle: {
        areaColor: '#f3f3f3',
        borderColor: '#333'
    },
    emphasis: {
        itemStyle: {
            areaColor: '#ccc'
        }
    }
  }
};

if (option && typeof option === 'object'){
    myChart.setOption(option);
}
