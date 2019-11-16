var gpxXMLUrl1 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Punarinnankierros2-2.gpx";
var gpxXMLUrl2 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Sauvakavely-NordicWalking-2.gpx";
var gpxXMLUrl3 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Kattila-Mustalampi-Haukkalampi-colored-11.gpx";
var gpxXMLUrl4 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Korpinkierros-siikaniemesta%CC%88-colored-9.gpx";
var gpxXMLUrl5 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Lippaluolan-lenkki-1.gpx";
var gpxXMLUrl6 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Maahisenkierros2019Haltia-colored-2.gpx";
var gpxXMLUrl7 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/Soidinkierros-colored.gpx";
var gpxXMLUrl8 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/menna%CC%88a%CC%88n_metsa%CC%88a%CC%88n_10km.gpx";
var gpxXMLUrl9 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/menna%CC%88a%CC%88n_metsa%CC%88a%CC%88n_5km-1.gpx";
var gpxXMLUrl10 = "https://raw.githubusercontent.com/quynhhgoogoo/junction_visit_finland/master/pyora-haukankierros-pyora-colored.gpx";
var map;

function loadGPXFileIntoGoogleMap1(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#ff0000"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap2(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#0000"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap3(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#FFBF3D"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap4(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#E85D38"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap5(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#FF4AF9"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap6(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#4838E8"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap7(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#84E2FA"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap8(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#E89C38"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function loadGPXFileIntoGoogleMap9(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#9CFA84"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}


function loadGPXFileIntoGoogleMap10(map, filename) {
    $.ajax({
        url: filename,
        dataType: "xml",
        success: function(data) {
            console.log('Loaded', filename);
            var parser = new GPXParser(data, map);
            parser.setTrackColour("#2391EB"); // Set the track line colour
            parser.setTrackWidth(5); // Set the track line width
            parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
            parser.centerAndZoom(data);
            parser.addTrackpointsToMap(); // Add the trackpoints
            parser.addWaypointsToMap(); // Add the waypoints
        },
        error: function(request, errorType, errorMessage) {
            // console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
            console.log("XML AJAX Error");

        }

    });
}

function initMap() {
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    console.log('initMap');
    loadGPXFileIntoGoogleMap1(map, gpxXMLUrl1);
    loadGPXFileIntoGoogleMap2(map, gpxXMLUrl2);
    loadGPXFileIntoGoogleMap3(map, gpxXMLUrl3);
    loadGPXFileIntoGoogleMap4(map, gpxXMLUrl4);
    loadGPXFileIntoGoogleMap5(map, gpxXMLUrl5);
    loadGPXFileIntoGoogleMap6(map, gpxXMLUrl6);
    loadGPXFileIntoGoogleMap7(map, gpxXMLUrl7);
    loadGPXFileIntoGoogleMap8(map, gpxXMLUrl8);
    loadGPXFileIntoGoogleMap9(map, gpxXMLUrl9);
    loadGPXFileIntoGoogleMap10(map, gpxXMLUrl0);
}


google.maps.event.addDomListener(window, 'load', initMap);