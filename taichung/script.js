

/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	
	
  })(jQuery);




$(document).ready(function() {
	// Transition effect for navbar 
	$(window).scroll(function() {
	  // checks if window is scrolled more than 500px, adds/removes solid class
	  if($(this).scrollTop() > 250) { 
		  $('.navbar1').addClass('solid');
	  } else {
		  $('.navbar1').removeClass('solid');
	  }
	});
});