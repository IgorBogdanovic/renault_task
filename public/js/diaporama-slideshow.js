$(document).ready(function() {

	articleDiaporamaSlideshow.click(function() {

		diaporamaModule.addClass('t-cmp-article-diaporama-module--visible');
		articleDiaporamaMain.addClass('t-cmp-article-main--blur');

	});

	diaporamaModuleClose.click(function() {

		diaporamaModule.removeClass('t-cmp-article-diaporama-module--visible');
		articleDiaporamaMain.removeClass('t-cmp-article-main--blur');

	});

});