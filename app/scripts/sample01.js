'use strict'; 

$(document).ready(function(){
	if ($(window).width() > 1023) { 
		$('.carousel').carousel({
			hAlign: 'center', 
			vAlign: 'center', 
			frontWidth:350, 
			frontHeight:223, 
			carouselWidth:900,
			carouselHeight:330,
			directionNav:true,
			shadow:false, 
			buttonNav:'bullets', 
			autoplay:false, 
			reflection:false
		});
	}
	else {
		$('.carousel').carousel({
			hAlign: 'center', 
			vAlign: 'center', 
			frontWidth:150, 
			frontHeight:123, 
			carouselWidth:800,
			carouselHeight:230,
			directionNav:true,
			shadow:false, 
			buttonNav:'bullets', 
			autoplay:false, 
			reflection:false
		});
	}

});
