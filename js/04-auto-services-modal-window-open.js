$(document).ready(function($) {
    
    $('.box-text-1').click(function() {
        $('.modal-window-item-1').fadeIn();  //1
        return false;
    });

	$('.box-text-2').click(function() {
        $('.modal-window-item-2').fadeIn();  //2
        return false;
    });

	$('.box-text-3').click(function() {
        $('.modal-window-item-3').fadeIn();  //3
        return false;
    });

	$('.box-text-4').click(function() {
        $('.modal-window-item-4').fadeIn();  //4
        return false;
    });

	$('.box-text-5').click(function() {
        $('.modal-window-item-5').fadeIn();  //5
        return false;
    });



//1__________________________________________________
    $('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-1').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-1').fadeOut();
        }
    });
    
    $('.modal-window-item-1').click(function(e) {
        if ($(e.target).closest('.modal-window-content1').length === 0) {
            $(this).fadeOut();					
        }
    });



//2__________________________________________________
	$('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-2').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-2').fadeOut();
        }
    });
    
    $('.modal-window-item-2').click(function(e) {
        if ($(e.target).closest('.modal-window-content').length === 0) {
            $(this).fadeOut();					
        }
    });



	//3__________________________________________________
	$('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-3').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-3').fadeOut();
        }
    });
    
    $('.modal-window-item-3').click(function(e) {
        if ($(e.target).closest('.modal-window-content').length === 0) {
            $(this).fadeOut();					
        }
    });



	//4__________________________________________________
	$('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-4').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-4').fadeOut();
        }
    });
    
    $('.modal-window-item-4').click(function(e) {
        if ($(e.target).closest('.modal-window-content').length === 0) {
            $(this).fadeOut();					
        }
    });




	//5__________________________________________________
	$('.btn-close-modal-window-item').click(function() {
        $(this).parents('.modal-window-item-5').fadeOut();
        return false;
    });		
    
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window-item-5').fadeOut();
        }
    });
    
    $('.modal-window-item-5').click(function(e) {
        if ($(e.target).closest('.modal-window-content').length === 0) {
            $(this).fadeOut();					
        }
    });
    
});

