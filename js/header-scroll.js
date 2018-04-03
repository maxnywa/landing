;(function($) {
	// Header on scroll
	const header = $('.header');

	const windowHeight = $(window).height();
	const headerHeight = header.outerHeight();

	function onScroll(e) {
	    let pos = $(window).scrollTop();

	    if (pos > headerHeight + 100) {
	        header.css({
	            'position': 'fixed',
	            'top' : `-${headerHeight+20}px`,
	            'background': '#2d2d2d'
	        });
	    }
	    if (pos > windowHeight) {
	        header.css({
	            'top' : '0',
	            'transition' : 'top .3s ease-out'
	        });
	    }

	    if (pos < headerHeight + 100) {
	        header.css({
	            'position': 'absolute',
	            'top' : '0',
	            'background': 'transparent',
	            'transition' : 'none'
	        });
	    }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
