var page = $('html, body');
var windowWidth = $(window).width();

$(document).ready(function() {
	$(window).resize(function() {
		if ($(window).width() != windowWidth) {
			windowWidth = $(window).width();
		}
	});
});