$(document).ready(function(){

	carouselFoire.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	foireArrowLeft.on('click', function() {
	    carouselFoire.slick('slickPrev');
	});

	foireArrowRight.on('click', function() {
	    carouselFoire.slick('slickNext');
	});

});