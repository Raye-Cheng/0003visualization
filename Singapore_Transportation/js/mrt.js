var dom = document.getElementById("container");

const API_TOKEN_Mapbox = 'pk.eyJ1IjoicmF5bmUtY2hlbmciLCJhIjoiY2xpMWRjcTNzMGc2eDNqbzRwaHZnYjQ3NiJ9.ogilsbEaVxHdkmQuNLFn4A';
mapboxgl.accessToken = API_TOKEN_Mapbox;


const INITIAL_VIEW_STATE = {
    longitude: 103.8198,//Singapore
    latitude: 1.360270,//Singapore
    zoom: 10,
    bearing: 0,
    pitch: 0,
};
const map = new mapboxgl.Map({
    container: dom,
    style: 'mapbox://styles/rayne-cheng/clhnrxrqj01p601pn28tw14t9',
    interactive: true,
    center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    zoom: INITIAL_VIEW_STATE.zoom,
    bearing: INITIAL_VIEW_STATE.bearing,
    pitch: INITIAL_VIEW_STATE.pitch
});

map.on('load', () => {
    const firstLabelLayerId = map.getStyle().layers.find(layer => layer.type === 'symbol').id;
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': ["get", "height"],
            'fill-extrusion-base': ["get", "min_height"],
            'fill-extrusion-opacity': 0.0
        }
    },
        firstLabelLayerId
    );
    map.addLayer({
        id: 'circle1',
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [103.98870849609375, 1.3567436933517456]
                }
            }
        },
        paint: {
            'circle-radius': 10,
            'circle-color': 'red',
            'circle-opacity': 0.8
        }
    });

    map.addLayer({
        id: 'circle2',
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    "coordinates": [103.8659896850586, 1.4194509983062744]
                }
            }
        },
        paint: {
            'circle-radius': 10,
            'circle-color': 'blue',
            'circle-opacity': 0.8
        }
    });


    map.on('mouseenter', 'circle1', function (event) {
        map.getCanvas().style.cursor = 'pointer';
        showTooltip1(event)
    });

    map.on('mouseleave', 'circle1', function (event) {
        map.getCanvas().style.cursor = 'grab';
        hideTooltip();
    });
});

map.on('mouseenter', 'circle2', function (event) {
    map.getCanvas().style.cursor = 'pointer';
    showTooltip2(event)
});

map.on('mouseleave', 'circle2', function () {
    map.getCanvas().style.cursor = 'grab';
    hideTooltip();
});

function showTooltip1(event) {
    const info = {
        center: event.point,
    };

    const object = event.features[0].properties;

    d3.select("#tooltip")
        .style("top", info.center.y - 3 + "px")
        .style("right", info.center.x - 300 + "px")
        .style("visibility", "visible")
        .style("pointer-events", "none")
        .html(`<img src="img/Changi_airport.jpeg" class='icon'/>
    <p class='title'>Singapore's biggest airport </p>
    `);



}
function showTooltip2(event) {
    const info = {
        center: event.point,
    };

    const object = event.features[0].properties;

    d3.select("#tooltip")
        .style("top", info.center.y + 3 + "px")
        .style("left", info.center.x + "px")
        .style("visibility", "visible")
        .style("pointer-events", "none")
        .html(`<img src="img/Seletar_airport.jpeg" class='icon'/>
    <p class='title'>Singapore's restorative airport </p>
    `);


}
function hideTooltip() {
    d3.select("#tooltip").style("visibility", "hidden");
}


