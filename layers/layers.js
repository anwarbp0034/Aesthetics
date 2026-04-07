var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AreaTanam_1 = new ol.format.GeoJSON();
var features_AreaTanam_1 = format_AreaTanam_1.readFeatures(json_AreaTanam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTanam_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTanam_1.addFeatures(features_AreaTanam_1);
var lyr_AreaTanam_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTanam_1, 
                style: style_AreaTanam_1,
                popuplayertitle: 'Area Tanam',
                interactive: true,
    title: 'Area Tanam<br />\
    <img src="styles/legend/AreaTanam_1_0.png" /> Bagelen<br />\
    <img src="styles/legend/AreaTanam_1_1.png" /> Bleber<br />\
    <img src="styles/legend/AreaTanam_1_2.png" /> Clapar<br />\
    <img src="styles/legend/AreaTanam_1_3.png" /> Dadirejo<br />\
    <img src="styles/legend/AreaTanam_1_4.png" /> Guntur<br />\
    <img src="styles/legend/AreaTanam_1_5.png" /> Gunung Wangi<br />\
    <img src="styles/legend/AreaTanam_1_6.png" /> Guyangan<br />\
    <img src="styles/legend/AreaTanam_1_7.png" /> Hardimulyo<br />\
    <img src="styles/legend/AreaTanam_1_8.png" /> Hulosobo<br />\
    <img src="styles/legend/AreaTanam_1_9.png" /> Jelok<br />\
    <img src="styles/legend/AreaTanam_1_10.png" /> Jetis<br />\
    <img src="styles/legend/AreaTanam_1_11.png" /> Kalikalong<br />\
    <img src="styles/legend/AreaTanam_1_12.png" /> Kalinongko<br />\
    <img src="styles/legend/AreaTanam_1_13.png" /> Kaliwader<br />\
    <img src="styles/legend/AreaTanam_1_14.png" /> Kamijoro<br />\
    <img src="styles/legend/AreaTanam_1_15.png" /> Karangsari<br />\
    <img src="styles/legend/AreaTanam_1_16.png" /> Kebongunung<br />\
    <img src="styles/legend/AreaTanam_1_17.png" /> Kedungpoh<br />\
    <img src="styles/legend/AreaTanam_1_18.png" /> Kemanukan<br />\
    <img src="styles/legend/AreaTanam_1_19.png" /> Kemejing<br />\
    <img src="styles/legend/AreaTanam_1_20.png" /> Ketosari<br />\
    <img src="styles/legend/AreaTanam_1_21.png" /> Legetan<br />\
    <img src="styles/legend/AreaTanam_1_22.png" /> Limbangan<br />\
    <img src="styles/legend/AreaTanam_1_23.png" /> Loano<br />\
    <img src="styles/legend/AreaTanam_1_24.png" /> Ngasinan<br />\
    <img src="styles/legend/AreaTanam_1_25.png" /> Penungkulan<br />\
    <img src="styles/legend/AreaTanam_1_26.png" /> Piji<br />\
    <img src="styles/legend/AreaTanam_1_27.png" /> Rimun<br />\
    <img src="styles/legend/AreaTanam_1_28.png" /> Sidoleren<br />\
    <img src="styles/legend/AreaTanam_1_29.png" /> Sidomukti<br />\
    <img src="styles/legend/AreaTanam_1_30.png" /> Sidomulyo<br />\
    <img src="styles/legend/AreaTanam_1_31.png" /> Sidorejo<br />\
    <img src="styles/legend/AreaTanam_1_32.png" /> Soko<br />\
    <img src="styles/legend/AreaTanam_1_33.png" /> Sudorogo<br />\
    <img src="styles/legend/AreaTanam_1_34.png" /> Tawangsari<br />\
    <img src="styles/legend/AreaTanam_1_35.png" /> Tlogorejo<br />\
    <img src="styles/legend/AreaTanam_1_36.png" /> Wonotopo<br />\
    <img src="styles/legend/AreaTanam_1_37.png" /> Wonotulus<br />\
    <img src="styles/legend/AreaTanam_1_38.png" /> <br />' });
var format_Aesthetic_2 = new ol.format.GeoJSON();
var features_Aesthetic_2 = format_Aesthetic_2.readFeatures(json_Aesthetic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aesthetic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aesthetic_2.addFeatures(features_Aesthetic_2);
var lyr_Aesthetic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aesthetic_2, 
                style: style_Aesthetic_2,
                popuplayertitle: 'Aesthetic',
                interactive: true,
                title: '<img src="styles/legend/Aesthetic_2.png" /> Aesthetic'
            });
