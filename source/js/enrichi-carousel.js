$(document).ready(function(){

	carouselEnrichi.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselEnrichiSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselEnrichiSmall.slick({
		slidesToShow: 5,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
	  	centerMode: true,
  		focusOnSelect: true,
  		asNavFor: carouselEnrichi,
  		responsive: [
		    {
				breakpoint: 640,
				settings: "unslick"
		    }
	  	]
	});

	enrichiArrowLeft.on('click', function() {
	    carouselEnrichi.slick('slickPrev');
	});

	enrichiArrowRight.on('click', function() {
	    carouselEnrichi.slick('slickNext');
	});

});