$(window).on('load', function () {
   $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});

jQuery(document).ready(function () {

   // ---------------- PIXEL -----------------------
   function addTrackingPixel() {
      let params = new URLSearchParams(document.location.search.substring(1));
      let t = params.get("t");

      let pixel = document.createElement("iframe");
      pixel.setAttribute("src", `https://cd-cont.com/p.ashx?o=108170&e=1002535&a=8934&f=if&t=TRANSACTION_ID&r=${t}`);
      pixel.setAttribute("height", "1");
      pixel.setAttribute("width", "1");
      pixel.setAttribute("frameborder", "0");
      document.body.appendChild(pixel);
   }

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

   // -------------- SURVEY ---------------------------

   const content = $('.content-body')
   const form = $('.form')
   const mainWrapper = $('.main-wrapper')

   let data = {
      email = '',
      question1 = '',
      question2 = '',
      question2_1_other = '',
      question2_2 = '',
      question2_3 = '',
      question3 = '',
      question3_other = '',
      question4 = '',
      question4_other = '',
      question5 = '',
      question5_other = '',
      question6 = '',
      question6_other = '',
      question7 = '',
      question7_other = '',
   }

   const inspectionProducts = () => {
      switch (products) {
         case 'Electronics':
            $('.electronics').show()
            break
         case 'Smart devices':
            $('.devices').show()
            break
         case 'Home/kitchen appliances':
            $('.kitchen').show()
            break
         case 'Health and beauty':
            $('.health').show()
            break
         case 'Clothing and accessories':
            $('.clothing').show()
            break
      }
   }
   // ------------  MAIN STEPS -------------------

   const question_1 = () => `
         <div class="survey__question-wrapper question question_1">
            <div class="question__header">
               <span class="question__steps"></span>
               <h1 class="question__title">How often do you shop online?</h1>
            </div>
            <form action="./success.php" class="question__choice-form form">
               <input type="radio" name='question_1' id="radio1" data-value='Daily' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Daily</span>
               </label>
               <input type="radio" name='question_1' id="radio2" data-value='Once in 2-3 days'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Once in 2-3 days</span>
               </label>
               <input type="radio" name='question_1' id="radio3" data-value='Weekly'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Weekly</span>
               </label>
               <input type="radio" name='question_1' id="radio4" data-value='Monthly'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Monthly</span>
               </label>
               <input type="radio" name='question_1' id="radio5" data-value='Once in 2-3 months'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Once in 2-3 months</span>
               </label>
               <input type="radio" name='question_1' id="radio6" data-value="When I'm free">
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
               <input type="radio" name='question_2' id="radio1" data-value='Electronics' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Electronics</span>
               </label>
               <input type="radio" name='question_2' id="radio2" data-value='Smart devices'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Smart devices</span>
               </label>
               <input type="radio" name='question_2' id="radio3" data-value='Home/kitchen appliances'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Home/kitchen appliances</span>
               </label>
               <input type="radio" name='question_2' id="radio4" data-value='Health and beauty'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Health and beauty</span>
               </label>
               <input type="radio" name='question_2' id="radio5" data-value='Clothing and accessories'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Clothing and accessories</span>
               </label>
               <input type="radio" name='question_2' id="radio6" data-value='Other'>
               <label for="radio6" class="form__radio-btn input">
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
               <input type="radio" name='question_4' id="radio1" data-value='Good quality' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Good quality</span>
               </label>
               <input type="radio" name='question_4' id="radio2" data-value='Fast shipping'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Fast shipping</span>
               </label>
               <input type="radio" name='question_4' id="radio3" data-value='Regular sales'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Regular sales</span>
               </label>
               <input type="radio" name='question_4' id="radio4" data-value='Loyalty programs'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Loyalty programs</span>
               </label>
               <input type="radio" name='question_4' id="radio5" data-value='Availability of goods in stock'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Availability of goods in stock</span>
               </label>
               <input type="radio" name='question_4' id="radio6" data-value="Vouchers">
               <label for="radio6" class="form__radio-btn input">
                  <span>Vouchers</span>
               </label>
               <input type="radio" name='question_4' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='question_4_other' placeholder="please specify" class="form__input input">
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
               <input type="radio" name='question_5' id="radio1" data-value='Less than 100 USD' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Less than 100 USD</span>
               </label>
               <input type="radio" name='question_5' id="radio2" data-value='$100 – $250'>
               <label for="radio2" class="form__radio-btn input">
                  <span>$100 – $250</span>
               </label>
               <input type="radio" name='question_5' id="radio3" data-value='$250 – $500'>
               <label for="radio3" class="form__radio-btn input">
                  <span>$250 – $500</span>
               </label>
               <input type="radio" name='question_5' id="radio4" data-value='$500 – $1000'>
               <label for="radio4" class="form__radio-btn input">
                  <span>$500 – $1000</span>
               </label>
               <input type="radio" name='question_5' id="radio5" data-value='$1000 - $2000'>
               <label for="radio5" class="form__radio-btn input">
                  <span>$1000 - $2000</span>
               </label>
               <input type="radio" name='question_5' id="radio6" data-value="More than 2000 USD">
               <label for="radio6" class="form__radio-btn input">
                  <span>More than 2000 USD</span>
               </label>
               <input type="radio" name='question_5' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='question_5_other' placeholder="please specify" class="form__input input">
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
         <input type="radio" name='question_6' id="radio1" data-value='Paypal' required>
         <label for="radio1" class="form__radio-btn input">
            <span>Paypal</span>
         </label>
         <input type="radio" name='question_6' id="radio2" data-value='Google Pay'>
         <label for="radio2" class="form__radio-btn input">
            <span>Google Pay</span>
         </label>
         <input type="radio" name='question_6' id="radio3" data-value='American Express'>
         <label for="radio3" class="form__radio-btn input">
            <span>American Express</span>
         </label>
         <input type="radio" name='question_6' id="radio4" data-value='Apple Pay'>
         <label for="radio4" class="form__radio-btn input">
            <span>Apple Pay</span>
         </label>
         <input type="radio" name='question_6' id="radio5" data-value='Masterpass'>
         <label for="radio5" class="form__radio-btn input">
            <span>Masterpass</span>
         </label>
         <input type="radio" name='question_6' id="radio6" data-value="Visa Checkout">
         <label for="radio6" class="form__radio-btn input">
            <span>Visa Checkout</span>
         </label>
         <input type="radio" name='question_6' id="radio7" data-value='Other'>
         <label for="radio7" class="form__radio-btn input">
            <span>Other</span>
         </label>
         <input type="text" name='question_6_other' placeholder="please specify" class="form__input input">
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
            <input type="radio" name='question_7' id="radio1" data-value='Shopping center delivery service' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Shopping center delivery service</span>
            </label>
            <input type="radio" name='question_7' id="radio2" data-value='FedEx'>
            <label for="radio2" class="form__radio-btn input">
               <span>FedEx</span>
            </label>
            <input type="radio" name='question_7' id="radio3" data-value='UPS'>
            <label for="radio3" class="form__radio-btn input">
               <span>UPS</span>
            </label>
            <input type="radio" name='question_7' id="radio4" data-value='XPO'>
            <label for="radio4" class="form__radio-btn input">
               <span>XPO</span>
            </label>
            <input type="radio" name='question_7' id="radio5" data-value='USPS'>
            <label for="radio5" class="form__radio-btn input">
               <span>USPS</span>
            </label>
            <input type="radio" name='question_7' id="radio6" data-value="Deliv">
            <label for="radio6" class="form__radio-btn input">
               <span>Deliv</span>
            </label>
            <input type="radio" name='question_7' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='question_7_other' placeholder="please specify" class="form__input input">
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
            <textarea name='question_2_1_other' id="textarea" class="form__textarea input" placeholder="Text form" required></textarea>
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
            <input type="radio" name='question_2_2' id="radio1" data-value='Good quality' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Good quality</span>
            </label>
            <input type="radio" name='question_2_2' id="radio2" data-value='Fast shipping'>
            <label for="radio2" class="form__radio-btn input">
               <span>Fast shipping</span>
            </label>
            <input type="radio" name='question_2_2' id="radio3" data-value='American Express'>
            <label for="radio3" class="form__radio-btn input">
               <span>American Express</span>
            </label>
            <input type="radio" name='question_2_2' id="radio4" data-value='Regular sales'>
            <label for="radio4" class="form__radio-btn input">
               <span>Regular sales</span>
            </label>
            <input type="radio" name='question_2_2' id="radio5" data-value='Loyalty programs'>
            <label for="radio5" class="form__radio-btn input">
               <span>Loyalty programs</span>
            </label>
            <input type="radio" name='question_2_2' id="radio6" data-value="Availability of goods in stock">
            <label for="radio6" class="form__radio-btn input">
               <span>Visa Availability of goods in stock</span>
            </label>
            <input type="radio" name='question_2_2' id="radio7" data-value="Vouchers">
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
            <input type="radio" name='question_2_3' id="radio1" data-value='Electronics' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Electronics</span>
            </label>
            <input type="radio" name='question_2_3' id="radio2" data-value='Smart devices'>
            <label for="radio2" class="form__radio-btn input">
               <span>Smart devices</span>
            </label>
            <input type="radio" name='question_2_3' id="radio3" data-value='Home/kitchen appliances'>
            <label for="radio3" class="form__radio-btn input">
               <span>Home/kitchen appliances</span>
            </label>
            <input type="radio" name='question_2_3' id="radio4" data-value='Health and beauty'>
            <label for="radio4" class="form__radio-btn input">
               <span>Health and beauty</span>
            </label>
            <input type="radio" name='question_2_3' id="radio5" data-value='Clothing and accessories'>
            <label for="radio5" class="form__radio-btn input">
               <span>Clothing and accessories</span>
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
            <input type="radio" name='question_3' id="radio1" data-value='BestBuy' required>
            <label for="radio1" class="form__radio-btn input">
               <span>BestBuy</span>
            </label>
            <input type="radio" name='question_3' id="radio2" data-value='Ebay'>
            <label for="radio2" class="form__radio-btn input">
               <span>Ebay</span>
            </label>
            <input type="radio" name='question_3' id="radio3" data-value='Amazon'>
            <label for="radio3" class="form__radio-btn input">
               <span>Amazon</span>
            </label>
            <input type="radio" name='question_3' id="radio4" data-value='TigerDirect'>
            <label for="radio4" class="form__radio-btn input">
               <span>TigerDirect</span>
            </label>
            <input type="radio" name='question_3' id="radio5" data-value='NewEgg'>
            <label for="radio5" class="form__radio-btn input">
               <span>NewEgg</span>
            </label>
            <input type="radio" name='question_3' id="radio6" data-value="Walmart">
            <label for="radio6" class="form__radio-btn input">
               <span>Walmart</span>
            </label>
            <input type="radio" name='question_3' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='question_3_1_other' placeholder="please specify" class="form__input input">
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
            <input type="radio" name='question_3' id="radio1" data-value='Amazon​' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Amazon​</span>
            </label>
            <input type="radio" name='question_3' id="radio2" data-value='Ikea'>
            <label for="radio2" class="form__radio-btn input">
               <span>Ikea</span>
            </label>
            <input type="radio" name='question_3' id="radio3" data-value='Target'>
            <label for="radio3" class="form__radio-btn input">
               <span>Target</span>
            </label>
            <input type="radio" name='question_3' id="radio4" data-value='Best Buy'>
            <label for="radio4" class="form__radio-btn input">
               <span>Best Buy</span>
            </label>
            <input type="radio" name='question_3' id="radio5" data-value='P.C. Richard & Son'>
            <label for="radio5" class="form__radio-btn input">
               <span>P.C. Richard & Son</span>
            </label>
            <input type="radio" name='question_3' id="radio6" data-value="The Home Depot">
            <label for="radio6" class="form__radio-btn input">
               <span>The Home Depot</span>
            </label>
            <input type="radio" name='question_3' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='question_3_1_other' placeholder="please specify" class="form__input input">
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
               <input type="radio" name='question_3' id="radio1" data-value='Home Depot' required>
               <label for="radio1" class="form__radio-btn input">
                  <span>Home Depot</span>
               </label>
               <input type="radio" name='question_3' id="radio2" data-value='Lowe's'>
               <label for="radio2" class="form__radio-btn input">
                  <span>Lowe's</span>
               </label>
               <input type="radio" name='question_3' id="radio3" data-value='Wayfair'>
               <label for="radio3" class="form__radio-btn input">
                  <span>Wayfair</span>
               </label>
               <input type="radio" name='question_3' id="radio4" data-value='Best Buy'>
               <label for="radio4" class="form__radio-btn input">
                  <span>Best Buy</span>
               </label>
               <input type="radio" name='question_3' id="radio5" data-value='Costco'>
               <label for="radio5" class="form__radio-btn input">
                  <span>Costco</span>
               </label>
               <input type="radio" name='question_3' id="radio6" data-value="AJ Madison">
               <label for="radio6" class="form__radio-btn input">
                  <span>AJ Madison</span>
               </label>
               <input type="radio" name='question_3' id="radio7" data-value='Other'>
               <label for="radio7" class="form__radio-btn input">
                  <span>Other</span>
               </label>
               <input type="text" name='question_3_1_other' placeholder="please specify" class="form__input input">
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
            <input type="radio" name='question_3' id="radio1" data-value='Sephora' required>
            <label for="radio1" class="form__radio-btn input">
               <span>Sephora</span>
            </label>
            <input type="radio" name='question_3' id="radio2" data-value='Walgreens'>
            <label for="radio2" class="form__radio-btn input">
               <span>Walgreens</span>
            </label>
            <input type="radio" name='question_3' id="radio3" data-value='Clinique'>
            <label for="radio3" class="form__radio-btn input">
               <span>Clinique</span>
            </label>
            <input type="radio" name='question_3' id="radio4" data-value='CVS'>
            <label for="radio4" class="form__radio-btn input">
               <span>CVS</span>
            </label>
            <input type="radio" name='question_3' id="radio5" data-value='MAC'>
            <label for="radio5" class="form__radio-btn input">
               <span>MAC</span>
            </label>
            <input type="radio" name='question_3' id="radio6" data-value="Lancome">
            <label for="radio6" class="form__radio-btn input">
               <span>Lancome</span>
            </label>
            <input type="radio" name='question_3' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='question_3_1_other' placeholder="please specify" class="form__input input">
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
            <input type="radio" name='question_3' id="radio1" data-value='GAP' required>
            <label for="radio1" class="form__radio-btn input">
               <span>GAP</span>
            </label>
            <input type="radio" name='question_3' id="radio2" data-value='KOHL'S'>
            <label for="radio2" class="form__radio-btn input">
               <span>KOHL'S</span>
            </label>
            <input type="radio" name='question_3' id="radio3" data-value='ASOS'>
            <label for="radio3" class="form__radio-btn input">
               <span>ASOS</span>
            </label>
            <input type="radio" name='question_3' id="radio4" data-value='6pm'>
            <label for="radio4" class="form__radio-btn input">
               <span>6pm</span>
            </label>
            <input type="radio" name='question_3' id="radio5" data-value='ZARA'>
            <label for="radio5" class="form__radio-btn input">
               <span>ZARA</span>
            </label>
            <input type="radio" name='question_3' id="radio6" data-value="H&M">
            <label for="radio6" class="form__radio-btn input">
               <span>H&M</span>
            </label>
            <input type="radio" name='question_3' id="radio7" data-value='Other'>
            <label for="radio7" class="form__radio-btn input">
               <span>Other</span>
            </label>
            <input type="text" name='question_3_1_other' placeholder="please specify" class="form__input input">
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
               <progress class="submit__progress-bar" id="progressBar" value="0" max="100"></progress>
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

   // -----------  END STEPS --------------

   const endStep = () => `

      <section class="thanks-block">
         <div class="container">
            <div class="content-body">
               <div class="thanks-block__content products-step">
                  <h1 class="content-title">Thank you for completing the survey!</h1>
                  <div class="products-step__body">
                     <p class='products-step__text'>
                        Rewarded Web Shopper Survey are grateful for your participation in the survey. Because you helped
                        provide <span>vital consumer data</span>, we'd matched few exclusive offers for you, depending on
                        your answers.
                     </p>
                     <p class='products-step__text'>
                        Please pay attention, that these offers are currently <span>in extremely high demand</span>, and if
                        you leave this page without confirmation accepting the offer, we have no choice but to give another
                        random visitor a chance to participate in our surveys rewards program.
                     </p>
                  </div>
               </div>
               <div class="contnt-image products-step__image">
                  <img src="./img/illustration2.png" alt="Present">
               </div>
            </div>
         </div>
      </section>

      <section class="products">
      <div class="container">
         <div class="products__body">
            <article class="products__item electronics">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
                  </div>
                  <img src="./img/offers/iPad.jpg" width="460" height="320" alt="iPad Pro">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of iPad Pro + Magic Keyboard + Apple TV+ 12 Months</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(7)</span></p>
                     <a href="https://extload.com/?a=95408&c=234490&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item electronics">
               <div class="products__image">
               <div class='discount'>
                  <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
               </div>
                  <img src="./img/offers/iPhone.jpg" width="460" height="320" alt="iPhone">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of iPhone 12 Pro</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(5)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=256196&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item electronics">
               <div class="products__image">
               <div class='discount'>
                  <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
               </div>
                  <img src="./img/offers/mac_book.jpg" width="460" height="320" alt="MacBook">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of MacBook Pro</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(4)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=268652&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item electronics">
               <div class="products__image">
               <div class='discount'>
                  <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
               </div>
                  <img src="./img/offers/iMac.jpg" width="460" height="320" alt="iMac">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of iMac Yellow</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(5)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=268655&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item electronics">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
                  </div>
                  <img src="./img/offers/samsung.jpg" width="460" height="320" alt="Samsung Galaxy S21">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of Samsung Galaxy S21 Purple/Blue</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(7)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=253991&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item electronics">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
                  </div>
                  <img src="./img/offers/playstation.jpg" width="460" height="320" alt="PlayStation 5">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of PlayStation 5</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(4)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=270469&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
            
            <article class="products__item devices kitchen">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
                  </div>
                  <img src="./img/offers/dyson_v10.jpg" width="460" height="320" alt="Dyson V10">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of Dyson V10</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(5)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=272068&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item kitchen">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_2.png" width="152" height="152" alt="TRY TO WIN">
                  </div>
                  <img src="./img/offers/nespresso.jpg" width="460" height="320" alt="Nespresso">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of Nespresso</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(9)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=264462&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item kitchen">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_1.png" width="152" height="152" alt="FREE">
                  </div>
                  <img src="./img/offers/card1.jpg" width="460" height="320" alt="$500 Apple Store Giftcard">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of $500 Apple Store Giftcard</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(4)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=226630&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item clothing kitchen">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_1.png" width="152" height="152" alt="FREE">
                  </div>
                  <img src="./img/offers/card2.jpg" width="460" height="320" alt="$500 Costco Giftcard">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Become a winner of $500 Costco Giftcard</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Left in Stock: <span>(4)</span></p>
                     <a href="https://cldrck.com/?a=95408&c=226630&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
                  </div>
                  <img src="./img/offers/nutra4.jpg" width="460" height="320" alt="Sophria Skin Cream">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Sophria Skin Cream</p>
                     <p class="products__about">Brighten Skin's Appearance<br>
                        Restore Your Radiant, Firmer Skin<br>
                        Smooth Look of Stubborn Fine Lines</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__reg-price">$0.00 - Pay Only S/H</p>
                  </div>
                  <p class="products__cost">Shipping: <span>$4.95</span></p>
                  <p class="products__cost">Left in Stock: <span>Low Stock</span></p>
                  <a href="https://nmttrack.com/?a=95408&c=270373&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
                  <div class='discount'>
                     <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
                  </div>
                  <img src="./img/offers/nutra5.jpg" width="460" height="320" alt="Cogni Brain Max">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Cogni Brain Max</p>
                     <p class="products__about">Activate your power<br>
                        Think faster and sharper<br>
                        Smash targets with Ease<br>
                        Achieve untold perfomance<br>
                        Revitalize your whole mind</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__reg-price">$0.00 - Pay Only S/H</p>
                  </div>
                  <p class="products__cost">Shipping: <span>$6.95</span></p>
                  <p class="products__cost">Left in Stock: <span>Low Stock</span></p>
                  <a href="https://nmttrack.com/?a=95408&c=270374&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/nutra1.jpg" width="460" height="320" alt="RL MAX ME">
               </div>
               <div class="products__content"> 
                  <div class="products__header">
                     <p class="products__title">RL MAX ME</p>
                     <p class="products__about"><span>Bigger & Long-Lasting Erections</span><br>
                        Maximum pleasure & intensified orgasms<br>
                        <span>Surge In Sex Drive & Energy</span><br>
                        Ramps up stamina & staying power<br>
                        <span>Increased Sexual Confidence</span><br>
                        Experience vitality & peak performance</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__reg-price">$0.00 - Pay Only S/H</p>
                  </div>
                  <p class="products__cost">Shipping: <span>$4.95</span></p>
                  <p class="products__cost">6 Offers Remaining</p>
                  <a href="https://nmttrack.com/?a=95408&c=238258&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/nutra2.jpg" width="460" height="320" alt="Mighty Leaf CBD Oil">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Mighty Leaf CBD Oil</p>
                     <p class="products__about"><span>RELIEVES</span> CHRONIC PAIN<br>
                        <span>REDUCES</span> ANXIETY & STRESS<br>
                        <span>REDUCE</span> JOINT PAIN<br>
                        <span>COMBAT</span> ADDICTION</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__reg-price">$0.00 - Pay Only S/H</p>
                  </div>
                  <p class="products__cost">Shipping: <span>$6.95</span></p>
                  <p class="products__cost">Left in Stock: <span>Low Stock</span></p>
                  <a href="https://nmttrack.com/?a=95408&c=238280&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/nutra3.jpg" width="460" height="320" alt="Slim Tone Keto">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Slim Tone Keto</p>
                     <p class="products__about">BURN FAT FASTER THAN EVER<br>
                        Doctors, nutritionists, celebrities all know the fat burning benefits of being in ketosis!<br><br>
                        
                        BURN FAT FOR ENERGY, NOT CARBST<br>
                        When your body is in Ketosis, it is burning Fat Cells for energy instead of Carbs!<br><br>
                        
                        LOVE THE WAY YOU FEEL!<br>
                        Burning fat for energy instead of carbs gives your body 225% more energy!</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__reg-price">$0.00 - Pay Only S/H</p>
                  </div>
                  <p class="products__cost">Shipping: <span>$6.95</span></p>
                  <p class="products__cost">Left in Stock: <span>Low Stock</span></p>
                  <a href="https://nmttrack.com/?a=95408&c=260161&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
               </div>
            </article>
   
            <article class="products__item devices">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/amhs_tac_watch_1.jpg" width="460" height="320" alt="TAC Watch">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">TAC Watch</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price green">FREE</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Shipping: <span>$9.97</span></p>
                     <a href="https://nmttrack.com/?a=95408&c=269399&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item clothing">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/amhs_tac_watch_2.jpg" width="460" height="320" alt="Tactical Watch">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Tactical Watch</p>
                     <p class="products__about">Exclusive + Stylish + Durable</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price green">FREE</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Shipping: <span>$9.97</span></p>
                     <p class="products__cost">Left in Stock: <span>(173)</span></p>
                     <a href="https://nmttrack.com/?a=95408&c=269401&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item clothing">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_3.png" width="152" height="152" alt="FREE + shipping">
            </div>
                  <img src="./img/offers/geneva.jpg" width="460" height="320" alt="Geneva Watch">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">Geneva Watch</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price green">FREE</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Shipping: <span>$9.97</span></p>
                     <a href="https://nmttrack.com/?a=95408&c=269880&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item devices">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/power_volt.jpg" width="460" height="320" alt="PowerVolt">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">PowerVolt</p>
                     <p class="products__about">Retail residential electricity rates (the amount you pay per kilowatt-hour, or ¢/kWh) have sharply risen across the nation: about 27% over the last 3 years.</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=254959&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item devices">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/air_co2ntroller.jpg" width="460" height="320" alt="AirCO2ntroller">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">AirCO2ntroller</p>
                     <p class="products__about">High-precision CO2 Monitor with Sensors Made in Britain<br>
                        Temperature and Humidity Monitor<br>
                        Shows Measurements Directly on Display<br>
                        Good/Average/Unhealthy Indicator<br>
                        Multiple Alerts If Air Quality Deteriorates<br>
                        Easy to Carry – Home, Office and Car<br>
                        Flexible Admission – Hang, Magnetic, Table Placement</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=258459&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item devices clothing">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/airwatch_active.jpg" width="460" height="320" alt="AirWatch Active">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">AirWatch Active</p>
                     <p class="products__about">Latest Generation Motion Tracking Sensor<br>
                        Heart Rate and Blood Pressure Monitor<br>
                        Sleep Monitor and Sedentary Reminder<br>
                        Activity Tracking (Steps, Calories, Distance)<br>
                        Multi Sports Detection and Analysis<br>
                        IP67 Certified Waterproof<br>
                        Notifications and Reminders (Calls, Messages, Facebook etc.)<br>
                        Crystal Clear High Definition Display<br>
                        Up to 10 Days of Battery Life</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=266857&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item health">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/kodo.jpg" width="460" height="320" alt="KODO Detox Patches">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">KODO Detox Patches</p>
                     <p class="products__about">All-Natural High-Quality Ingredients<br>
                        Releases Unwanted Toxins<br>
                        Increases Your Energy Levels<br>
                        Reduces Aches, Pains, Headaches, and Tiredness<br>
                        Relieves Stress and Improves Your Blood Circulation<br>
                        Improves Weight Loss and Skin Tone<br>
                        Totally Discreet: Works While You Sleep<br>
                        Easy-to-Use: Apply Patches One Hour Before Bed-Time</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=271904&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item devices">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/mosqi_stop_band.jpg" width="460" height="320" alt="MosqiStop Band">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">MosqiStop Band</p>
                     <p class="products__about">Bestseller Mosquito Repellent Band<br>
                        Highly Effective Technology with 6 Biological Waves<br>
                        Up to 240 Hours of Battery Life<br>
                        No Chemical Additives, No Odor, and No Noise<br>
                        Safe for Family (Only Affects Flying Insects, Not People)<br>
                        Perfect for Indoor and Outdoor Activities<br>
                        Suitable for Babies, Children and Pregnant Women</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=275301&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item kitchen">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/roboclean.jpg" width="460" height="320" alt="RoboClean UV">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">RoboClean UV</p>
                     <p class="products__about">The World's First Robot to Vacuum, Mop, and Sterilize<br>
                        Kills 99,9% of Bad Bacteria and Viruses<br>
                        Cleans and Mops All Spaces and Surfaces<br>
                        Humidifier and Aromatherapy Mode<br>
                        Automatic avoidance of obstacles<br>
                        Low Noise, High Coverage<br>
                        Extra Long Battery Time (120 min)</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=258466&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
   
            <article class="products__item kitchen">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/cool_pro.jpg" width="460" height="320" alt="IceBox">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">IceBox</p>
                     <p class="products__about">Super Fast Air Cooling<br>
                        Cools and Purifiers the Air<br>
                        5 Different Speeds<br>
                        Crystal Clear LCD Display<br>
                        Lightweight and Easy-to-Carry Around<br>
                        Sleep Mode to Use During the Night<br>
                        Ultra Low Noise with 7 Mood Lights<br>
                        375 ml Water Tank for Extra Long Cooling<br>
                        Freon Free and Ultra Low Power Consumption</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=261570&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>

            <article class="products__item clothing">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/dron.jpg" width="460" height="320" alt="DronePro 4K">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">DronePro 4K</p>
                     <p class="products__about">Two Movie Level 4K Cameras (Front and Bottom)
                     Ultra Wide 120 Degree Lens <br>
                     Very Compact, Folding and Portable <br>
                     Professional Level Altitude Hold <br>
                     One-Key Taking Off, Landing and Return to Starting Point <br>
                     Gesture Control to Take Pictures and Videos <br>
                     Real-Life Video Transmission and VR Support <br>
                     Mobile Control with Extended Battery Life</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=258488&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>

            <article class="products__item clothing">
               <div class="products__image">
               <div class='discount'>
               <img src="./img/discount_4.png" width="152" height="152" alt="50% discount">
            </div>
                  <img src="./img/offers/massage_gun.jpg" width="460" height="320" alt="MassageGun Pro">
               </div>
               <div class="products__content">
                  <div class="products__header">
                     <p class="products__title">MassageGun Pro</p>
                     <p class="products__about">Professional Therapeutic Mini Massage Gun
                     Ultra Compact and Lightweight (450g / 1lb) <br>
                     Relieves Muscle Soreness, Pain and Increases Blood Flow <br>
                     4 Interchangeable Massage Heads Included <br>
                     Powerful 3200 RPM High Speed Impact <br>
                     Ultra-Low Noise (45dB) <br>
                     Long Battery Life (180 minutes)</p>
                  </div>
                  <div class="products__price-wrapper">
                     <p class="products__new-price">50% Discount Per Unit</p>
                  </div>
                  <div class="products__footer">
                     <p class="products__cost">Free Shipping</p>
                     <p class="products__cost">Left in Stock: <span>Very Low</span></p>
                     <a href="https://securetrck-ec.com/?a=95408&c=258471&s2=((r))&s1=((a))" class="products__btn btn">Claim reward</a>
                  </div>
               </div>
            </article>
         </div>
      </div>
   </section>
      
      <section class="comments">
         <div class="container">
            <div class="comments__body">
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-7.png" alt="Frank Taylor">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Frank Taylor</p>
                     <p class="comments__text">I'm generally pretty 'meh' about doing surveys, but I thought I'd give this one
                        a shot. I have to say, it was really quick and easy! I mean, within a few minutes and just a few
                        simple questions, you're giving me the option to choose between four unbeatable gifts. I don't know
                        how you do it, but I'm all in! Thanks for the teeth whitener, my teeth look fantastic!</p>
                     <p class="comments__date f1-date">August 10, 2021 at 12:01 am</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-6.png" alt="Emily Philips">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Emily Philips</p>
                     <p class="comments__text">I've been bored in quarantine all week, so the survey was quick and easy. I wouldn't mind doing another one :)</p>
                     <p class="comments__date f2-date">August 7, 2021 at 2:24 pm</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-5.png" alt="Katie Webb">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Katie Webb</p>
                     <p class="comments__text">I had no use for the weight-loss product, and decided to give it to my friend. And believe it or not- she lost like 14 pounds in less than 2 weeks! Now I want the same one for myself!</p>
                     <p class="comments__date f3-date">August 5, 2021 at 11:55 am</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-4.png" alt="Julia Stafford">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Julia Stafford</p>
                     <p class="comments__text">I was bored so I did the survey, but I really liked the skin care cream, it worked really well!</p>
                     <p class="comments__date f4-date">August 4, 2021 at 8:47 am</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-3.png" alt="Thomas Harber">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Thomas Harber</p>
                     <p class="comments__text">When your five question survey popped up I thought there was no way the rewards were actually valued over $100. That's just being honest. But then I got to the end and got to select it and I thought, 'This is the greatest survey in the history of surveys!' Seriously though, I don't know how the data you collect helps you, or how you can afford to offer such great products, but I'm happy to take them off your hands. Let me know if you need another one done!</p>
                     <p class="comments__date f5-date">August 2, 2021 at 6:16 pm</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-2.png" alt="Roger Wright">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Roger Wright</p>
                     <p class="comments__text">Alright, so like the other people here, I'm pretty shocked at the choices given when you reach the end of that really short survey. I guess I expected some half-eaten sandwich or used dental floss, haha. Boy, was I wrong. You only asked me like a handful of questions and then you let me choose an e-Cigs kit? Looks like I got the far better end of this deal. Thanks for making it so quick and easy!</p>
                     <p class="comments__date f6-date">August 1, 2021 at 4:16 pm</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo-1.png" alt="Liz Brown">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Liz Brown</p>
                     <p class="comments__text">I haven't taken a multiple choice test since college, so when I saw the survey I had some flashbacks to my school days. Thankfully it was only five easy questions. I was genuinely impressed with the offers as well. When I've seen other surveys on ecommerce sites they usually offer trinkets. These are real products.</p>
                     <p class="comments__date f7-date">July 30, 2021 at 6:48 pm</p>
                  </div>
               </div>
               <div class="comments__item">
                  <div class="comments__photo">
                     <img src="./img/user/photo.png" alt="Barbara Meier">
                  </div>
                  <div class="comments__content">
                     <p class="comments__name">Barbara Meier</p>
                     <p class="comments__text">All of the products looked great, but none of them really applied to my current needs. What is a girl to do? Well, I decided to order the eCigs to try and help a friend break her smoking habit. So far, so good.</p>
                     <p class="comments__date f8-date">July 27, 2021 at 17:07</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   `
   function scrollToOffers(height) {
      $('body,html').animate({
         scrollTop: height
      }, 300);
   }

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
            mainWrapper.html(endStep())
            scrollToOffers(800)
            $('.products__item').hide()
            inspectionProducts()
         }
      }, time);
   }

   let inputCheckedValue = (name) => $(`input[name=${name}]:checked`).attr('data-value');
   let inputCheckedLength = (name) => $(`input[name=${name}]:checked`).length != 0;

   let textareaStep = () => {
      if ($('textarea').val().length != 0) {
         (() => data.question2_1_other = $(`textarea`).val())()
         content.html(question_2_2())
      }
   }

   // ----------------- OTHER STEPS --------------------------

   let otherStep = (value) => {
      switch (value) {
         case 'Other':
            content.html(question_2_1())
            break
         case 'Electronics':
            (() => products = value)()
            content.html(question_3_1()).addClass('electronic')
            break
         case 'Smart devices':
            (() => products = value)()
            content.html(question_3_2()).addClass('devices')
            break
         case 'Home/kitchen appliances':
            (() => products = value)()
            content.html(question_3_3()).addClass('kitchen')
            break
         case 'Health and beauty':
            (() => products = value)()
            content.html(question_3_4()).addClass('health')
            break
         case 'Clothing and accessories':
            (() => products = value)()
            content.html(question_3_5()).addClass('clothing')
            break
      }
   }

   let nextStep = () => {
      if (inputCheckedLength('question_1')) {
         (() => data.question1 = inputCheckedValue('question_1'))()
         content.html(question_2())
      } else if (inputCheckedLength('question_2')) {
         (() => data.question2 = inputCheckedValue('question_2'))()
         otherStep(data.question2)
      } else if (inputCheckedLength('question_2_2')) {
         (() => data.question2_2 = inputCheckedValue('question_2_2'))()
         content.html(question_2_3())
      } else if (inputCheckedLength('question_2_3')) {
         (() => data.question2_3 = inputCheckedValue('question_2_3'))()
         otherStep(data.question2_3)
      } else if (inputCheckedLength('question_3') && inputCheckedValue('question_3') != 'Other' || inputCheckedValue('question_3') === 'Other' && $('input[type=text]').val() != '') {
         (() => data.question3 = inputCheckedValue('question_3'))()
         content.html(question_4())
      } else if (inputCheckedLength('question_4') && inputCheckedValue('question_4') != 'Other' || inputCheckedValue('question_4') === 'Other' && $('input[type=text]').val() != '') {
         (() => data.question4 = inputCheckedValue('question_4'))()
         content.html(question_5())
      } else if (inputCheckedLength('question_5') && inputCheckedValue('question_5') != 'Other' || inputCheckedValue('question_5') === 'Other' && $('input[type=text]').val() != '') {
         (() => data.question5 = inputCheckedValue('question_5'))()
         content.html(question_6())
      } else if (inputCheckedLength('question_6') && inputCheckedValue('question_6') != 'Other' || inputCheckedValue('question_6') === 'Other' && $('input[type=text]').val() != '') {
         (() => data.question6 = inputCheckedValue('question_6'))()
         content.html(question_7())
      } else if (inputCheckedLength('question_7') && inputCheckedValue('question_7') != 'Other' || inputCheckedValue('question_7') === 'Other' && $('input[type=text]').val() != '') {
         (() => data.question7 = inputCheckedValue('question_7'))()
         submitForm()
         content.html(loadingStep())
         addTrackingPixel()
      }
   }

   let contentClass = (nameClass) => $('div').is(`${nameClass}`)

   const textareaValue = () => {
      if (contentClass('.question_3')) {
         (() => data.question3_other = $('input[type=text]').val())();
      } else if (contentClass('.question_4')) {
         (() => data.question4_other = $('input[type=text]').val())();
      } else if (contentClass('.question_5')) {
         (() => data.question5_other = $('input[type=text]').val())();
      } else if (contentClass('.question_6')) {
         (() => data.question6_other = $('input[type=text]').val())();
      } else if (contentClass('.question_7')) {
         (() => data.question7_other = $('input[type=text]').val())();
      }
   }

   const test = () => {

      if ($('form').hasClass('error')) {
         $('#error').text('This field is required.')
      }

      $('input[type=radio]').on('change', function () {
         addCheckInput();
         form.removeClass('error')
         $('#error').text('');
      })

      $('input[type=text]').on('change', function () {
         $('#error').text('');
      })

      // проверяем совпадения data-value
      const addCheckInput = function () {
         let allInputs = content.find('input:checked');
         $.each(allInputs, function (index, value) {
            if ($(this).attr('data-value') == 'Other') {
               $('input').addClass('show')
               $('input').attr('required', true)
               $('input').on('change', function () {
                  textareaValue()
               })
            } else {
               $('input').removeClass('show')
               $('input').removeAttr('required')
            }
         })
      }
   }

   const Up = () => {
      $('body,html').animate({ scrollTop: top }, 150);
   }
   Up()

   // ----------------- STEPS --------------------------

   let inputStep = () => {
      if ($(`input`).hasClass('valid')) {
         (() => data.email = $(`input`).val())()
         submitEmailForm()
         content.html(question_1())
         Up()
      }
   }

   const changeSteps = function () {
      if (contentClass('.firstScreen')) {
         inputStep()
      } else if (contentClass('.question_1')) {
         nextStep()
      } else if (contentClass('.question_2')) {
         nextStep()
      } else if (contentClass('.question_2_1')) {
         textareaStep()
      } else if (contentClass('.question_2_2')) {
         nextStep()
      } else if (contentClass('.question_2_3')) {
         nextStep()
      } else if (contentClass('.question_3')) {
         nextStep()
      } else if (contentClass('.question_4')) {
         nextStep()
      } else if (contentClass('.question_5')) {
         nextStep()
      } else if (contentClass('.question_6')) {
         nextStep()
      } else if (contentClass('.question_7')) {
         nextStep()
         Up()
         userProgress(20)
      }
   }

   content.on('click', 'button', function (e) {
      $('.form').addClass('error')
      changeSteps()
      test()
   })

   const resetValue = () => {
      email = '';
      question1 = '';
      question2 = '';
      question2_1_other = '';
      question2_2 = '';
      question2_3 = '';
      question3 = '';
      question3_other = '';
      question4 = '';
      question4_other = '';
      question5 = '';
      question5_other = '';
      question6 = '';
      question6_other = '';
      question7 = '';
      question7_other = '';
   }

   // Функция валидации и вывода сообщений
   form.validate()

   // отпраква формы 
   let submitForm = () => {
      $.ajax({
         type: 'POST',
         url: './success.php',
         data: {
            email: data.email,
            question1: data.question1,
            question2: data.question2,
            question2_1_other: data.question2_1_other,
            question2_2: data.question2_2,
            question2_3: data.question2_3,
            question3: data.question3,
            question3_other: data.question3_other,
            question4: data.question4,
            question4_other: data.question4_other,
            question5: data.question5,
            question5_other: data.question5_other,
            question6: data.question6,
            question6_other: data.question6_other,
            question7: data.question7,
            question7_other: data.question7_other,
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
      months = ["January", "February", "March", "April", "July", "June", "July", "August", "September", "October", "November", "December"],
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

      // EDIT TIME HERE IF YOU WISH TO UPDATE TIME OF THE COMMENTS, PLEASE BE CAREFULL TO LEAVE EXACT SAME STRUCTURE (EDIT BETWEEN "")
      time = ["12:01 am", "2:24 pm", "11:55 am", "8:47 am", "6:16 pm", "4:16 pm", "6:48 pm", "17:07"],
      d = new Date(),
      dateNow = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

   for (var comments = document.querySelectorAll(".comments__item"), i = 1; i <= comments.length; i++) mydate = new Date, i >= 3 && i <= 4 ? 3 == i ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)) : i > 4 ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)), year = mydate.getYear(), year < 1e3 && (year += 1900), day = mydate.getDay(), month = mydate.getMonth(), daym = mydate.getDate(), daym < 10 && (daym = daym), document.getElementsByClassName("f" + i + "-date")[0].innerHTML = months[month] + " " + (daym) + ", " + year + " at " + time[i - 1];

   // ----------------------------------------------------------------------

})