
var RED = '#cf2a0e';
var YELLOW = '#e3d430';

//Osceola
function createOsceola() {
	var myCoordinates = [
		{lat: 43.330781, lng: -96.048532},
		{lat:43.323757,lng:-96.048725},
		{lat:43.323820,lng:-96.040270},
		{lat:43.324616,lng:-96.040270},
		{lat:43.324678,lng:-96.038983},
		{lat:43.329080,lng:-96.038876},
		{lat:43.329080,lng:-96.041257},
		{lat:43.330360,lng:-96.041236},
		{lat:43.330422,lng:-96.038790},
		{lat:43.330828,lng:-96.038790},
		{lat:43.330813,lng:-96.048424}
	];

	var shape = new google.maps.Polygon({
	    paths: myCoordinates,
	    strokeColor: '#FF0000',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#FF0000',
	    fillOpacity: 0.35
	});
    shape.setMap(map);
    var isRed = [true,false,true,false,true,true];
    var listings = [

		  [
		new google.maps.LatLng(43.330781, -96.048532),
		new google.maps.LatLng(43.323757, -96.048725),
		new google.maps.LatLng(43.323820, -96.040270),
		new google.maps.LatLng(43.324616, -96.040270),
		new google.maps.LatLng(43.324678, -96.038983),
		new google.maps.LatLng(43.329080, -96.038876),
		new google.maps.LatLng(43.329080, -96.041257),
		new google.maps.LatLng(43.330360, -96.041236),
		new google.maps.LatLng(43.330422, -96.038790),
		new google.maps.LatLng(43.330828, -96.038790),
		new google.maps.LatLng(43.330813, -96.048424)
		  ]
		  ,
		   [
		new google.maps.LatLng(43.393697, -95.514815),
		new google.maps.LatLng(43.387788, -95.514944),
		new google.maps.LatLng(43.387834, -95.512197),
		new google.maps.LatLng(43.386758, -95.512390),
		new google.maps.LatLng(43.386758, -95.513291),
		new google.maps.LatLng(43.386540, -95.513291),
		new google.maps.LatLng(43.386415, -95.510416),
		new google.maps.LatLng(43.393619, -95.510051)
		   ],
		   [
		new google.maps.LatLng(43.393604, -95.509965),
		new google.maps.LatLng(43.386415, -95.510287),
		new google.maps.LatLng(43.386306, -95.505030),
		new google.maps.LatLng(43.393479, -95.504966)
		   ],
		   [
		new google.maps.LatLng(43.314000, -95.703599),
		new google.maps.LatLng(43.316404, -95.703578),
		new google.maps.LatLng(43.316295, -95.693836),
		new google.maps.LatLng(43.309191, -95.693901),
		new google.maps.LatLng(43.309269, -95.703707),
		new google.maps.LatLng(43.313266, -95.703664),
		new google.maps.LatLng(43.313297, -95.701797),
		new google.maps.LatLng(43.313094, -95.701282),
		new google.maps.LatLng(43.313173, -95.700617),
		new google.maps.LatLng(43.314593, -95.700552),
		new google.maps.LatLng(43.314656, -95.701132),
		new google.maps.LatLng(43.314718, -95.701754),
		new google.maps.LatLng(43.314687, -95.702698),
		new google.maps.LatLng(43.314484, -95.702827),
		new google.maps.LatLng(43.314000, -95.702763)
		   ],
		   [
		new google.maps.LatLng(43.334168, -95.662980),
		new google.maps.LatLng(43.334777, -95.662916),
		new google.maps.LatLng(43.334808, -95.653131),
		new google.maps.LatLng(43.331374, -95.653217),
		new google.maps.LatLng(43.331359, -95.663023),
		new google.maps.LatLng(43.333450, -95.662959),
		new google.maps.LatLng(43.333419, -95.661049),
		new google.maps.LatLng(43.334075, -95.661049)
		   ],
		   [
		new google.maps.LatLng(43.410909, -95.642960),
		new google.maps.LatLng(43.403832, -95.642853),
		new google.maps.LatLng(43.403847, -95.633197),
		new google.maps.LatLng(43.409319, -95.633261),
		new google.maps.LatLng(43.410862, -95.636008)
		   ]
		];

		for (var i = 0; i < listings.length; i++) {
			if (isRed[i]) {
				var theField = new google.maps.Polygon({
			        paths: listings[i],
			        strokeColor: RED,
			        strokeOpacity: 0.8,
			        strokeWeight: 2,
			        fillColor: RED,
			        fillOpacity: 0.35,
		        title: 'hello'
			    });

			    var myLatLng = listings[i][0];
			    var image = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png';
			    var marker = new google.maps.Marker({
			        position: myLatLng,
			        map: map, //global variable 'map' from opening function
			        icon: image,
			        title: 'Acres:' +(1000 + i * 100 )
			    });

			    theField.setMap(map);
			} else {
				var theField = new google.maps.Polygon({
			        paths: listings[i],
			        strokeColor: YELLOW,
			        strokeOpacity: 0.8,
			        strokeWeight: 2,
			        fillColor: YELLOW,
			        fillOpacity: 0.35,
			        title: 'hello'
			    });

			    var myLatLng = listings[i][0];
			    var image = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png';
			    var marker = new google.maps.Marker({
			        position: myLatLng,
			        map: map, //global variable 'map' from opening function
			        icon: image,
			        title: 'Acres:' +(1000 + i * 100 )
			    });

			    theField.setMap(map);
			}
		    
		}


			var arr= [2] ;
}