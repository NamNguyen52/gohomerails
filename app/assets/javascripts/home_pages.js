$(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 10) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }

});

$(document).ready(function(){

	$('#hero-header').animate({'opacity':'1', 'margin-top':'150px'}, 700);

	setTimeout(function() {
      $('.test-go-moment-container').animate({'opacity':'1', 'margin-top':'65px'}, 500);
	}, 1700);
});

// $(".feature-container").hover(function(){

// 	$(this).children("div.feature-description").toggleClass("hovered");
// });

$(window).scroll(function(){

	if ($(this).scrollTop() > 600) {
		$('.iphone-image').animate({'opacity':'1', 'margin-left':'-50px'}, 500);
		$('.iphone-gomoment-image').animate({'opacity':'1', 'margin-left':'20px'}, 500);
		$('#sell-point-1').animate({'opacity':'1','margin-top':'-350px'}, 500);
	}
});

$(window).scroll(function(){

	if ($(this).scrollTop() > 1270) {
		$('.imac-image').animate({'opacity':'1','margin-left':'20px'}, 800);
		$('.imac-gomoment-image').animate({'opacity':'1','margin-left':'43px'}, 800);
		$('#sell-point-2').animate({'opacity':'1', 'margin-top':'-250px'}, 800);
	}
});




