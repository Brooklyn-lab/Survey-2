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

   // -------------- SURVEY ---------------------------

   const content = $('.content-body')
   const form = $('.form')

   let inputValue = '';
   let otherTextValue = '';

   // ------------  MAIN STEPS -------------------

   const question_1 = () => `
         <div class="survey__question-wrapper question question_1">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">How often do you shop online?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='radio' id="radio1" data-value='Daily' required>
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
               <button class="form__button btn">NEXT</button>
               <span id='error'></span>
            </form>
         </div>
      `

   const question_2 = () => `
         <div class="survey__question-wrapper question question_2">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">What types of product do you typically buy online?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='radio' id="radio1" data-value='Electronics' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Electronics</span>
               </label>
               <input type="radio" name='radio' id="radio2" data-value='Smart devices'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Smart devices</span>
               </label>
               <input type="radio" name='radio' id="radio3" data-value='Home/kitchen appliances'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Home/kitchen appliances</span>
               </label>
               <input type="radio" name='radio' id="radio4" data-value='Health and beauty'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Health and beauty</span>
               </label>
               <input type="radio" name='radio' id="radio5" data-value='Clothing and accessories'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Clothing and accessories</span>
               </label>
               <input type="radio" name='radio' id="radio6" data-value="Food and grocery">
               <label for="radio6" class="form__radio-btn input">
                  <span>Food and grocery</span>
               </label>
               <input type="radio" name='radio' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <button class="form__button btn">NEXT</button>
               <span id='error'></span>
            </form>
         </div>
      `

   const question_4 = () => `
         <div class="survey__question-wrapper question question_4">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">What attracts you to buy in this online store?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='radio' id="radio1" data-value='Good quality' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Good quality</span>
               </label>
               <input type="radio" name='radio' id="radio2" data-value='Fast shipping'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Fast shipping</span>
               </label>
               <input type="radio" name='radio' id="radio3" data-value='Regular sales'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Regular sales</span>
               </label>
               <input type="radio" name='radio' id="radio4" data-value='Loyalty programs'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Loyalty programs</span>
               </label>
               <input type="radio" name='radio' id="radio5" data-value='Availability of goods in stock'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Availability of goods in stock</span>
               </label>
               <input type="radio" name='radio' id="radio6" data-value="Vouchers">
               <label for="radio6" class="form__radio-btn input">
                  <span>Vouchers</span>
               </label>
               <input type="radio" name='radio' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='otherText' placeholder="please specify" class="form__input input">
               <button class="form__button btn">NEXT</button>
               <span id='error'></span>   
            </form>
         </div>
      `

   const question_5 = () => `
         <div class="survey__question-wrapper question question_5">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">How much do you spend on online shopping monthly?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='radio' id="radio1" data-value='Less than 100 USD' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Less than 100 USD</span>
               </label>
               <input type="radio" name='radio' id="radio2" data-value='$100 – $250'>
               <label for="radio2" class="form__radio-btn input">
                  <span>$100 – $250</span>
               </label>
               <input type="radio" name='radio' id="radio3" data-value='$250 – $500'>
               <label for="radio3" class="form__radio-btn input">
                  <span>$250 – $500</span>
               </label>
               <input type="radio" name='radio' id="radio4" data-value='$500 – $1000'>
               <label for="radio4" class="form__radio-btn input">
                  <span>$500 – $1000</span>
               </label>
               <input type="radio" name='radio' id="radio5" data-value='$1000 - $2000'>
               <label for="radio5" class="form__radio-btn input">
                  <span>$1000 - $2000</span>
               </label>
               <input type="radio" name='radio' id="radio6" data-value="More than 2000 USD">
               <label for="radio6" class="form__radio-btn input">
                  <span>More than 2000 USD</span>
               </label>
               <input type="radio" name='radio' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='otherText' placeholder="please specify" class="form__input input">
               <button class="form__button btn">NEXT</button>
               <span id='error'></span>
            </form>
         </div>
      `

   const question_6 = () => `
      <div class="survey__question-wrapper question question_6">
      <div class="question__header">
         <span class="question__steps"></span>
         <h1 class="question__title">Which payment method do you prefer for online shopping?</h1>
      </div>
      <form action="./success.php" class="question__choice-form form">
         <input type="radio" name='radio' id="radio1" data-value='Paypal' required>
         <label for="radio1" class="form__radio-btn input">
            <span>Paypal</span>
         </label>
         <input type="radio" name='radio' id="radio2" data-value='Google Pay'>
         <label for="radio2" class="form__radio-btn input">
            <span>Google Pay</span>
         </label>
         <input type="radio" name='radio' id="radio3" data-value='American Express'>
         <label for="radio3" class="form__radio-btn input">
            <span>American Express</span>
         </label>
         <input type="radio" name='radio' id="radio4" data-value='Apple Pay'>
         <label for="radio4" class="form__radio-btn input">
            <span>Apple Pay</span>
         </label>
         <input type="radio" name='radio' id="radio5" data-value='Masterpass'>
         <label for="radio5" class="form__radio-btn input">
            <span>Masterpass</span>
         </label>
         <input type="radio" name='radio' id="radio6" data-value="Visa Checkout">
         <label for="radio6" class="form__radio-btn input">
            <span>Visa Checkout</span>
         </label>
         <input type="radio" name='radio' id="radio7" data-value='Other'>
         <label for="radio7" class="form__radio-btn input">
            <span>Other</span>
         </label>
         <input type="text" name='otherText' placeholder="please specify" class="form__input input">
         <button class="form__button btn">NEXT</button>
         <span id='error'></span>
      </form>
      </div>
      `

   const question_7 = () => `
      <div class="survey__question-wrapper question question_7">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">Which delivery service do you prefer for online shopping?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Shopping center delivery service' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Shopping center delivery service</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='FedEx'>
            <label for="radio2" class="form__radio-btn input">
               <span>FedEx</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='UPS'>
            <label for="radio3" class="form__radio-btn input">
               <span>UPS</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='XPO'>
            <label for="radio4" class="form__radio-btn input">
               <span>XPO</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='USPS'>
            <label for="radio5" class="form__radio-btn input">
               <span>USPS</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Deliv">
            <label for="radio6" class="form__radio-btn input">
               <span>Deliv</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   
   // --------------- OTHER STEPS -----------------

   const question_2_1 = () => `
         <div class="survey__question-wrapper question question_2_1">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <textarea name='otherText' id="textarea" class="form__textarea input" placeholder="Text form" required></textarea>
            <button class="form__button btn">NEXT</button>
         </form>
      </div>
      `

   const question_2_2 = () => `
         <div class="survey__question-wrapper question question_2_2">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What attracts you to buy in this online store?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Good quality' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Good quality</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Fast shipping'>
            <label for="radio2" class="form__radio-btn input">
               <span>Fast shipping</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='American Express'>
            <label for="radio3" class="form__radio-btn input">
               <span>American Express</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='Regular sales'>
            <label for="radio4" class="form__radio-btn input">
               <span>Regular sales</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='Loyalty programs'>
            <label for="radio5" class="form__radio-btn input">
               <span>Loyalty programs</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Availability of goods in stock">
            <label for="radio6" class="form__radio-btn input">
               <span>Visa Availability of goods in stock</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value="Vouchers">
            <label for="radio7" class="form__radio-btn input">
               <span>Vouchers</span>
            </label>
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   const question_2_3 = () => `
         <div class="survey__question-wrapper question question_2_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What type of the products would you rather buy online?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Electronics' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Electronics</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Smart devices'>
            <label for="radio2" class="form__radio-btn input">
               <span>Smart devices</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='Home/kitchen appliances'>
            <label for="radio3" class="form__radio-btn input">
               <span>Home/kitchen appliances</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='Health and beauty'>
            <label for="radio4" class="form__radio-btn input">
               <span>Health and beauty</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='Clothing and accessories'>
            <label for="radio5" class="form__radio-btn input">
               <span>Clothing and accessories</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Food and grocery">
            <label for="radio6" class="form__radio-btn input">
               <span>Food and grocery</span>
            </label>
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   // --------------- PRODUCTS STEPS --------------

   const question_3_1 = () => `
      <div class="survey__question-wrapper question question_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='BestBuy' required>
            <label for="radio1" class="form__radio-btn input">
               <span>BestBuy</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Ebay'>
            <label for="radio2" class="form__radio-btn input">
               <span>Ebay</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='Amazon'>
            <label for="radio3" class="form__radio-btn input">
               <span>Amazon</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='TigerDirect'>
            <label for="radio4" class="form__radio-btn input">
               <span>TigerDirect</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='NewEgg'>
            <label for="radio5" class="form__radio-btn input">
               <span>NewEgg</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Walmart">
            <label for="radio6" class="form__radio-btn input">
               <span>Walmart</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   const question_3_2 = () => `
      <div class="survey__question-wrapper question question_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Amazon​' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Amazon​</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Ikea'>
            <label for="radio2" class="form__radio-btn input">
               <span>Ikea</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='Target'>
            <label for="radio3" class="form__radio-btn input">
               <span>Target</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='Best Buy'>
            <label for="radio4" class="form__radio-btn input">
               <span>Best Buy</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='P.C. Richard & Son'>
            <label for="radio5" class="form__radio-btn input">
               <span>P.C. Richard & Son</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="The Home Depot">
            <label for="radio6" class="form__radio-btn input">
               <span>The Home Depot</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   const question_3_3 = () => `
         <div class="survey__question-wrapper question question_3">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">What is the best website to buy from?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='radio' id="radio1" data-value='Home Depot' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Home Depot</span>
               </label>
               <input type="radio" name='radio' id="radio2" data-value='Lowe's'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Lowe's</span>
               </label>
               <input type="radio" name='radio' id="radio3" data-value='Wayfair'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Wayfair</span>
               </label>
               <input type="radio" name='radio' id="radio4" data-value='Best Buy'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Best Buy</span>
               </label>
               <input type="radio" name='radio' id="radio5" data-value='Costco'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Costco</span>
               </label>
               <input type="radio" name='radio' id="radio6" data-value="AJ Madison">
               <label for="radio6" class="form__radio-btn input">
                  <span>AJ Madison</span>
               </label>
               <input type="radio" name='radio' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='otherText' placeholder="please specify" class="form__input input">
               <button class="form__button btn">NEXT</button>
               <span id='error'></span>
            </form>
         </div>
         `

   const question_3_4 = () => `
      <div class="survey__question-wrapper question question_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Sephora' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Sephora</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Walgreens'>
            <label for="radio2" class="form__radio-btn input">
               <span>Walgreens</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='Clinique'>
            <label for="radio3" class="form__radio-btn input">
               <span>Clinique</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='CVS'>
            <label for="radio4" class="form__radio-btn input">
               <span>CVS</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='MAC'>
            <label for="radio5" class="form__radio-btn input">
               <span>MAC</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Lancome">
            <label for="radio6" class="form__radio-btn input">
               <span>Lancome</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   const question_3_5 = () => `
      <div class="survey__question-wrapper question question_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='GAP' required>
            <label for="radio1" class="form__radio-btn input">
               <span>GAP</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='KOHL'S'>
            <label for="radio2" class="form__radio-btn input">
               <span>KOHL'S</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='ASOS'>
            <label for="radio3" class="form__radio-btn input">
               <span>ASOS</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='6pm'>
            <label for="radio4" class="form__radio-btn input">
               <span>6pm</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='ZARA'>
            <label for="radio5" class="form__radio-btn input">
               <span>ZARA</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="H&M">
            <label for="radio6" class="form__radio-btn input">
               <span>H&M</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   const question_3_6 = () => `
      <div class="survey__question-wrapper question question_3">
         <div class="question__header">
            <span class="question__steps"></span>
            <h1 class="question__title">What is the best website to buy from?</h1>
         </div>
         <form action="./success.php" class="question__choice-form form">
            <input type="radio" name='radio' id="radio1" data-value='Thrive Market' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Thrive Market</span>
            </label>
            <input type="radio" name='radio' id="radio2" data-value='Fresh Direct'>
            <label for="radio2" class="form__radio-btn input">
               <span>Fresh Direct</span>
            </label>
            <input type="radio" name='radio' id="radio3" data-value='Shipt'>
            <label for="radio3" class="form__radio-btn input">
               <span>Shipt</span>
            </label>
            <input type="radio" name='radio' id="radio4" data-value='AmazonFresh'>
            <label for="radio4" class="form__radio-btn input">
               <span>AmazonFresh</span>
            </label>
            <input type="radio" name='radio' id="radio5" data-value='Instacart'>
            <label for="radio5" class="form__radio-btn input">
               <span>Instacart</span>
            </label>
            <input type="radio" name='radio' id="radio6" data-value="Yümmy Bazaar">
            <label for="radio6" class="form__radio-btn input">
               <span>Yümmy Bazaar</span>
            </label>
            <input type="radio" name='radio' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='otherText' placeholder="please specify" class="form__input input">
            <button class="form__button btn">NEXT</button>
            <span id='error'></span>
         </form>
      </div>
      `

   // ----------  ПРОГРЕСС БАР -------------
   const loadingStep = () => `
      <div class="survey__content submit">
         <h1 class="content-title">Please wait while we are processing your answers</h1>
         <div class="submit__progress">
            <div>
               <p>Submitting answers.. <span id='progressNumber'></span></p>
               <progress class="submit__progress-bar" id="progressBar" value="20" max="100"></progress>
            </div>
            <div class="submit__process">
               <div class="submit__process-item">
                  <img class="submit__process-spinner submit__process-spinner_first active" src="./img/loader.svg" alt="loader">
                  <p class="submit__process-text">Processing answers</p>
               </div>
               <div class="submit__process-item hide">
                  <img class="submit__process-spinner submit__process-spinner_second" src="./img/loader.svg" alt="loader">
                  <p class="submit__process-text">Matching best offers for you</p>
               </div>
            </div>
         </div>
      </div>
      <div class="survey__image">
         <img src="./img/illustration1.png" alt="A man with a magnifying glass looks at documents">
      </div>
   `

   function userProgress(time) {
      let start = 0;
      let progressElement = document.querySelector('#progressBar')
      let intervalId = setInterval(() => {
         if (start > 100) {
            clearInterval(intervalId)
         } else {
            progressElement.value = start;

         }
         start++;

         let progressNumber = $('#progressNumber');
         progressNumber.text(progressElement.value + '%');

         if (progressElement.value == 33) {
            $('.submit__process-spinner_first').removeClass('active');
            $('.submit__process-item').removeClass('hide');
            $('.submit__process-spinner_second').addClass('active');
         } else if (progressElement.value == 100) {
            $('.submit__process-spinner_second').removeClass('active');
            location.href = './completing.html';
         }
      }, time);
   }

   // ---- ПОКАЗАТЬ/УБРАТЬ ИНПУТ, ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ В ИНПУТЕ, ПРИ ВЫБОРЕ OTHER -----

   const test = () => {

      if ($('form').hasClass('error')) {
         $('#error').text('This field is required.')
      }

      $('input[type=radio]').on('change', function () {
         addCheckInput();
         form.removeClass('error')
         $('#error').text('');
            (() => inputValue = $(`input:checked`).attr('data-value'))();
      })

      $('input[name=otherText]').on('change', function () {
         $('#error').text('');
      })

      // проверяем совпадения data-value
      const addCheckInput = function () {
         let allInputs = content.find('input:checked');
         $.each(allInputs, function (index, value) {
            if ($(this).attr('data-value') == 'Other') {
               $('input[name=otherText]').addClass('show')
               $('input[name=otherText]').attr('required', true)
               $('input[name=otherText]').on('change', function () {
                  (() => otherTextValue = $('input[name=otherText]').val())();
               })
            } else {
               $('input[name=otherText]').removeClass('show')
               $('input[name=otherText]').removeAttr('required')
            }
         })
      }
   }

   const Up = () => {
      console.log(1)
      $('body,html').animate({ scrollTop: top }, 150);
   }
   Up()

   // ----------------- STEPS --------------------------

   let inputStep = () => {
      if ($(`input`).hasClass('valid')) {
         submitEmailForm()
         content.html(question_1())
         Up()
      }
   }

   let textareaStep = () => {
      if ($('textarea').val().length != 0) {
         (() => inputValue = $(`textarea`).val())()
         submitForm()
         content.html(question_2_2())
      }
   }

   let nextStep = (stepContent) => {
      if (inputValue === 'Other' && otherTextValue.length != 0 || inputValue != '' && inputValue != 'Other') {
         submitForm()
         content.html(stepContent())
      }
   }

   // ----------------- OTHER STEPS --------------------------

   let otherStep = () => {
      switch (inputValue) {
         case 'Other':
            submitForm()
            content.html(question_2_1())
            break
         case 'Electronics':
            submitForm()
            content.html(question_3_1())
            break
         case 'Smart devices':
            submitForm()
            content.html(question_3_2())
            break
         case 'Home/kitchen appliances':
            submitForm()
            content.html(question_3_3())
            break
         case 'Health and beauty':
            submitForm()
            content.html(question_3_4())
            break
         case 'Clothing and accessories':
            submitForm()
            content.html(question_3_5())
            break
         case 'Food and grocery':
            submitForm()
            content.html(question_3_6())
            break
      }
   }

   // ------------------------------------------------

   content.on('click', 'button', function (e) {
      // e.preventDefault();
      $('.form').addClass('error')
      changeSteps()
      test()
   })

   let contentClass = (nameClass) => $('div').is(`${nameClass}`)

   const changeSteps = function () {
      if (contentClass('.firstScreen')) {
         inputStep()
      } else if (contentClass('.question_1')) {
         nextStep(question_2)
      } else if (contentClass('.question_2')) {
         otherStep()
      } else if (contentClass('.question_2_1')) {
         textareaStep()
      } else if (contentClass('.question_2_2')) {
         nextStep(question_2_3)
      } else if (contentClass('.question_2_3')) {
         otherStep()
      } else if (contentClass('.question_3')) {
         nextStep(question_4)
      } else if (contentClass('.question_4')) {
         nextStep(question_5)
      } else if (contentClass('.question_5')) {
         nextStep(question_6)
      } else if (contentClass('.question_6')) {
         nextStep(question_7)
      } else if (contentClass('.question_7')) {
         nextStep(loadingStep)
         Up()
         userProgress(20)
      }
   }

   // Функция валидации и вывода сообщений
   form.validate()

   const resetValue = () => {
      inputValue = '';
      otherTextValue = '';
   }

   // отпраква формы 
   let submitForm = () => {
      $.ajax({
         type: 'POST',
         url: './success.php',
         data: {
            inputValue: inputValue,
            otherTextValue: otherTextValue,
         }
      }).always(function () {
         $('.form').trigger('reset');
         resetValue();
      })
   }

   let submitEmailForm = function () {
      $.ajax({
         type: 'POST',
         url: './success.php',
         data: $('.form').serialize(),
      }).always(function () {
         $('.form').trigger('reset');
      })
   }

   // ------------- Вечно актуальная дата комментариев -----------------

   var
      months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

      // EDIT TIME HERE IF YOU WISH TO UPDATE TIME OF THE COMMENTS, PLEASE BE CAREFULL TO LEAVE EXACT SAME STRUCTURE (EDIT BETWEEN "")
      time = ["12:01 am", "2:24 pm", "11:55 am", "8:47 am", "6:16 pm", "4:16 pm", "6:48 pm", "17:07"],
      d = new Date(),
      dateNow = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

   for (var comments = document.querySelectorAll(".comments__item"), i = 1; i <= comments.length; i++) mydate = new Date, i >= 3 && i <= 4 ? 3 == i ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)) : i > 4 ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)), year = mydate.getYear(), year < 1e3 && (year += 1900), day = mydate.getDay(), month = mydate.getMonth(), daym = mydate.getDate(), daym < 10 && (daym = daym), document.getElementsByClassName("f" + i + "-date")[0].innerHTML = months[month] + " " + (daym) + ", " + year + " at " + time[i - 1];

   // ----------------------------------------------------------------------

})