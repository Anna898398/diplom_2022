$(document).ready(function() {
  
    $('#form').submit(function(e) {
  
        e.preventDefault();
        
        let name = $('#name').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let textarea = $('#textarea').val();
        
    
        $(".error").remove();    
        
        /* Имя */
        if (name.length < 1) {
            $('#name').after('<span class="error">Имя обязательно для заполнения</span>');
        }
    
        if (name.length > 0 && name.length < 2) {
            $('#name').after('<span class="error">Минимальное количество символов -  2</span>');
        }
    
        if (name.length > 20) {
            $('#name').after('<span class="error">Максимальное количество символов -  20</span>');
        }
    
    
    
        /* Телефон */
        if (phone.length < 1) {
            $('#phone').after('<span class="error">Укажите номер телефона в 10-ти значном формате: 9991112233</span>');
        }
    
        if (phone.length > 0 && phone.length < 10) {
            $('#phone').after('<span class="error">Вы указали МЕНЕЕ 10 цифр</span>');
        }
    
        if (phone.length > 10) {
            $('#phone').after('<span class="error">Вы указали БОЛЕЕ 10 цифр</span>');
        }
    
    
    
        /* email */
        if (email.length < 1) {
            $('#email').after('<span class="error">Укажите e-mail</span>');
        }

        if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
            $('#email').after('<span class="error">Вы ввели некорректный e-mail</span>');
        }



        /* Текст сообщения______________________________ */
        if (textarea.length < 1) {
            $('#textarea').after('<span class="error">Напишите Ваш вопрос</span>');
        }
    
        if (textarea.length > 1000) {
            $('#textarea').after('<span class="error">Максимальный лимит -  1000 символов</span>');
        }
    
    
        /* checkboxYes______________________________ */
    
        if ($('input[name="checkboxYes"]').is(':checked')) {
            $('.container-checkbox').after('<span class="error"></span>');
        } else {
            $('.container-checkbox').after('<span class="error">Подтвердите согласие на обработку данных</span>');
        }
  
    });

})