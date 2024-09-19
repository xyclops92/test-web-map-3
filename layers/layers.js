var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriSatellite_1 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_madamtheresaC43252_2 = new ol.format.GeoJSON();
var features_madamtheresaC43252_2 = format_madamtheresaC43252_2.readFeatures(json_madamtheresaC43252_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_madamtheresaC43252_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_madamtheresaC43252_2.addFeatures(features_madamtheresaC43252_2);
var lyr_madamtheresaC43252_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_madamtheresaC43252_2, 
                style: style_madamtheresaC43252_2,
                popuplayertitle: "madam theresa C43252",
                interactive: true,
                title: '<img src="styles/legend/madamtheresaC43252_2.png" /> madam theresa C43252'
            });
var format_Paths_3 = new ol.format.GeoJSON();
var features_Paths_3 = format_Paths_3.readFeatures(json_Paths_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paths_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paths_3.addFeatures(features_Paths_3);
var lyr_Paths_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paths_3, 
                style: style_Paths_3,
                popuplayertitle: "Paths",
                interactive: true,
                title: '<img src="styles/legend/Paths_3.png" /> Paths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriSatellite_1.setVisible(true);lyr_madamtheresaC43252_2.setVisible(true);lyr_Paths_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriSatellite_1,lyr_madamtheresaC43252_2,lyr_Paths_3];
lyr_madamtheresaC43252_2.set('fieldAliases', {'id': 'id', 'FROM': 'FROM', 'X': 'X', 'Y': 'Y', 'TO': 'TO', 'BEARING': 'BEARING', 'DISTANCE': 'DISTANCE', });
lyr_Paths_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_madamtheresaC43252_2.set('fieldImages', {'id': 'Range', 'FROM': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'TO': 'Range', 'BEARING': 'TextEdit', 'DISTANCE': 'TextEdit', });
lyr_Paths_3.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_madamtheresaC43252_2.set('fieldLabels', {'id': 'hidden field', 'FROM': 'hidden field', 'X': 'inline label - always visible', 'Y': 'inline label - visible with data', 'TO': 'hidden field', 'BEARING': 'hidden field', 'DISTANCE': 'inline label - always visible', });
lyr_Paths_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Paths_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});