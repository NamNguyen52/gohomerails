$('#demo-one').click(function(){
	$(this).removeClass('button');
	$(this).addClass('close-reveal-modal');
});

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

// $(window).scroll(function(){

// 	if ($(this).scrollTop() > 600) {
// 		$('.iphone-image').animate({'opacity':'1', 'margin-left':'-50px'}, 500);
// 		$('.iphone-gomoment-image').animate({'opacity':'1', 'margin-left':'20px'}, 500);
// 		$('#sell-point-1').animate({'opacity':'1','margin-top':'-350px'}, 500);
// 	}
// });

// $(window).scroll(function(){

// 	if ($(this).scrollTop() > 1270) {
// 		$('.imac-image').animate({'opacity':'1','margin-left':'20px'}, 800);
// 		$('.imac-gomoment-image').animate({'opacity':'1','margin-left':'43px'}, 800);
// 		$('#sell-point-2').animate({'opacity':'1', 'margin-top':'-250px'}, 800);
// 	}
// });

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 1000, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});

function prepInfo1() {
	var name = document.getElementById('name1').value;
	var email = document.getElementById('email1').value;
	var emailObj = 	{ guest_name: name,
					  guest_email: email		
					}
	sendEmail(emailObj);
}

function prepInfo2() {
	var name = document.getElementById('name2').value;
	var email = document.getElementById('email2').value;
	var emailObj = 	{ guest_name: name,
					  guest_email: email		
					}
	sendEmail(emailObj);
}

function sendEmail(emailObj) {
	$.ajax({
		type: 'POST',
		url: '/send_email',
		data: emailObj,
		success: function(json) {
			console.log('success');
		},
		failure: function() {
			console.log('failure');
		}
	});
}




















