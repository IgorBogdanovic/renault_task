$(document).ready(function(){

	carouselD_Module.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselD_ModuleSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselD_ModuleSmall.slick({
		slidesToShow: 6,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
  		focusOnSelect: true,
  		asNavFor: carouselD_Module,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: "unslick"
		    }
	  	]
	});

	d_ModuleArrowLeft.on('click', function() {
	    carouselD_Module.slick('slickPrev');
	});

	d_ModuleArrowRight.on('click', function() {
	    carouselD_Module.slick('slickNext');
	});

});