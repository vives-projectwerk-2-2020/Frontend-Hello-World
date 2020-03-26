function initMap() {
    console.log("initmap")
    var bp = { lat: 30, lng: 0 };
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 2,
        center: bp,
        maxZoom: 14,
        minZoom: 2,
        mapTypeControl: true
    });
    var iw = new google.maps.InfoWindow();
    var oms = new OverlappingMarkerSpiderfier(map, {
        markersWontMove: true,
        markersWontHide: true,
        basicFormatEvents: true
    });
    var locations = [];
    var clusterMarker = [];

    // for (i = 0; i < value.length; i++) {
        locations.push(["Name1", 53, 6])
        locations.push(["Name2", 53, 6])
        locations.push(["Name3", 53, 6])
        
    // }
    for (var i = 0; i < locations.length; i++) {
        var item = locations[i];
   
        var marker = new google.maps.Marker({
            position: { lat: item[1], lng: item[2] },
            title: String(item[0]),
        });
        oms.addListener('click', function (marker) {
            iw.setContent('TESTTESTTESTTEST');
                iw.open(map, marker);
        });
        oms.addMarker(marker);
        clusterMarker.push(marker);
    }
    new MarkerClusterer(map, clusterMarker, {
        maxZoom: 11,
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',//standard cluster markers
    });
}

