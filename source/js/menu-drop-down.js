$(document).ready(function() {

	myBusiness.click(function(){
    	myBusiness_ddMenu.slideToggle(500);
    });

    myVan.click(function(){
    	myVan_ddMenu.slideToggle(500);
    });

    ddMenu.click(function(){
		$(".o-nav__list--desktop__dd-menu:visible").slideUp(500);
	});

});