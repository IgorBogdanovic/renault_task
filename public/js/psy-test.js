$(document).ready(function() {

	psyTestRadioButton.click(function() {

		if (windowWidth < 1025) {
			var psyTestBlock = $(this).parents('.o-cmp-psytest-block-test');
			psyTestBlock.children().show(100);

			if ($('.o-cmp-psytest-block-test').children().is(':hidden')) {
				$('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').css('opacity', '0.5'); //na img ide klasa sa filter grayscale
				$('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');
				$('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question--no-img').css('opacity', '0.5');
			}
		}

	});

	psyTestCloseButton.click(function() {

		$(this).parent().hide(100);
		$(this).parent().next().find('.m-cmp-test-radio-button__input').prop('checked', false);

		//$(this).parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__checkbox--img__img').hide(100);
		//$(this).parents('.o-cmp-psytest-block-test').find('.o-cmp-psytest-block-test__question').css('opacity', '0.5');

		/*if (psyTestRadioButtonInput.is(":checked")) {
			psyTestRadioButtonInput.prop('disabled', true);
		}*/

	});

});