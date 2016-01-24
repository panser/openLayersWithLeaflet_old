'use strict';

//var map = L.mapbox.map('map').setView([62.5, 4.2], 5);
//var temperature = L.tileLayer.wms('http://opencache.statkart.no/gatekeeper/gk/gk.open?', {
//    layers: 'topo2',
//    format: 'image/png'
//}).addTo(map);



L.mapbox.accessToken = 'pk.eyJ1IjoicGFuc2VyIiwiYSI6ImNpanJtcWRubDAwYTB2bG03YWQ3MjcwZW0ifQ.Jxy8Jgl2jTqK1KluRyBeBg';

var mapid = 'panser.cwzqt7d9';
var infoElm = document.querySelector('.building—info');
var map = L.mapbox.map('map', mapid, {gridLayer : false, zoomControl : false }).setView([20, 60], 5);

map.attributionControl.addAttribution('Source: Senatsverwaltung für Stadtentwicklung und Umwelt Berlin');

var dataLayer = L.mapbox.gridLayer(mapid).addTo(map);

