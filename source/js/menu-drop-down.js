$(document).ready(function() {

	myBusinessDesktop.click(function(){
    	myBusinessDesktop_ddMenu.slideToggle(500);
    });

    myVanDesktop.click(function(){
    	myVanDesktop_ddMenu.slideToggle(500);
    });

    ddMenu.click(function(){
		$(".o-nav__list--desktop__dd-menu:visible").slideUp(500);
	});

});