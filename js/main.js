jQuery(document).ready(function($){



	var navigation = function(){

		var $navigation = $('.fixed-enabled');
		var navigation_offset = $navigation.offset().top  + 10;
			
		$(window).resize(function(){
			$navigation.removeClass('fixed-nav');
			navigation_offset = $navigation.offset().top  + 10;
			navigation_scroll();
		});
		
		$(window).scroll(function(){
			navigation_scroll();
		});
			
		function navigation_scroll(){
			var scrollY = $(window).scrollTop();
				if(scrollY > navigation_offset){
					$navigation.addClass('fixed-nav');
				}else if(scrollY < navigation_offset){
					$navigation.removeClass('fixed-nav');
				}
		}

	};

	/* ============== SEARCH ============== */

	$('#search-trigger , .search-container .close').on('click', function(event) {
		$('.search-container').toggle();
		$('#s').focus();
		event.preventDefault();
	});
	
	
	
/* slider */
	//Homepage Slider
    var options = {
        nextButton: false,
        prevButton: false,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");	
	
	
	
	$("a[href='#bottom_arif']").click(function() {
	  $("html, body").animate({ scrollTop: $(document).height() }, 5000);
	  return false;
	});
	

	var owl = $("#adv_slider");
 		owl.owlCarousel({
			pagination : false ,
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]			
		});
		// Custom Navigation Events
		$(".next").click(function(){
		owl.trigger('owl.next');
		})
		$(".prev").click(function(){
		owl.trigger('owl.prev');
		})	

		
		
		/* back to top start */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 5000,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

/*end back to top */	
		
		// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});	
		
		
		
		
		
});