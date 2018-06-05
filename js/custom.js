$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $navbar = $(".js-header");
		if(scrollDistance > 180){
			$navbar.removeClass("invisible");
		}
		else{
			$navbar.addClass("invisible");
		}
	})
})