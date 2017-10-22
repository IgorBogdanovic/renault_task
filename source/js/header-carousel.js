$(document).ready(function(){

	carouselHeader.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	  	arrows: false
	});

	headerArrowLeft.on('click', function() {
	    carouselHeader.slick('slickPrev');
	});

	headerArrowRight.on('click', function() {
	    carouselHeader.slick('slickNext');
	});

});