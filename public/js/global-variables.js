/*------------------------------------------
				> GLOBAL <						
------------------------------------------*/

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


/*------------------------------------------
				> SEARCH <						
------------------------------------------*/

var searchForm = $(".o-cmp-search-form");
var searchIcon = $(".o-nav__search");
var closeSearchIcon = $(".o-form__close");


/*------------------------------------------
				> DESKTOP MENU <						
------------------------------------------*/

var myBusinessDesktop = $(".o-nav__list--desktop__link--1st");
var myBusinessDesktop_ddMenu = $(".o-nav__list--desktop__dd-menu--1st");
var myVanDesktop = $(".o-nav__list--desktop__link--2nd");
var myVanDesktop_ddMenu = $(".o-nav__list--desktop__dd-menu--2nd");
var ddMenu = $(".o-nav__list--desktop__dd-menu");


/*------------------------------------------
				> MOBILE MENU <						
------------------------------------------*/

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


/*------------------------------------------
		> LES PLUS LUS CAROUSEL <						
------------------------------------------*/

var carouselLpl = $('.o-media__block-lpl-carousel');
var lplArrowLeft = $('.o-media__block-arrow--lpl__left');
var lplArrowRight = $('.o-media__block-arrow--lpl__right');

/*------------------------------------------
			> HAEADER CAROUSEL <						
------------------------------------------*/

var carouselHeader = $('.o-media__header-carousel');
var headerArrowLeft = $('.o-media__block-arrow-left');
var headerArrowRight = $('.o-media__block-arrow-right');


/*------------------------------------------
		> FOIRE AUX QUESTIONS CAROUSEL <						
------------------------------------------*/

var carouselFoire = $('.m-obj-media__foire-carousel');
var foireArrowLeft = $('.m-cmp-foire__caret--left');
var foireArrowRight = $('.m-cmp-foire__caret--right');


/*------------------------------------------
		> COTE BUSINESS CAROUSEL <						
------------------------------------------*/

var carouselCoteb = $('.m-media__block-cote-b-carousel');
var cotebArrowLeft = $('.m-cmp-cote-b__caret--left');
var cotebArrowRight = $('.m-cmp-cote-b__caret--right');

/*------------------------------------------
			> RENAULT-QA CAROUSEL <						
------------------------------------------*/

var carouselRenaultQa = $('.o-media__block-renault-qa-carousel');
var renaultQaArrowLeft = $('.o-cmp-renault-qa__caret--left');
var renaultQaArrowRight = $('.o-cmp-renault-qa__caret--right');


/*------------------------------------------
		> HAEADER ARTICLE CAROUSEL <						
------------------------------------------*/

var carouselArticleHeader = $('.o-media__header-article-carousel');
var carouselArticleHeaderSmall = $('.o-media__header-article-carousel--small');
var headerArticleArrowLeft = $('.o-media__block-arrow-left--article');
var headerArticleArrowRight = $('.o-media__block-arrow-right--article');


/*------------------------------------------
		> DIAPORAMA MODULE CAROUSEL <						
------------------------------------------*/

var carouselD_Module = $('.o-media__block-module-carousel');
var carouselD_ModuleSmall = $('.o-media__block-module-carousel--small');
var d_ModuleArrowLeft = $('.o-media__block-module__arrow--left');
var d_ModuleArrowRight = $('.o-media__block-module__arrow--right');


/*------------------------------------------
			> ENRICHI CAROUSEL <						
------------------------------------------*/

var carouselEnrichi = $('.o-media__enrichi-carousel');
var carouselEnrichiSmall = $('.o-media__enrichi-carousel--small');
var enrichiArrowLeft = $('.o-media__block-arrow-left--enrichi');
var enrichiArrowRight = $('.o-media__block-arrow-right--enrichi');


/*------------------------------------------
				> FAQ READER <						
------------------------------------------*/

var faqReaderSection = $('.o-cmp-faq-reader__section');