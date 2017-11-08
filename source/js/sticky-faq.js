/*------------------------------------------
		> STICKY SLIDER -- FAQ <						
------------------------------------------*/

/* for some reason it doesn't work when within main.js; some kind of clash with other sticky function */

$(document).ready(function() {

	var stickySlider = $('.o-media__block-article-slider');
	var stickySliderTop = stickySlider.offset().top;
	var stickySliderHeight = $('.o-media__block__slider__background--vertical').outerHeight();
	var articleBottomFaq = $('#article-faq-block-2').offset().top + $('#article-faq-block-2').outerHeight();
	var navHeight = $('.o-nav').outerHeight();

	var stickyFaq = function(){
	    var scrollTop = $(window).scrollTop();

	    if ((scrollTop + navHeight) > stickySliderTop) {
	    	stickySlider.removeClass('sticky-faq--end');
	        stickySlider.addClass('sticky-faq');
	    } else {
	        stickySlider.removeClass('sticky-faq');
	    }

	    if ((scrollTop + navHeight + stickySliderHeight) > articleBottomFaq) { 
	        stickySlider.removeClass('sticky-faq');
	        stickySlider.addClass('sticky-faq--end');
	    }

	};

	if (windowWidth > 1024) {
		stickyFaq();
		$(window).scroll(function() {
			stickyFaq();
		});
	}

});