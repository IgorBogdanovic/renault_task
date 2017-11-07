$(document).ready(function() {

	var stickySlider = $('.o-media__block-article-slider');
	var stickySliderTop = stickySlider.offset().top;
	var stickySliderHeight = $('.o-media__block__slider__background--vertical').outerHeight();
	var articleBottom = $('.o-media__block-article__2').offset().top + $('.o-media__block-article__2').outerHeight();
	var navHeight = $('.o-nav').outerHeight();

   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop();

	    if ((scrollTop + navHeight) > stickySliderTop) { 
	    	stickySlider.removeClass('sticky--end');
	        stickySlider.addClass('sticky');
	    } else {
	        stickySlider.removeClass('sticky');
	    }

	    if ((scrollTop + navHeight + stickySliderHeight) > articleBottom) { 
	        stickySlider.removeClass('sticky');
	        stickySlider.addClass('sticky--end');
	    }

	};

	if (windowWidth > 1025) {
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}
	
});