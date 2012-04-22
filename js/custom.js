$(document).ready(function(){

	$('#go').click(function() {
		var newImage = $('#newImage').val();
		$('#pogFront').css('background-image','url(' + newImage + ')');
	});

});