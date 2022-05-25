$(document).ready(function(){
	$('.banar_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:false,
	    nav:true,
	    navText:['<img src="assets/img/left_arrow.png" alt="">','<img src="assets/img/right_arrow.png" alt="">'],
	    items:1,
	})

	$('.testimonial_slider').owlCarousel({
	    loop:true,
	    margin:30,
	    dots:false,
	    nav:true,
	    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }
	})

});