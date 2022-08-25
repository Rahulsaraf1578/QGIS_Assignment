var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BMUmap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "BMU map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BMUmap_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8550469.299460, 3279983.107688, 8551314.786477, 3280539.260004]
                            })
                        });
var format_a_2 = new ol.format.GeoJSON();
var features_a_2 = format_a_2.readFeatures(json_a_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_a_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a_2.addFeatures(features_a_2);
var lyr_a_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_a_2, 
                style: style_a_2,
                interactive: true,
                title: '<img src="styles/legend/a_2.png" /> a'
            });
var format_AssemblyPoints_3 = new ol.format.GeoJSON();
var features_AssemblyPoints_3 = format_AssemblyPoints_3.readFeatures(json_AssemblyPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssemblyPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssemblyPoints_3.addFeatures(features_AssemblyPoints_3);
var lyr_AssemblyPoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AssemblyPoints_3, 
                style: style_AssemblyPoints_3,
                interactive: true,
                title: '<img src="styles/legend/AssemblyPoints_3.png" /> AssemblyPoints'
            });
var format_roads_4 = new ol.format.GeoJSON();
var features_roads_4 = format_roads_4.readFeatures(json_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_4.addFeatures(features_roads_4);
var lyr_roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_4, 
                style: style_roads_4,
                interactive: true,
                title: '<img src="styles/legend/roads_4.png" /> roads'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BMUmap_1.setVisible(true);lyr_a_2.setVisible(true);lyr_AssemblyPoints_3.setVisible(true);lyr_roads_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BMUmap_1,lyr_a_2,lyr_AssemblyPoints_3,lyr_roads_4];
lyr_a_2.set('fieldAliases', {'id': 'id', 'Building': 'Building', });
lyr_AssemblyPoints_3.set('fieldAliases', {'id': 'id', 'ground': 'ground', });
lyr_roads_4.set('fieldAliases', {'id': 'id', 'road': 'road', });
lyr_a_2.set('fieldImages', {'id': '', 'Building': '', });
lyr_AssemblyPoints_3.set('fieldImages', {'id': '', 'ground': '', });
lyr_roads_4.set('fieldImages', {'id': '', 'road': '', });
lyr_a_2.set('fieldLabels', {'id': 'no label', 'Building': 'no label', });
lyr_AssemblyPoints_3.set('fieldLabels', {'id': 'no label', 'ground': 'no label', });
lyr_roads_4.set('fieldLabels', {'id': 'no label', 'road': 'no label', });
lyr_roads_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});