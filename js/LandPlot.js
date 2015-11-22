
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
	}

	function drawMorePoints() {
		  var listings = [

			[new google.maps.LatLng(43.330781, -96.048532), new google.maps.LatLng(43.323757, -96.048725), new google.maps.LatLng(43.323820, -96.040270), new google.maps.LatLng(43.324616, -96.040270), new google.maps.LatLng(43.324678, -96.038983), new google.maps.LatLng(43.329080, -96.038876), new google.maps.LatLng(43.329080, -96.041257), new google.maps.LatLng(43.330360, -96.041236), new google.maps.LatLng(43.330422, -96.038790), new google.maps.LatLng(43.330828, -96.038790), new google.maps.LatLng(43.330813, -96.048424)],
			[new google.maps.LatLng(42.997303, -95.661221), new google.maps.LatLng(42.996236, -95.661306), new google.maps.LatLng(42.995671, -95.661821), new google.maps.LatLng(42.992783, -95.661950), new google.maps.LatLng(42.992281, -95.662508), new google.maps.LatLng(42.991873, -95.662894), new google.maps.LatLng(42.991684, -95.663495), new google.maps.LatLng(42.990334, -95.663538), new google.maps.LatLng(42.990397, -95.659933), new google.maps.LatLng(42.990586, -95.658946), new google.maps.LatLng(42.991276, -95.658088), new google.maps.LatLng(42.991684, -95.656586), new google.maps.LatLng(42.991904, -95.655341), new google.maps.LatLng(42.992281, -95.654569), new google.maps.LatLng(42.992218, -95.653539), new google.maps.LatLng(42.997334, -95.653582)],
			[new google.maps.LatLng(43.022125, -95.879788), new google.maps.LatLng(43.014783, -95.879788), new google.maps.LatLng(43.014846, -95.869875), new google.maps.LatLng(43.022063, -95.870004)],
			[new google.maps.LatLng(43.173589, -95.592041), new google.maps.LatLng(43.171304, -95.592020), new google.maps.LatLng(43.171226, -95.584724), new google.maps.LatLng(43.173558, -95.584810)],
			[new google.maps.LatLng(43.393697, -95.514815), new google.maps.LatLng(43.387788, -95.514944), new google.maps.LatLng(43.387834, -95.512197), new google.maps.LatLng(43.386758, -95.512390), new google.maps.LatLng(43.386758, -95.513291), new google.maps.LatLng(43.386540, -95.513291), new google.maps.LatLng(43.386415, -95.510416), new google.maps.LatLng(43.393619, -95.510051)],
			[new google.maps.LatLng(43.393604, -95.509965), new google.maps.LatLng(43.386415, -95.510287), new google.maps.LatLng(43.386306, -95.505030), new google.maps.LatLng(43.393479, -95.504966)],
			[new google.maps.LatLng(43.062539, -95.786405), new google.maps.LatLng(43.055437, -95.786426), new google.maps.LatLng(43.055390, -95.782714), new google.maps.LatLng(43.056283, -95.782714), new google.maps.LatLng(43.056283, -95.781577), new google.maps.LatLng(43.062507, -95.781662)],
			[new google.maps.LatLng(43.447436, -96.323211), new google.maps.LatLng(43.447389, -96.316946), new google.maps.LatLng(43.446329, -96.316731), new google.maps.LatLng(43.442606, -96.313105), new google.maps.LatLng(43.440363, -96.312933), new google.maps.LatLng(43.440394, -96.316323), new google.maps.LatLng(43.441235, -96.316345), new google.maps.LatLng(43.441469, -96.316710), new google.maps.LatLng(43.441547, -96.317568), new google.maps.LatLng(43.440300, -96.320014), new google.maps.LatLng(43.440269, -96.323254)],
			[new google.maps.LatLng(42.967289, -96.263237), new google.maps.LatLng(42.963897, -96.263194), new google.maps.LatLng(42.963709, -96.253366), new google.maps.LatLng(42.967320, -96.253324)],
			[new google.maps.LatLng(42.918391, -95.820136), new google.maps.LatLng(42.923843, -95.820050), new google.maps.LatLng(42.923922, -95.810330), new google.maps.LatLng(42.916756, -95.810459), new google.maps.LatLng(42.916694, -95.818527), new google.maps.LatLng(42.918155, -95.818570)],
			[new google.maps.LatLng(43.255330, -95.447416), new google.maps.LatLng(43.249173, -95.447459), new google.maps.LatLng(43.249141, -95.427847), new google.maps.LatLng(43.255268, -95.427847)],
			[new google.maps.LatLng(43.314000, -95.703599), new google.maps.LatLng(43.316404, -95.703578), new google.maps.LatLng(43.316295, -95.693836), new google.maps.LatLng(43.309191, -95.693901), new google.maps.LatLng(43.309269, -95.703707), new google.maps.LatLng(43.313266, -95.703664), new google.maps.LatLng(43.313297, -95.701797), new google.maps.LatLng(43.313094, -95.701282), new google.maps.LatLng(43.313173, -95.700617), new google.maps.LatLng(43.314593, -95.700552), new google.maps.LatLng(43.314656, -95.701132), new google.maps.LatLng(43.314718, -95.701754), new google.maps.LatLng(43.314687, -95.702698), new google.maps.LatLng(43.314484, -95.702827), new google.maps.LatLng(43.314000, -95.702763)],
			[new google.maps.LatLng(43.334168, -95.662980), new google.maps.LatLng(43.334777, -95.662916), new google.maps.LatLng(43.334808, -95.653131), new google.maps.LatLng(43.331374, -95.653217), new google.maps.LatLng(43.331359, -95.663023), new google.maps.LatLng(43.333450, -95.662959), new google.maps.LatLng(43.333419, -95.661049), new google.maps.LatLng(43.334075, -95.661049)],
			[new google.maps.LatLng(43.410909, -95.642960), new google.maps.LatLng(43.403832, -95.642853), new google.maps.LatLng(43.403847, -95.633197), new google.maps.LatLng(43.409319, -95.633261), new google.maps.LatLng(43.410862, -95.636008)],
			[new google.maps.LatLng(42.670919, -95.427461), new google.maps.LatLng(42.669562, -95.427461), new google.maps.LatLng(42.669689, -95.437117), new google.maps.LatLng(42.673096, -95.436945), new google.maps.LatLng(42.673002, -95.427375), new google.maps.LatLng(42.672371, -95.427461), new google.maps.LatLng(42.672434, -95.428576), new google.maps.LatLng(42.671203, -95.428705), new google.maps.LatLng(42.670951, -95.428233)],
			[new google.maps.LatLng(42.676693, -95.427289), new google.maps.LatLng(42.673160, -95.427461), new google.maps.LatLng(42.673191, -95.436988), new google.maps.LatLng(42.676788, -95.436902)],
			[new google.maps.LatLng(43.029333, -95.878447), new google.maps.LatLng(43.028259, -95.878415), new google.maps.LatLng(43.028228, -95.879745), new google.maps.LatLng(43.025765, -95.879778), new google.maps.LatLng(43.025773, -95.870047), new google.maps.LatLng(43.029412, -95.870047)],
			[new google.maps.LatLng(43.026079, -95.593908), new google.maps.LatLng(43.018988, -95.593908), new google.maps.LatLng(43.019066, -95.598736), new google.maps.LatLng(43.026079, -95.598843)],
			[new google.maps.LatLng(43.018862, -95.593951), new google.maps.LatLng(43.015332, -95.593843), new google.maps.LatLng(43.015128, -95.584145), new google.maps.LatLng(43.018706, -95.584123)]

		];

		for (var i = 0; i < listings.length; i++) {
			if (i % 2 == 0) {
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
	}

