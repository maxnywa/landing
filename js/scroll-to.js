;(function($) {
	$(window).on('load', function(){
		// Scroll to element
		const scrollBtn = $('[data-scroll]');

		function onScroll(e) {
		    e.preventDefault();

		    // Close slick nav
		    $('.header-nav').slicknav('close');
		    let target = $(this).attr('data-scroll');
		    let dist = $(target).offset().top;
		    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
		}

		scrollBtn.on('click', onScroll);
	})
})(jQuery);
