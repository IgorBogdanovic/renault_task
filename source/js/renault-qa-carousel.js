$(document).ready(function(){

	carouselRenaultQa.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	renaultQaArrowLeft.on('click', function() {
	    carouselRenaultQa.slick('slickPrev');
	});

	renaultQaArrowRight.on('click', function() {
	    carouselRenaultQa.slick('slickNext');
	});

});