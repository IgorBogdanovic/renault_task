$(document).ready(function() {

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

		if (windowWidth > 1025) {

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
		if (windowWidth > 1025) {
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

});