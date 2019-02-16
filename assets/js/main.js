jQuery(document).ready(function () {
/*preloder*/
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#loader-wrapper').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(200).css({'overflow-x':'hidden'});
})	
});

