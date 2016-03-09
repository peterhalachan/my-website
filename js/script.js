$(function() {
	$('body').hide();
	$('body').fadeIn("4000");

	$('#error-message').hide();
	$('#error-mail').hide();

	$('a').click(function() {
		$('body').fadeOut('4000');
	});

	$('form').submit(function() {
		var email = $('#inputEmail'),
			message = $('#inputMessage');

		var valid = true;

		//$(this).find('.error').removeClass('error');
		//$(this).find('.error-message').hide();
		$('#error-message').hide().css({'color': '#1aa3ff', 'font-weight': 'bold'});
		$('#error-mail').hide().css({'color': '#1aa3ff', 'font-weight': 'bold'});

		if (!message.val()) {
			message.addClass('error').next().fadeIn('fast');
			valid = false;
		};

		if (!email.val() || !email.val().match( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ) ) {
			email.addClass('error').next().fadeIn('fast');
			valid = false;
		};

		return valid;
	});
});