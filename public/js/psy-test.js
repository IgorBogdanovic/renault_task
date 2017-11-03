$(document).ready(function() {

	psyTestRadioButton.click(function() {

		$(this).addClass('checked');

		if (windowWidth < 1025) {

			$(this).parents('.o-cmp-psytest-block-test').children().show(100);
			$(this).parents('.o-cmp-psytest-block-test').children().addClass('shown');
			psyTestConfirmPopUp.not('.shown').addClass('hidden');

			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(100%)');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '0.5');
			$('.o-cmp-psytest-block-test__confirm.hidden').parent().find('.m-cmp-test-radio-button').css({'pointer-events': 'none', 'touch-action': 'none'});

		}

		if (windowWidth > 1025) {

			if (psyTestRadioButton.not('.checked')) {
				psyTestRadioButton.parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(100%)');
				psyTestRadioButton.parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');
				psyTestRadioButton.parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '0.5');
				psyTestRadioButton.parents('.o-cmp-psytest-block-test').find('.m-cmp-test-radio-button').css({'pointer-events': 'none', 'touch-action': 'none'});
			}

			$(this).parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').css('filter', 'grayscale(0%)');
			$(this).parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '1');
			$(this).parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '1');
			$(this).parents('.o-cmp-psytest-block-test').find('.m-cmp-test-radio-button').css({'pointer-events': 'auto', 'touch-action': 'auto'});

			psyTestButton.addClass('a-cmp-button-psy--confirmed');

		}

	});

	psyTestCloseButton.click(function() {

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