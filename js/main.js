(function(){
	var hamburger = $('.hamburger');
	var nav = $('nav');
	var smallQuery = Modernizr.mq('(max-width: 600px)');
	
	if(smallQuery){
		console.log('small');
		$('.hamburger').show();
		$('nav').addClass('responsive_nav');
		$('.nav_social').css('display','flex');
		$('.header__content .text__divider').hide();
	}
	hamburger.on('click',()=>{
		$('.responsive_nav').slideToggle();
	});
	// SCROLL FUNCTION
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
})();		