$(function() {
	//alert('hello');
	$('body').hide();
	$('body').fadeIn("4000");

	$('a').click(function() {
		$('body').fadeOut('4000');
	});
});