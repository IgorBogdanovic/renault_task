$(document).ready(function() {

	$(".o-nav__list--desktop__link--1st").click(function(){
    	$(".o-nav__list--desktop__dd-menu--1st").slideToggle(500);
    });

    $(".o-nav__list--desktop__link--2nd").click(function(){
    	$(".o-nav__list--desktop__dd-menu--2nd").slideToggle(500);
    });

    $(".o-nav__list--desktop__dd-menu").click(function(){
		$(".o-nav__list--desktop__dd-menu:visible").slideUp(500);
	});

});