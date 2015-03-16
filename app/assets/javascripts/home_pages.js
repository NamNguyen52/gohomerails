// nav scroll fadein/fadeout 
$(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 10) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }

});

// hero, product images, and product feature animations
$(document).ready(function(){
  $('#hero-header').animate({'opacity':'1', 'margin-top':'150px'}, 700);

  setTimeout(function() {
      $('.test-go-moment-container').animate({'opacity':'1', 'margin-top':'65px'}, 500);
  }, 1700);
});

$("#test-go-moment-submit").click(function(){

  if ($('#test-go-moment-input').val() != "") {

    setTimeout(function(){
      $('.test-confirmation-container').toggleClass('clicked');
    },200);
    $('.call-to-action').toggleClass('clicked');
    $('#test-go-moment').animate({'margin-left':'-400px'}, 200);

  } else {

    var inputBox = document.getElementById('test-go-moment-input');
    inputBox.placeholder = "Please enter cell number!";
    inputBox.style.borderColor = 'red';

  }

});

$("#email-submit-button").click(function(){

  if ($('#email-input').val() != "") {

    $('#email-input').animate({'margin-left':'-1000px'}, 200);
    $('#email-submit-button').animate({'margin-left':'-1200px'}, 200);
    $('#email-call-action').animate({'margin-left':'-1000px'}, 200);

    setTimeout(function(){
      $('.email-confirmation-container').toggleClass('clicked');
    }, 300);

  } else {

    var emailInput = document.getElementById('email-input');
    emailInput.placeholder = "Please enter email!";
    emailInput.style.borderColor = "red";

  }

});

$("#email-submit-button").keydown(function(){
  var key = e.which;
  if (key == 13 && $('#email-input').val() != "") {

    $('#email-input').animate({'margin-left':'-1000px'}, 200);
    $('#email-submit-button').animate({'margin-left':'-1200px'}, 200);
    $('#email-call-action').animate({'margin-left':'-1000px'}, 200);

    setTimeout(function(){
      $('.email-confirmation-container').toggleClass('clicked');
    }, 300);

  } else {

    var emailInput = document.getElementById('email-input');
    emailInput.placeholder = "Please enter email!";
    emailInput.style.borderColor = "red";

  }
});

$(".feature-container").hover(function(){

  $(this).children("div.feature-description").toggleClass("hovered");
});

function testGo() {
  var guestNumber = document.getElementById('test-go-moment-input').value;
  $.ajax({
    method: 'POST',
    url: 'http://revone-staging.herokuapp.com/app/guests',
    data: "guest[mobile_number]=" + guestNumber + "&guest[name]=test&visit[hotel_id]=2",
    success: function() {
      console.log('success');
      document.getElementById('test-go-moment-input').value="Thank You!"
    },
    failure: function() {
      console.log('fail');
    }
  });
}

 $(document).ready(function(){
  var cb = new Codebird;
    cb.setConsumerKey(
        "c24MYuRlBhQDtvtLeV29SIsg6", 
        "GHw4g6Jtoir3LFXXjexTReMZGfvGhIvQ7Wkr6OYaJao09pay5X"
      );
    cb.setToken(
      "46941458-cisCoyQUA7ZVjONfoXIJrphUAYSmVQtBlMtsbWlRt", 
      "4g7PmoBi7SIqM5bImGbyCK6qTwtYA6Q89r6qxCZ4EHN13"
      );

  var params = {
    screen_name: "GoMoment"
  };

  cb.__call(
    "statuses_userTimeline",
    params,
    function (reply) {
        console.log(reply);
        var tweetDiv1 = document.getElementById('recent-tweet1');
        var tweetDiv2 = document.getElementById('recent-tweet2');
        var tweetDiv3 = document.getElementById('recent-tweet3');
        var tweetDiv4 = document.getElementById('recent-tweet4');
        var tweetDiv5 = document.getElementById('recent-tweet5'); 
        tweetDiv1.innerHTML = reply[0].text;
        tweetDiv2.innerHTML = reply[1].text;
        tweetDiv3.innerHTML = reply[2].text;
        tweetDiv4.innerHTML = reply[3].text;
        tweetDiv5.innerHTML = reply[4].text;
    }
  );
});

// $('#myModal1').keydown(function(e){
//   var key = e.which;

//   if(key == 13 && $('#name1').val() != "" && $('#email1').val() != "") {
//     $('#modal-submit').submit();
//   } 
// });

// $('#myModal2').keydown(function(e){
//   var key = e.which;

//   if(key == 13 && $('#name2').val() != "" && $('#email2').val() != "") {
//     $('#myModal2').submit();
//   }
// });

$('#form1').keydown(function(e){
  var key = e.which;

  if(key == 13 && $('#name1').val() != "" && $('#email1').val() != "") {
    $('#modal-submit').click();
  }
});

$('#form2').keydown(function(e){
  var key = e.which;

  if(key == 13 && $('#name1').val() != "" && $('#email1').val() != "") {
    $('#modal-submit').click();
  }
});









