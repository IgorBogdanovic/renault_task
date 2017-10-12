$(document).ready(function() {

	// this code needs additional condition to work on tablet
	menuBar.click(function() {
		menuBar.toggle();
		closeBar.toggle();
		searchIcon.toggle();
        navMenuTblMob.animate({
            left: '0'
        }, 700);
    
        body.animate({
            left: '87.3%'
        }, 700);
    });
    
    closeBar.click(function() {
    	closeBar.toggle();
    	menuBar.toggle();
    	searchIcon.toggle();
        navMenuTblMob.animate({
            left: '-87.3%'
        }, 700);
    
        body.animate({
            left: '0'
        }, 700);
    });

	myBusinessTblMob.click(function(){
		caretDown_1st.toggle();
		caretUp_1st.toggle();
    	myBusinessTblMob_submenu.slideToggle(500);
    });

    myVanTblMob.click(function(){
    	caretDown_2nd.toggle();
		caretUp_2nd.toggle();
    	myVanTblMob_submenu.slideToggle(500);
    });

});