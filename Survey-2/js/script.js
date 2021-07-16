$(window).on('load', function () {
   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});

jQuery(document).ready(function () {

   //----Format Webp---------ъ
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }
   });

   // ----------------------- Date ----------------------------------- 
   var objToday = new Date(),
      domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "" }(),
      dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
      months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
      curMonth = months[objToday.getMonth()],
      curYear = objToday.getFullYear(),


      curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
      curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
   var today = curMonth + " " + dayOfMonth + ", " + curYear;

   $('.newDate').text(
      today
   );

   const content = $('.survey__body')
   const form = $('.form')
   const btn = $('.btn')

   let inputValue = '';
   let otheTextValue = '';

   const contentOne = () => `
      <div class="survey__question-wrapper question question-one">
      <div class="question__header">
         <p class="question__steps">01 <span></span> 08</p>
         <h1 class="question__title">How often do you shop online?</h1>
      </div>
      <form action="/success.php" class="question__choice-form form">
         <input type="radio" name='radio' id="radio1" data-value='Daily'>
         <label for="radio1" class="form__radio-btn input">
            <span>Daily</span>
         </label>
         <input type="radio" name='radio' id="radio2" data-value='Once in 2-3 days'>
         <label for="radio2" class="form__radio-btn input">
            <span>Once in 2-3 days</span>
         </label>
         <input type="radio" name='radio' id="radio3" data-value='Weekly'>
         <label for="radio3" class="form__radio-btn input">
            <span>Weekly</span>
         </label>
         <input type="radio" name='radio' id="radio4" data-value='Monthly'>
         <label for="radio4" class="form__radio-btn input">
            <span>Monthly</span>
         </label>
         <input type="radio" name='radio' id="radio5" data-value='Once in 2-3 months'>
         <label for="radio5" class="form__radio-btn input">
            <span>Once in 2-3 months</span>
         </label>
         <input type="radio" name='radio' id="radio6" data-value="When I'm free">
         <label for="radio6" class="form__radio-btn input">
            <span>When I'm free</span>
         </label>
         <input type="radio" name='radio' id="radio7" data-value='Other'>
         <label for="radio7" class="form__radio-btn input">
            <span>Other</span>
         </label>

         <input type="text" name='otherText' placeholder="please specify" class="form__input input">
         <button class="form__button btn">NEXT</button>
      </form>
   </div>
   `

   const contentTwo = () => `
      <div class="survey__question-wrapper question question-one">
      <div class="question__header">
         <p class="question__steps">01 <span></span> 08</p>
         <h1 class="question__title">How often do you shop online?</h1>
      </div>
      <form action="/success.php" class="question__choice-form form">
         <input type="radio" name='radio' id="radio1" data-value='Daily'>
         <label for="radio1" class="form__radio-btn input">
            <span>Daily</span>
         </label>
         <input type="radio" name='radio' id="radio2" data-value='Once in 2-3 days'>
         <label for="radio2" class="form__radio-btn input">
            <span>Once in 2-3 days</span>
         </label>
         <input type="radio" name='radio' id="radio3" data-value='Weekly'>
         <label for="radio3" class="form__radio-btn input">
            <span>Weekly</span>
         </label>
         <input type="radio" name='radio' id="radio4" data-value='Monthly'>
         <label for="radio4" class="form__radio-btn input">
            <span>Monthly</span>
         </label>
         <input type="radio" name='radio' id="radio5" data-value='Once in 2-3 months'>
         <label for="radio5" class="form__radio-btn input">
            <span>Once in 2-3 months</span>
         </label>
         <input type="radio" name='radio' id="radio6" data-value="When I'm free">
         <label for="radio6" class="form__radio-btn input">
            <span>When I'm free</span>
         </label>
         <input type="radio" name='radio' id="radio7" data-value='Other'>
         <label for="radio7" class="form__radio-btn input">
            <span>Other</span>
         </label>
         <input type="text" name='otheText' placeholder="please specify" class="form__input input">

         <button class="form__button btn">NEXT</button>
      </form>
   </div>
   `

   const test = () => {
      $('input[type=radio]').on('change', function () {
         addCheckInput();
         (() => inputValue = $(`input:checked`).attr('data-value'))();
         console.log(inputValue)
      })

      // проверяем совпадения data-value
      const addCheckInput = function () {
         let allInputs = content.find('input:checked');
         $.each(allInputs, function (index, value) {
            if ($(this).attr('data-value') == 'Other') {
               $('input[name=otheText]').addClass('show')
               $('input[name=otheText]').on('change', function () {
                  (() => otheTextValue = $('input[name=otheText]').val())();
                  console.log(otheTextValue)
               })
            } else {
               $('input[name=otheText]').removeClass('show')
            }
         })
      }
   }

   // test()

   let stepOne = () => {
      if ($(`input[name=email]`).hasClass('valid')) {
         // $('form').submit();
         submitEmailForm()
         content.html(contentOne())
      }
      test()
   }

   let stepTwo = () => {

      if (inputValue == 'Other' && otheTextValue.length != 0) {
         console.log(1)
         submitForm()
         content.html(contentTwo())
      } else {
         console.log(2)
         submitForm()
         content.html(contentTwo())
      }

      // if (inputValue.length != '') {
      //    console.log(inputValue)
      //    submitForm()
      //    content.html(contentTwo())
      // }
   }

   btn.on('click', function (e) {
      e.preventDefault();

      if ($('div').is('.firstScreen')) {
         stepOne()
      } else if ($('div').is('.question-one')) {
         stepTwo()
      }
   })

   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );


   let submitEmailForm = function () {
      $('.preloader').fadeIn();
      $.ajax({
         type: 'POST',
         url: './success.php',
         data: $('.form').serialize(),
      }).always(function (response) {
         setTimeout(function () {
            $('.preloader').fadeOut();
            $('.form').trigger('reset');
         }, 400);
      })
   }

   // Функция валидации и вывода сообщений
   function valEl(el) {

      el.validate({
         rules: {
            email: {
               required: true,
               email: true
            },
            radio: {
               required: true,
            }
         },

         // submitHandler: function (form) {
         //    $('.preloader').fadeIn();
         //    $.ajax({
         //       type: 'POST',
         //       url: './success.php',
         //       data: $('.form').serialize(),
         //    }).always(function (response) {
         //       setTimeout(function () {
         //          $('.preloader').fadeOut();
         //          $('.form').trigger('reset');
         //       }, 400);
         //    })
         // }
      })
   }

   form.each(function () {
      valEl($(this));
   });

   // отпраква формы 
   const submitForm = () => {
      $('.preloader').fadeIn();
      $.ajax({
         url: './success.php',
         type: 'POST',
         data: {
            inputValue: inputValue,
            otheTextValue: otheTextValue,
         }
      }).always(function (response) {
         setTimeout(function () {
            $('.preloader').fadeOut();
            $('.form').trigger('reset');
         }, 400);
      })
   }
})