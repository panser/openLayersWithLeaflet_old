'use strict';

$(document).ready(function () {

    var map = new L.Map('map', {
        layers: [
            L.tileLayer.wms('http://opencache.statkart.no/gatekeeper/gk/gk.open?', {
                layers: 'topo2',
                format: 'image/png'
            })]
    });
    map.setView([62.5, 4.2], 5);


    var geoLayer = new L.GeoJSON();
    geoLayer.addTo(map);
    var jqxhr = $.getJSON('../../data/geojson/test.geojson');

    $('#jsonCheckBox').change(function () {
        if ($(this).is(":checked")) {
            geoLayer.addData(jqxhr.responseJSON);
        } else {
            geoLayer.removeData(jqxhr.responseJSON);
        }
    });


});