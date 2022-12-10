$(document).ready(function($) {
	$('.btn-open-modal-window').click(function() {
		$('.modal-window-form-send').fadeIn();
		return false;
	});	
	
	$('.btn-close-modal-window').click(function() {
		$(this).parents('.modal-window-form-send').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-form-send').fadeOut();
		}
	});
	
	$('.modal-window-form-send').click(function(e) {
		if ($(e.target).closest('.modal-window').length === 0) {
			$(this).fadeOut();					
		}
	});
});


$(document).ready(function($) {
	$('.btn-open-modal-window-hide').click(function() {
		$('.modal-window-form-send').fadeIn();
		return false;
	});	
	
	$('.btn-close-modal-window-hide').click(function() {
		$(this).parents('.modal-window-form-send').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-window-form-send').fadeOut();
		}
	});
	
	$('.modal-window-form-send').click(function(e) {
		if ($(e.target).closest('.modal-window').length === 0) {
			$(this).fadeOut();					
		}
	});
});