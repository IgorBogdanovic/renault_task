$(document).ready(function(){

	carouselLpl.slick({
		slidesToShow: 4,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	responsive: [
		    {
				breakpoint: 640,
				settings: "unslick"
		    }
	  	]
	});

	lplArrowLeft.on('click', function() {
	    carouselLpl.slick('slickPrev');
	});

	lplArrowRight.on('click', function() {
	    carouselLpl.slick('slickNext');
	});

});