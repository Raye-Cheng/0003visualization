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

const chartOption = {  
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'investment',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: data.map(item => ({
        name: item.name,
        value: item.coords.concat(item.value),
        symbolSize: Math.abs(item.value)/100
      })),
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

if (chartOption && typeof chartOption === 'object'){
    myChart.setOption(chartOption);
}
