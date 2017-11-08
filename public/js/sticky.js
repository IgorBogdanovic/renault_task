/*------------------------------------------
		> STICKY SLIDER <						
------------------------------------------*/

/* for some reason it doesn't work when within main.js; some kind of clash with other sticky function */

$(document).ready(function() {

	var stickySlider = $('.o-media__block-article-slider');
	var stickySliderTop = stickySlider.offset().top;
	var stickySliderHeight = $('.o-media__block__slider__background--vertical').outerHeight();
	var articleBottom = $('#article-block-2').offset().top + $('#article-block-2').outerHeight();
	var navHeight = $('.o-nav').outerHeight();

	var sticky = function(){
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

	if (windowWidth > 1024) {
		sticky();
		$(window).scroll(function() {
			sticky();
		});
	}

});