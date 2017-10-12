var page = $('html, body');
var body = $('body');
var windowWidth = $(window).width();

$(document).ready(function() {
	$(window).resize(function() {
		if ($(window).width() != windowWidth) {
			windowWidth = $(window).width();
		}
	});
});


var searchIcon = $(".o-nav__search");

var myBusinessDesktop = $(".o-nav__list--desktop__link--1st");
var myBusinessDesktop_ddMenu = $(".o-nav__list--desktop__dd-menu--1st");
var myVanDesktop = $(".o-nav__list--desktop__link--2nd");
var myVanDesktop_ddMenu = $(".o-nav__list--desktop__dd-menu--2nd");
var ddMenu = $(".o-nav__list--desktop__dd-menu");

var menuBar = $(".o-nav__bar");
var closeBar = $(".o-nav__bar--close");
var navMenuTblMob = $(".o-nav__list--tbl-mob");
var myBusinessTblMob = $(".o-nav__list--tbl-mob__link--1st");
var myBusinessTblMob_submenu = $(".o-nav__list--tbl-mob__submenu--1st");
var myVanTblMob = $(".o-nav__list--tbl-mob__link--2nd");
var myVanTblMob_submenu = $(".o-nav__list--tbl-mob__submenu--2nd");
var caretDown_1st = $(".o-nav__list--tbl-mob__link--1st .o-nav__list--tbl-mob__caret--down");
var caretUp_1st = $(".o-nav__list--tbl-mob__link--1st .o-nav__list--tbl-mob__caret--up");
var caretDown_2nd = $(".o-nav__list--tbl-mob__link--2nd .o-nav__list--tbl-mob__caret--down");
var caretUp_2nd = $(".o-nav__list--tbl-mob__link--2nd .o-nav__list--tbl-mob__caret--up");