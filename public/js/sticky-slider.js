$(document).ready(function() {

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

	if (windowWidth > 1024) {
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}
	
});