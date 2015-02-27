// nav scroll animation fadein/fadeout
$(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 10) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }

});

// page load animations and scroll animation triggers
$(document).ready(function(){
	$('#hero-header').animate({'opacity':'1', 'margin-top':'150px'}, 700);

	setTimeout(function() {
      $('.test-go-moment-container').animate({'opacity':'1', 'margin-top':'65px'}, 500);
	}, 1700);

  $('.sell-point-container').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });
});

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

// form data capture for first modal dropdown
function prepInfo1() {
	var name = document.getElementById('name1').value;
	var email = document.getElementById('email1').value;
	var emailObj = 	{ guest_name: name,
					  guest_email: email		
					}
	sendEmail(emailObj);
}

// form data capture for second modal dropdown
function prepInfo2() {
	var name = document.getElementById('name2').value;
	var email = document.getElementById('email2').value;
	var emailObj = 	{ guest_name: name,
					  guest_email: email		
					}
	sendEmail(emailObj);
}

// jQuery AJAX POST form data to mailer
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

function testGo() {
	var guestNumber = document.getElementById('test-go-moment-input').value;
	$.ajax({
		method: 'POST',
		url: 'http://rev1.gomoment.com/app/guests',
		data: "guest[mobile_number]=" + guestNumber + "&guest[name]=homepage&visit[hotel_id]=100",
		success: function() {
			console.log('success');
      document.getElementById('test-go-moment-input').value="Thank You!"
		},
		failure: function() {
			console.log('fail');
		}
	});
}


















