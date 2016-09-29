/* global $ */
/* global google */

// Avoid `console` errors in browsers that lack a console.
"use strict";

$(window).load(function() {
	$(".loader").delay(500).fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
});

$(document).ready(function(){
	
	/* Google Maps Footer Map */
	var color = "#561C34", latitude = 6.2115904, longitude = -75.5720584;
	
	function wpgmappity_maps_loaded() {
		var styles = [
			{
				"featureType": "landscape",
				"stylers": [
					{"hue": "#000"},
					{"saturation": -100},
					{"lightness": 40},
					{"gamma": 1}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [
					{"hue": color},
					{"saturation": 100},
					{"lightness": 20},
					{"gamma": 1}
				]
			},
			{
				"featureType": "road.arterial",
				"stylers": [
					{"hue": color},
					{"saturation": 100},
					{"lightness": 20},
					{"gamma": 1}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [
					{"hue": color},
					{"saturation": 100},
					{"lightness": 50},
					{"gamma": 1}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{"hue": "#000"},
					{"saturation": -100},
					{"lightness": 15},
					{"gamma": 1}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{"hue": "#000"},
					{"saturation": -100},
					{"lightness": 25},
					{"gamma": 1}
				]
			}
		];		
		var options = {
			center 					: new google.maps.LatLng(latitude, longitude),
			mapTypeId				: google.maps.MapTypeId.ROADMAP,
			/*zoomControl			: false,*/
			mapTypeControl 	: false,
			scaleControl 		: false,
			streetViewControl: false,
			draggable				: $(window).width() < 796 ? false : true,
			scrollwheel			: false,
			panControl 			: false,
			zoom 						: 17,
			styles					: styles
		};
		
		var wpgmappitymap = new google.maps.Map(document.getElementById('wpgmappitymap'), options);
		var marker = new google.maps.Marker({
			position	: new google.maps.LatLng(latitude, longitude),
			map 			: wpgmappitymap,
			icon			: 'images/map/pointer.png'
		});
		google.maps.event.addListener(marker, 'click', function() {
			var infowindow = new google.maps.InfoWindow({ content: 'Restaurante La Matriarca' });
			infowindow.open(wpgmappitymap, marker);
		});
	}
	
	window.onload = function() {
		wpgmappity_maps_loaded();
	};
	
});