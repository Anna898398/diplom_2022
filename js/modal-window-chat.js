$(document).ready(function($) {
    
    $('.btn-open-modal-window-chat').click(function() {
        $('.modal-window-chat').fadeIn();
        return false;
    });
	


    $('.btn-close-modal-window-chat').click(function() {
        $(this).parents('.modal-window-chat').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-chat').fadeOut();
        }
    });
    
    $('.modal-window-chat').click(function(e) {
        if ($(e.target).closest('.modal-window-messengers').length === 0) {
            $(this).fadeOut();					
        }
    });
    
});


