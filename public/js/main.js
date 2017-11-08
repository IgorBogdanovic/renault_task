/*------------------------------------------
			> MAIN BEGINING <						
------------------------------------------*/

$(document).ready(function() {


/*------------------------------------------
				> ARROWS <						
------------------------------------------*/

	if (windowWidth > 1024) {

	    $(".a-cmp-arrow").hover(function(){
		    $(this).attr("src", function(index, attr){
		        return attr.replace(".png", "-hover.png");
		    });
		}, function(){
		    $(this).attr("src", function(index, attr){
		        return attr.replace("-hover.png", ".png");
		    });
		});

	};

/*------------------------------------------
			> COTE-B CAROUSEL <						
------------------------------------------*/

	carouselCoteb.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	cotebArrowLeft.on('click', function() {
	    carouselCoteb.slick('slickPrev');
	});

	cotebArrowRight.on('click', function() {
	    carouselCoteb.slick('slickNext');
	});

/*------------------------------------------
		> DIAPORAMA-MODULE CAROUSEL <						
------------------------------------------*/

	carouselD_Module.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselD_ModuleSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselD_ModuleSmall.slick({
		slidesToShow: 6,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
  		focusOnSelect: true,
  		asNavFor: carouselD_Module,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: "unslick"
		    }
	  	]
	});

	d_ModuleArrowLeft.on('click', function() {
	    carouselD_Module.slick('slickPrev');
	});

	d_ModuleArrowRight.on('click', function() {
	    carouselD_Module.slick('slickNext');
	});

/*------------------------------------------
			> DIAPORAMA SLIDESHOW <						
------------------------------------------*/

	articleDiaporamaSlideshow.click(function() {

		diaporamaModule.addClass('t-cmp-article-diaporama-module--visible');
		articleDiaporamaMain.addClass('t-cmp-article-main--blur');

	});

	diaporamaModuleClose.click(function() {

		diaporamaModule.removeClass('t-cmp-article-diaporama-module--visible');
		articleDiaporamaMain.removeClass('t-cmp-article-main--blur');

	});

/*------------------------------------------
			> ENRICHI CAROUSEL <						
------------------------------------------*/

	carouselEnrichi.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselEnrichiSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselEnrichiSmall.slick({
		slidesToShow: 5,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
	  	centerMode: true,
  		focusOnSelect: true,
  		asNavFor: carouselEnrichi,
  		responsive: [
		    {
				breakpoint: 640,
				settings: "unslick"
		    }
	  	]
	});

	enrichiArrowLeft.on('click', function() {
	    carouselEnrichi.slick('slickPrev');
	});

	enrichiArrowRight.on('click', function() {
	    carouselEnrichi.slick('slickNext');
	});

/*------------------------------------------
			> FAQ READER <						
------------------------------------------*/

	faqReaderSection.click(function() {

		$(this).children('.o-cmp-faq-reader__section__answer').slideToggle(300);
		$(this).find('.a-cmp-drop-down-circle').toggleClass('a-cmp-drop-down-circle--active');

	});

/*------------------------------------------
			> FOIRE CAROUSEL <						
------------------------------------------*/

	carouselFoire.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	foireArrowLeft.on('click', function() {
	    carouselFoire.slick('slickPrev');
	});

	foireArrowRight.on('click', function() {
	    carouselFoire.slick('slickNext');
	});

/*------------------------------------------
		> HEADER ARTICLE CAROUSEL <						
------------------------------------------*/

	carouselArticleHeader.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
  		asNavFor: carouselArticleHeaderSmall,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: {
					fade: false
				}
		    }
	  	]
	});

	carouselArticleHeaderSmall.slick({
		slidesToShow: 5,
	  	slidesToScroll: 1,
	  	variableWidth: true,
	  	arrows: false,
	  	centerMode: true,
  		focusOnSelect: true,
  		asNavFor: carouselArticleHeader,
  		responsive: [
		    {
				breakpoint: 1024,
				settings: "unslick"
		    }
	  	]
	});

	headerArticleArrowLeft.on('click', function() {
	    carouselArticleHeader.slick('slickPrev');
	});

	headerArticleArrowRight.on('click', function() {
	    carouselArticleHeader.slick('slickNext');
	});

/*------------------------------------------
			> HEADER CAROUSEL <						
------------------------------------------*/

	carouselHeader.slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	  	arrows: false
	});

	headerArrowLeft.on('click', function() {
	    carouselHeader.slick('slickPrev');
	});

	headerArrowRight.on('click', function() {
	    carouselHeader.slick('slickNext');
	});

	headerArrowRight.mouseenter(function(){
        
        carouselHeader.slick('slickPause');
		$(this).parent().find('.slick-slide').css('transform', 'translate(-8%)');

    });

    headerArrowRight.mouseleave(function(){
        
        carouselHeader.slick('slickPlay');
		$(this).parent().find('.slick-slide').css('transform', 'translate(0px)');

    });

    headerArrowLeft.mouseenter(function(){
        
        carouselHeader.slick('slickPause');
		$(this).parent().find('.slick-slide').css('transform', 'translate(8%)');

    });

    headerArrowLeft.mouseleave(function(){
        
        carouselHeader.slick('slickPlay');
		$(this).parent().find('.slick-slide').css('transform', 'translate(0px)');

    });

