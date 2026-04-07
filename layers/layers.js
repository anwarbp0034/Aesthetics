var wms_layers = [];

var format_AreaTanam_0 = new ol.format.GeoJSON();
var features_AreaTanam_0 = format_AreaTanam_0.readFeatures(json_AreaTanam_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTanam_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTanam_0.addFeatures(features_AreaTanam_0);
var lyr_AreaTanam_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTanam_0, 
                style: style_AreaTanam_0,
                popuplayertitle: 'Area Tanam',
                interactive: true,
                title: '<img src="styles/legend/AreaTanam_0.png" /> Area Tanam'
            });
var format_Aesthetic_1 = new ol.format.GeoJSON();
var features_Aesthetic_1 = format_Aesthetic_1.readFeatures(json_Aesthetic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aesthetic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aesthetic_1.addFeatures(features_Aesthetic_1);
var lyr_Aesthetic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aesthetic_1, 
                style: style_Aesthetic_1,
                popuplayertitle: 'Aesthetic',
                interactive: true,
                title: '<img src="styles/legend/Aesthetic_1.png" /> Aesthetic'
            });
var format_Kaligesing_Loano_Purworejo_2 = new ol.format.GeoJSON();
var features_Kaligesing_Loano_Purworejo_2 = format_Kaligesing_Loano_Purworejo_2.readFeatures(json_Kaligesing_Loano_Purworejo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kaligesing_Loano_Purworejo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaligesing_Loano_Purworejo_2.addFeatures(features_Kaligesing_Loano_Purworejo_2);
var lyr_Kaligesing_Loano_Purworejo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kaligesing_Loano_Purworejo_2, 
                style: style_Kaligesing_Loano_Purworejo_2,
                popuplayertitle: 'Kaligesing_Loano_Purworejo',
                interactive: true,
                title: '<img src="styles/legend/Kaligesing_Loano_Purworejo_2.png" /> Kaligesing_Loano_Purworejo'
            });
var format_Bagelen_Bener_Gebang_3 = new ol.format.GeoJSON();
var features_Bagelen_Bener_Gebang_3 = format_Bagelen_Bener_Gebang_3.readFeatures(json_Bagelen_Bener_Gebang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bagelen_Bener_Gebang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bagelen_Bener_Gebang_3.addFeatures(features_Bagelen_Bener_Gebang_3);
var lyr_Bagelen_Bener_Gebang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bagelen_Bener_Gebang_3, 
                style: style_Bagelen_Bener_Gebang_3,
                popuplayertitle: 'Bagelen_Bener_Gebang',
                interactive: true,
                title: '<img src="styles/legend/Bagelen_Bener_Gebang_3.png" /> Bagelen_Bener_Gebang'
            });

lyr_AreaTanam_0.setVisible(true);lyr_Aesthetic_1.setVisible(true);lyr_Kaligesing_Loano_Purworejo_2.setVisible(true);lyr_Bagelen_Bener_Gebang_3.setVisible(true);
var layersList = [lyr_AreaTanam_0,lyr_Aesthetic_1,lyr_Kaligesing_Loano_Purworejo_2,lyr_Bagelen_Bener_Gebang_3];
lyr_AreaTanam_0.set('fieldAliases', {'Id': 'Id', 'Dusun': 'Dusun', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Luas': 'Luas', 'UOM_Luas': 'UOM_Luas', 'CPCL': 'CPCL', 'Tgl_Track': 'Tgl_Track', 'Ket_AR': 'Ket_AR', 'Jml_Bibit': 'Jml_Bibit', 'UOM_Bibit': 'UOM_Bibit', 'Jml_Pupuk': 'Jml_Pupuk', 'UOM_Pupuk': 'UOM_Pupuk', 'HOK': 'HOK', 'UOM_HOK': 'UOM_HOK', });
lyr_Aesthetic_1.set('fieldAliases', {'Id': 'Id', });
lyr_Kaligesing_Loano_Purworejo_2.set('fieldAliases', {'DateTime': 'DateTime', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Surveyor': 'Surveyor', 'Filter': 'Filter', 'Keterangan': 'Keterangan', 'Jenis': 'Jenis', 'Tinggi': 'Tinggi', });
lyr_Bagelen_Bener_Gebang_3.set('fieldAliases', {'DateTime': 'DateTime', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Surveyor': 'Surveyor', 'Filter': 'Filter', 'Keterangan': 'Keterangan', 'Jenis': 'Jenis', 'Tinggi': 'Tinggi', });
lyr_AreaTanam_0.set('fieldImages', {'Id': 'Range', 'Dusun': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas': 'TextEdit', 'UOM_Luas': 'TextEdit', 'CPCL': 'TextEdit', 'Tgl_Track': 'DateTime', 'Ket_AR': 'TextEdit', 'Jml_Bibit': 'Range', 'UOM_Bibit': 'TextEdit', 'Jml_Pupuk': 'Range', 'UOM_Pupuk': 'TextEdit', 'HOK': 'Range', 'UOM_HOK': 'TextEdit', });
lyr_Aesthetic_1.set('fieldImages', {'Id': 'Range', });
lyr_Kaligesing_Loano_Purworejo_2.set('fieldImages', {'DateTime': 'DateTime', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Surveyor': 'TextEdit', 'Filter': 'TextEdit', 'Keterangan': 'TextEdit', 'Jenis': 'TextEdit', 'Tinggi': 'TextEdit', });
lyr_Bagelen_Bener_Gebang_3.set('fieldImages', {'DateTime': 'DateTime', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Surveyor': 'TextEdit', 'Filter': 'TextEdit', 'Keterangan': 'TextEdit', 'Jenis': 'TextEdit', 'Tinggi': 'TextEdit', });
lyr_AreaTanam_0.set('fieldLabels', {'Id': 'hidden field', 'Dusun': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'UOM_Luas': 'inline label - always visible', 'CPCL': 'inline label - always visible', 'Tgl_Track': 'hidden field', 'Ket_AR': 'hidden field', 'Jml_Bibit': 'inline label - always visible', 'UOM_Bibit': 'inline label - always visible', 'Jml_Pupuk': 'inline label - always visible', 'UOM_Pupuk': 'inline label - always visible', 'HOK': 'inline label - always visible', 'UOM_HOK': 'inline label - always visible', });
lyr_Aesthetic_1.set('fieldLabels', {'Id': 'hidden field', });
lyr_Kaligesing_Loano_Purworejo_2.set('fieldLabels', {'DateTime': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Z': 'hidden field', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Surveyor': 'hidden field', 'Filter': 'hidden field', 'Keterangan': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Tinggi': 'inline label - always visible', });
lyr_Bagelen_Bener_Gebang_3.set('fieldLabels', {'DateTime': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Z': 'hidden field', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Surveyor': 'hidden field', 'Filter': 'hidden field', 'Keterangan': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Tinggi': 'inline label - always visible', });
lyr_Bagelen_Bener_Gebang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});