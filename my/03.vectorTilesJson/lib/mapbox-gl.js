'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFuc2VyIiwiYSI6ImNpanJtcWRubDAwYTB2bG03YWQ3MjcwZW0ifQ.Jxy8Jgl2jTqK1KluRyBeBg';

//var map = L.mapbox.map('map').setView([62.5, 4.2], 5);
//var temperature = L.tileLayer.wms('http://opencache.statkart.no/gatekeeper/gk/gk.open?', {
//    layers: 'topo2',
//    format: 'image/png'
//}).addTo(map);



var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/panser/cijs7ihlp007tcakwtkq1ryjo',
    //style: 'mapbox://styles/mapbox/light-v8',
    zoom: 5,
    center: [20, 60]
});

map.on('style.load', function () {
    map.addSource('panser.cwzqt7d9', {
        type: 'vector',
        //url: 'mapbox://panser.cwzqt7d9'
        url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    //map.addLayer({
    //    "id": "panser.cwzqt7d9",
    //    "type": "line",
    //    "source": "panser.cwzqt7d9",
    //    "source-layer": "contour",
    //    "layout": {
    //        "line-join": "round",
    //        "line-cap": "round"
    //    },
    //    "paint": {
    //        "line-color": "#ff69b4",
    //        "line-width": 1
    //    }
    //});
});

