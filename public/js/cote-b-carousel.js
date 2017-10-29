$(document).ready(function(){

	carouselCoteb.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	cotebArrowLeft.on('click', function() {
	    carouselCoteb.slick('slickPrev');
	});

	cotebArrowRight.on('click', function() {
	    carouselCoteb.slick('slickNext');
	});

});