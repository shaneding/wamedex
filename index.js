
var map = L.map('mapid').setView([0, -85], 2);
var currentMetadata = null;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let i = 0; i < datasets.length; i++) { 
    var dataset = datasets[i]["gmd:MD_Metadata"];
    var title = getTitle(dataset);
    
    var bounding_box = getBoundingBox(dataset);
    if (bounding_box.length == 2) {
        var marker = L.marker(bounding_box).addTo(map);
    } else {
        var polygon = L.polygon(bounding_box).addTo(map);
    }
    
    var card =  '<div class="card p-2 mb-2">' +
                    `<h5 class="card-title">${title}</h5>`+ 
                    '<button type="button" class="btn btn-link ml-auto" onclick="toggleMetadata(event);">Show Metadata</button>' +
                '</div>';
    $(card).appendTo('#datasetList');
}

function toggleMetadata(event) {
    var selectedMetadata = 0; // todo get index from event
    if (selectedMetadata == currentMetadata) {
        closeMetadata();
        return;
    }
    var dataset = datasets[selectedMetadata];
    var metadata = '<p>' + JSON.stringify(dataset) + '</p>';
    $('#metadata').html(metadata);
    if (!$('#metadata-container').is(':visible')) {
        $('#map-container').removeClass('col-xl-9').addClass('col-xl-6');
        $('#metadata-container').show();
    }
    currentMetadata = selectedMetadata;
}

function closeMetadata() {
    $('#metadata-container').hide();
    $('#map-container').removeClass('col-xl-6').addClass('col-xl-9');
    currentMetadata = null;
}

function getTitle(dataset) {
    return dataset["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:citation"]["gmd:CI_Citation"]["gmd:title"]["gco:CharacterString"];
}

function getBoundingBox(dataset) {
    var bb_json = dataset["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:extent"]["gmd:EX_Extent"]["gmd:geographicElement"]["gmd:EX_GeographicBoundingBox"];
    var west_lon = bb_json["gmd:westBoundLongitude"]["gco:Decimal"];
    var east_lon = bb_json["gmd:eastBoundLongitude"]["gco:Decimal"];
    var south_lat = bb_json["gmd:southBoundLatitude"]["gco:Decimal"];
    var north_lat = bb_json["gmd:northBoundLatitude"]["gco:Decimal"];
    
    if (west_lon == east_lon && south_lat == north_lat) {
        return [north_lat, west_lon];
    } else {
        return [[north_lat, west_lon], [south_lat, west_lon], [south_lat, east_lon], [north_lat, east_lon]];
    }
}