var format_Geotagging_3 = new ol.format.GeoJSON();
var features_Geotagging_3 = format_Geotagging_3.readFeatures(json_Geotagging_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geotagging_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geotagging_3.addFeatures(features_Geotagging_3);
var lyr_Geotagging_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geotagging_3, 
                style: style_Geotagging_3,
                popuplayertitle: 'Geotagging',
                interactive: true,
    title: 'Geotagging<br />\
    <img src="styles/legend/Geotagging_3_0.png" /> Alpukat<br />\
    <img src="styles/legend/Geotagging_3_1.png" /> Duku<br />\
    <img src="styles/legend/Geotagging_3_2.png" /> Durian<br />\
    <img src="styles/legend/Geotagging_3_3.png" /> Gayam<br />\
    <img src="styles/legend/Geotagging_3_4.png" /> Jengkol<br />\
    <img src="styles/legend/Geotagging_3_5.png" /> Kelengkeng<br />\
    <img src="styles/legend/Geotagging_3_6.png" /> Mangga<br />\
    <img src="styles/legend/Geotagging_3_7.png" /> Manggis<br />\
    <img src="styles/legend/Geotagging_3_8.png" /> Pala<br />\
    <img src="styles/legend/Geotagging_3_9.png" /> Petai<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_AreaTanam_1.setVisible(true);lyr_Aesthetic_2.setVisible(true);lyr_Geotagging_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AreaTanam_1,lyr_Aesthetic_2,lyr_Geotagging_3];
lyr_AreaTanam_1.set('fieldAliases', {'Id': 'Id', 'Dusun': 'Dusun', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Luas': 'Luas', 'UOM_Luas': 'UOM_Luas', 'CPCL': 'CPCL', 'Tgl_Track': 'Tgl_Track', 'Ket_AR': 'Ket_AR', 'Jml_Bibit': 'Jml_Bibit', 'UOM_Bibit': 'UOM_Bibit', 'Jml_Pupuk': 'Jml_Pupuk', 'UOM_Pupuk': 'UOM_Pupuk', 'HOK': 'HOK', 'UOM_HOK': 'UOM_HOK', });
lyr_Aesthetic_2.set('fieldAliases', {'Id': 'Id', });
lyr_Geotagging_3.set('fieldAliases', {'Path': 'Path', 'Name': 'Name', 'DateTime': 'DateTime', 'Direction': 'Direction', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Surveyor': 'Surveyor', 'Filter': 'Filter', 'Keterangan': 'Keterangan', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Jenis': 'Jenis', 'Tinggi': 'Tinggi', });
lyr_AreaTanam_1.set('fieldImages', {'Id': 'Range', 'Dusun': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas': 'TextEdit', 'UOM_Luas': 'TextEdit', 'CPCL': 'TextEdit', 'Tgl_Track': 'DateTime', 'Ket_AR': 'TextEdit', 'Jml_Bibit': 'Range', 'UOM_Bibit': 'TextEdit', 'Jml_Pupuk': 'Range', 'UOM_Pupuk': 'TextEdit', 'HOK': 'Range', 'UOM_HOK': 'TextEdit', });
lyr_Aesthetic_2.set('fieldImages', {'Id': 'Range', });
lyr_Geotagging_3.set('fieldImages', {'Path': 'TextEdit', 'Name': 'TextEdit', 'DateTime': 'DateTime', 'Direction': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Surveyor': 'TextEdit', 'Filter': 'TextEdit', 'Keterangan': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jenis': 'TextEdit', 'Tinggi': 'TextEdit', });
lyr_AreaTanam_1.set('fieldLabels', {'Id': 'hidden field', 'Dusun': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'UOM_Luas': 'inline label - always visible', 'CPCL': 'inline label - always visible', 'Tgl_Track': 'hidden field', 'Ket_AR': 'hidden field', 'Jml_Bibit': 'inline label - always visible', 'UOM_Bibit': 'inline label - always visible', 'Jml_Pupuk': 'inline label - always visible', 'UOM_Pupuk': 'inline label - always visible', 'HOK': 'inline label - always visible', 'UOM_HOK': 'inline label - always visible', });
lyr_Aesthetic_2.set('fieldLabels', {'Id': 'no label', });
lyr_Geotagging_3.set('fieldLabels', {'Path': 'hidden field', 'Name': 'hidden field', 'DateTime': 'inline label - always visible', 'Direction': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'Surveyor': 'hidden field', 'Filter': 'hidden field', 'Keterangan': 'hidden field', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Tinggi': 'inline label - always visible', });
lyr_Geotagging_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});