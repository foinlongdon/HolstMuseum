//Highlight selected Nav Tab
$(document).on( "pagecontainerchange", function() {
    var current = $( ".ui-page-active" ).prop("id");   
    // Remove active class from nav buttons
    $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    // Add active class to current nav button
    $( "[data-role='navbar'] a" ).each(function() {
        var href = $( this ).prop("href");
        if ( href.indexOf(current, href.length - current.length) !== -1 ) {
            $( this ).addClass( "ui-btn-active" );
        }
    });
});

$(document).ready(function(){

	// Swipe Event
	$( document ).on( "swipeleft swiperight", "#list li", function( event ) {
		alert("Swiped");
	});

	// delete clicked
	$( ".delete" ).on( "click", function() {
		alert("You cannot delete this!");
	});
	
	//Add Nav Bar
	//create an output variable, I used an array
	var output = ['<div data-id="mainTab" data-role="navbar"><ul id="footer_tabs">'];

	//push items onto the output array
	output.push('<li><a <a href="#myProfile" data-transition="flow" data-icon="home">Home</a></li>');
	output.push('<li><a href="#myContact" data-transition="flow" data-icon="user">Contact</a></li>');
	output.push('<li><a href="#myTour" data-transition="flow" data-icon="location">DigiTour</a></li>');
	output.push('<li><a href="#myMap" data-transition="flow" data-icon="navigation">Map</a></li>');
	output.push('<li><a href="#mySocial" data-transition="flow" data-icon="comment">Social</a></li>');
	output.push('<li><a href="#myAbout" data-transition="flow" data-icon="info">About</a></li>');
	output.push('</ul></div>');
	$('[data-role="footer"]').html(output.join('')).trigger('create');
	
	
});


$(window).on('load', function () {
	if(localStorage.getItem("collapsPersoInfo") == "expanded"){
		$("#collapsPersoInfo").collapsible("expand");
	} else {
		$("#collapsPersoInfo").collapsible("collapse");
	}
	
	$("#collapsPersoInfo").collapsible({collapse: function(event, ui) {
		localStorage.setItem("collapsPersoInfo", "collapsed");
	}});
	
	$("#collapsPersoInfo").collapsible({expand: function(event, ui) {
		localStorage.setItem("collapsPersoInfo", "expanded");
	}});
	
});


$(window).on('load', function () {
	if(localStorage.getItem("collapsHolstInfo") == "expanded"){
		$("#collapsHolstInfo").collapsible("expand");
	} else {
		$("#collapsHolstInfo").collapsible("collapse");
	}
	
	$("#collapsHolstInfo").collapsible({collapse: function(event, ui) {
		localStorage.setItem("collapsHolstInfo", "collapsed");
	}});
	
	$("#collapsHolstInfo").collapsible({expand: function(event, ui) {
		localStorage.setItem("collapsHolstInfo", "expanded");
	}});
	
});

$(window).on('load', function () {
	if(localStorage.getItem("collapsRoomInfo") == "expanded"){
		$("#collapsRoomInfo").collapsible("expand");
	} else {
		$("#collapsRoomInfo").collapsible("collapse");
	}
	
	$("#collapsRoomInfo").collapsible({collapse: function(event, ui) {
		localStorage.setItem("collapsRoomInfo", "collapsed");
	}});
	
	$("#collapsRoomInfo").collapsible({expand: function(event, ui) {
		localStorage.setItem("collapsRoomInfo", "expanded");
	}});
	
});


//Show Google Map
function showMap()
{
	map = new google.maps.Map( document.getElementById( 'map' ), { 
		zoom: 13, 
		center: { lat: 51.904111, lng: -2.0707137 }
	} );
	
	var currPos;
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition (function (position) {
			
			currPos = {
				lat : position.coords.latitude,
				lng : position.coords.longitude
			};
			
			map.setCenter(currPos);
			
			createMarkerInCurrPos();
			createMarkerInRotundaTerrace();
			createMarkerInTheRotunda();
			createMarkerInQueensCircus();
			createMarkerInStatue();
			createMarkerInTownHall();
			createMarkerInVittoriaWalk();
			createMarkerInMontpellierVillas();
			createMarkerInBathRoad();
			createMarkerInCambray();
			createMarkerInBank();
			createMarkerInMandS();
			createMarkerInChapel();
			createMarkerInChurch();
			
			createMarkerInMuseum();
			
		}, function() {
			console.log("Your browser does not support geolocation")
		});
		
	} else {
		console.log("Your Browser does not support geolocation")
	}
	
	function createMarkerInCurrPos() {
		var marker = new google.maps.Marker({
			position: currPos,
			label: "You"
			
		});
		
		marker.setMap(map);
	}
	
	function createMarkerInRotundaTerrace() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8956106, lng: -2.0827875},
			label: "1"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInTheRotunda() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8948782, lng: -2.0832418},
			label: "2"
			
		});
		
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
		function createMarkerInQueensCircus() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8964725, lng: -2.0831023},
			label: "3"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
		function createMarkerInStatue() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8969936, lng: -2.0788496},
			label: "4"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
		function createMarkerInTownHall() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8972992, lng: -2.0774473},
			label: "5"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInVittoriaWalk() {
		var marker = new google.maps.Marker({
			position: {lat: 51.895816, lng: -2.076496},
			label: "6"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInMontpellierVillas() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8928203, lng: -2.0788802},
			label: "7"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInBathRoad() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8970324, lng: -2.0736459},
			label: "8"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInCambray() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8980346, lng: -2.0745812},
			label: "9"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInBank() {
		var marker = new google.maps.Marker({
			position: {lat: 51.8997678, lng: -2.0731186},
			label: "10"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInMandS() {
		var marker = new google.maps.Marker({
			position: {lat: 51.900624, lng: -2.0737688},
			label: "11"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInChapel() {
		var marker = new google.maps.Marker({
			position: {lat: 51.902472, lng: -2.078556},
			label: "12"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInChurch() {
		var marker = new google.maps.Marker({
			position: {lat: 51.902250, lng: -2.064306},
			label: "13"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function createMarkerInMuseum() {
		var marker = new google.maps.Marker({
			position: {lat: 51.904111, lng: -2.0707137},
			label: "Holst Museum"
			
		});
		
		marker.setMap(map);
		addMarkerEvListener (marker);
	}
	
	function addMarkerEvListener (marker) {
		
		directionsService = new google.maps.DirectionsService;
		directionsDisplay = new google.maps.DirectionsRenderer ({
			map: map
		});
		
		marker.addListener('click', function () {
			calculateAndDisplayRoute(directionsService, directionsDisplay, currPos, marker.getPosition());
			
			
		});
	}
	
	function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB){
		directionsService.route (
			{
				
				origin: pointA,
				destination: pointB,
				avoidTolls: true,
				avoidHighways: false,
				travelMode: google.maps.TravelMode.WALKING
				
			},
			function (response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);
				} else{
					console.log("Directions request failed due to " + status);
				}
			}
		);
		
	}
	
}
