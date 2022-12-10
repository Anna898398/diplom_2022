$(document).ready(function() {
  
  $('#formModal').submit(function(e) {

      e.preventDefault();

      let yourName = $('#yourName').val();
      let yourPhone = $('#yourPhone').val();
      let yourEmail = $('#yourEmail').val();

      $(".error").remove();    
      
      /* Имя */
      if (yourName.length < 1) {
          $('#yourName').after('<span class="error">Имя обязательно для заполнения</span>');
      }
  
      if (yourName.length > 0 && yourName.length < 2) {
          $('#yourName').after('<span class="error">Минимальное количество символов -  2</span>');
      }
  
      if (yourName.length > 20) {
          $('#yourName').after('<span class="error">Максимальное количество символов -  20</span>');
      }
  
  
  
      /* Телефон */
      if (yourPhone.length < 1) {
          $('#yourPhone').after('<span class="error">Укажите номер телефона в 10-ти значном формате: 9991112233</span>');
      }
  
      if (yourPhone.length > 0 && yourPhone.length < 10) {
          $('#yourPhone').after('<span class="error">Вы указали МЕНЕЕ 10 цифр</span>');
      }
  
      if (yourPhone.length > 10) {
          $('#yourPhone').after('<span class="error">Вы указали БОЛЕЕ 10 цифр</span>');
      }
  
  
  
      /* email */
      if (yourEmail.length < 1) {
          $('#yourEmail').after('<span class="error">Укажите e-mail</span>');
      }

      if (yourEmail.length > 0 && (yourEmail.match(/.+?\@.+/g) || []).length !== 1) {
          $('#yourEmail').after('<span class="error">Вы ввели некорректный e-mail</span>');
      }

  });

})