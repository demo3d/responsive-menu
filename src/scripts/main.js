;(function($){
	'use strict';



	$('.ba-navigation__toggle').on('click', function() {
		if ($('.ba-navigation__list').hasClass('open')) {
			$('.ba-navigation__list').removeClass('open');
			$('.ba-navigation__list').css('height', 0);
		} else {
			$('.ba-navigation__list').addClass('open');
			$('.ba-navigation__list').css('height', $('.ba-navigation__item').outerHeight() * $('.ba-navigation__item').length);
		}
	});

	$('.ba-offcanvas-toggle').on('click', function() {
		$('body').toggleClass('offcanvas-open');
	});

})(jQuery);