/*------------------------------------------
			> LPL CAROUSEL <						
------------------------------------------*/

	carouselLpl.slick({
		slidesToShow: 4,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	responsive: [
		    {
				breakpoint: 640,
				settings: "unslick"
		    }
	  	]
	});

	lplArrowLeft.on('click', function() {
	    carouselLpl.slick('slickPrev');
	});

	lplArrowRight.on('click', function() {
	    carouselLpl.slick('slickNext');
	});

/*------------------------------------------
			> MENU DROP-DOWN <						
------------------------------------------*/

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

/*------------------------------------------
		> MENU TABLET & MOBILE <						
------------------------------------------*/

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

/*------------------------------------------
				> PSY TEST <						
------------------------------------------*/

	psyTestStartButton.click(function(e) {

		e.stopPropagation();
		psyTestIntro.hide();
		psyTestArticle.show();

	});

	psyTestButtonMob.click(function(e) {

		e.stopPropagation();
		psyTestArticle.hide();
		psyTestResultats.show();

	});

	psyTestButton.click(function(e) {

		e.stopPropagation();
		psyTestArticle.hide();
		psyTestResultats.show();
		$('.o-media__block-lpl-carousel').slick('setPosition');

	});

	psyTestRestartButton.click(function(e) {

		e.stopPropagation();
		psyTestResultats.hide();
		psyTestIntro.show();

		psyTestCloseButton.parent().hide();
		psyTestRadioButton.removeClass('checked');
		psyTestRadioButton.removeClass('not-checked');
		$('.m-cmp-test-radio-button__input').prop('checked', false);
		$('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(0%)');
		$('.o-cmp-psytest-block-test__question').css('opacity', '1');
		$('.o-cmp-psytest-block-test__question--no-img').css('opacity', '1');
		$('.m-cmp-test-radio-button').css({'pointer-events': 'auto', 'touch-action': 'auto'});
		$('.o-cmp-psytest-block-test__confirm.shown').removeClass('shown');
		$('.o-cmp-psytest-block-test__confirm.hidden').removeClass('hidden');
		psyTestButton.removeClass('a-cmp-button-psy--confirmed');

	});

	psyTestRadioButton.click(function(e) {

		e.stopPropagation();
		if (windowWidth < 1025) {

			$(this).addClass('checked');
			$(this).children().prop('checked', true);

			$(this).parents('.o-cmp-psytest-block-test').children().show(100);
			$(this).parents('.o-cmp-psytest-block-test').children().addClass('shown');
			psyTestConfirmPopUp.not('.shown').addClass('hidden');

			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(100%)');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '0.5');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.m-cmp-test-radio-button').css({'pointer-events': 'none', 'touch-action': 'none'});

		}

		if (windowWidth > 1024) {

			if (!$(this).hasClass('checked')) {

				$(this).addClass('checked');
				$(this).children().prop('checked', true);

				psyTestRadioButton.not('.checked').addClass('not-checked');

				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(100%)');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '0.5');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.m-cmp-test-radio-button').css({'pointer-events': 'none', 'touch-action': 'none'});

				psyTestButton.addClass('a-cmp-button-psy--confirmed');

			} else {

				$(this).removeClass('checked');
				$(this).children().prop('checked', false);

				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(0%)');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '1');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '1');
				$('.m-cmp-test-radio-button.not-checked').parents('.o-cmp-psytest-block-test').find('.m-cmp-test-radio-button').css({'pointer-events': 'auto', 'touch-action': 'auto'});

				psyTestRadioButton.not('.checked').removeClass('not-checked');
				psyTestButton.removeClass('a-cmp-button-psy--confirmed');

			}
		}

		return false;

	});

	psyTestCloseButton.click(function(e) {

		e.stopPropagation();
		$(this).parent().hide(100);
		$(this).parent().next().find('.m-cmp-test-radio-button').removeClass('checked');
		$(this).parent().next().find('.m-cmp-test-radio-button__input').prop('checked', false);
		$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(0%)');
		$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question').css('opacity', '1');
		$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '1');
		$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.m-cmp-test-radio-button').css({'pointer-events': 'auto', 'touch-action': 'auto'});
		$('.o-cmp-psytest-block-test__confirm.shown').removeClass('shown');
		$('.o-cmp-psytest-block-test__confirm.hidden').removeClass('hidden');

	});

	$(window).resize(function() {
		if (windowWidth > 1024) {
			psyTestConfirmPopUp.hide();

			if (psyTestRadioButton.hasClass('checked')) {
				psyTestButton.addClass('a-cmp-button-psy--confirmed');
			}

			if (psyTestRadioButton.hasClass('checked') && psyTestRadioButton.not('.checked')) {
				return;
			} else psyTestButton.removeClass('a-cmp-button-psy--confirmed');
		}
	});

	$(window).resize(function() {
		if (windowWidth < 1025) {
			$('.m-cmp-test-radio-button.checked').parents('.o-cmp-psytest-block-test').children().show(100);
		}
	});

/*------------------------------------------
			> RENAULT-QA CAROUSEL <						
------------------------------------------*/

	carouselRenaultQa.slick({
		fade: true,
	  	arrows: false,
	  	draggable: false,
	  	swipe: false
	});

	renaultQaArrowLeft.on('click', function() {
	    carouselRenaultQa.slick('slickPrev');
	});

	renaultQaArrowRight.on('click', function() {
	    carouselRenaultQa.slick('slickNext');
	});

/*------------------------------------------
				> SEARCH <						
------------------------------------------*/

	searchIcon.click(function() {

		searchForm.show(300);

	});

	closeSearchIcon.click(function() {

		searchForm.hide(300);

	});

/*------------------------------------------
			> MAIN END <						
------------------------------------------*/

});