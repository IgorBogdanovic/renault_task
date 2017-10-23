$(document).ready(function(){

	carouselArticleHeader.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselArticleHeaderSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselArticleHeaderSmall.slick({
		slidesToShow: 5,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
	  	centerMode: true,
  		focusOnSelect: true,
  		asNavFor: carouselArticleHeader,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: "unslick"
		    }
	  	]
	});

	headerArticleArrowLeft.on('click', function() {
	    carouselArticleHeader.slick('slickPrev');
	});

	headerArticleArrowRight.on('click', function() {
	    carouselArticleHeader.slick('slickNext');
	});

});