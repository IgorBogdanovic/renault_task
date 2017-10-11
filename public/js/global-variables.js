var page = $('html, body');
var windowWidth = $(window).width();

var myBusiness = $(".o-nav__list--desktop__link--1st");
var myBusiness_ddMenu = $(".o-nav__list--desktop__dd-menu--1st");
var myVan = $(".o-nav__list--desktop__link--2nd");
var myVan_ddMenu = $(".o-nav__list--desktop__dd-menu--2nd");
var ddMenu = $(".o-nav__list--desktop__dd-menu");


$(document).ready(function() {
	$(window).resize(function() {
		if ($(window).width() != windowWidth) {
			windowWidth = $(window).width();
		}
	});
});