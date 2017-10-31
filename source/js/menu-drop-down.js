$(document).ready(function() {

	myBusinessDesktop.click(function(){

		if (myBusinessDesktop_ddMenu.is(':visible')) {
			myBusinessDesktop_ddMenu.slideUp(300);
			return;
		}

		if (myVanDesktop_ddMenu.is(':visible')) {
			myVanDesktop_ddMenu.slideUp(0);
		}

		myBusinessDesktop_ddMenu.slideDown(300);

    });

    myVanDesktop.click(function(){

    	if (myVanDesktop_ddMenu.is(':visible')) {
			myVanDesktop_ddMenu.slideUp(300);
			return;
		}

		if (myBusinessDesktop_ddMenu.is(':visible')) {
			myBusinessDesktop_ddMenu.slideUp(0);
		}

    	myVanDesktop_ddMenu.slideDown(300);

    });

    ddMenu.click(function(){

    	if (ddMenu.is(':visible')) {
			ddMenu.slideUp(300);
		}
		
	});

});