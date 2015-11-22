
$(document).ready(function() {
	checkHeight();
	$(window).resize(function() {
		checkHeight();
	});

	//Displays the Login popup
	$('a.login-window').click(function() {
		
		// Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup and add close button
		$(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});

	  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
	      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('#nav').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('#nav').removeClass('navbar-fixed');
	    }
	  });
});

function checkHeight() {
		if ($(window).width() < 980) {
			$('#nav-div').css('height', '123px');

		}
		else if ($(window).width() < 1680) {
			$('#nav-div').css('height', '205px');
		}
		else {
			$('#nav-div').css('height', '215px');
		}
}