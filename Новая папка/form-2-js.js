$(document).ready(function() {
  
  $('#form').submit(function(e) {

    e.preventDefault();
    
    let name = $('#name').val();
    let phone = $('#phone').val();
    let email = $('#email').val();

    let brandCar = $('#brandCar').val();
    let modelCar = $('#modelCar').val();
    let yearCar = $('#yearCar').val();

    let date = $('#date').val(); 
    let time = $('#time').val(); 
    let photo = $('#photo').val();   
 
    $(".error").remove();

    
    /* Имя_____________________________ */
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
      $('#email').after('<span class="error">Email is required</span>');
    } else {

      let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
      let validEmail = regEx.test(email);

      if (!validEmail) {
        $('#email').after('<span class="error" id="correct">Enter a valid email address</span>');
      }
    }



    /* Марка авто___________________________ */
    if (brandCar.length < 1) {
      $('#brandCar').after('<span class="error">Укажите Марку авто</span>');
    }



    /* Модель авто___________________________ */
    if (modelCar.length < 1) {
      $('#modelCar').after('<span class="error">Укажите Модель авто</span>');
    }



    /* Год ___________________________ */
    if (yearCar.length < 1) {
      $('#yearCar').after('<span class="error">Выберите год авто</span>');
    }



    /* Дата посещения ____________________ */
    if (date.length < 1) {
      $('#date').after('<span class="error">Выберите предполагаемую дату</span>');
    }



    /* Время посещения ____________________ */
    if (time.length < 1) {
      $('#time').after('<span class="error">Укажите время посещения</span>');
    }



     /* Фото ___________________________ */

     if (photo.length < 1) {
      $('#photo').after('<span class="error">Прикрепите фото</span>');
    }


    /* Пол ______________________________ */

    if ($('input[name="checkboxYes"]').is(':checked')) {
      $('.checkboxYes').after('<span class="error"></span>');
    } else {
      $('.checkboxYes').after('<span class="error">Подтвердите согласие на обработку данных</span>');
    }

  });
})
