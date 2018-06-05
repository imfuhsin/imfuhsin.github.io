$(document).ready(function(){

	// carousel
	$('.carousel').carousel({
 	 interval: false,
	})
	
	// fullpage
	$('#fullpage').fullpage({
		// anchors:['firstPage', 'secondPage', 'thirdPage']
		paddingTop: '123px',
		responsiveWidth: 768,
		responsiveHeight: 400,
		scrollingSpeed: 300,
	})

	// rellax
	var rellax = new Rellax('.rellax')
});