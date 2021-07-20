<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$shopOn = htmlspecialchars($_POST["inputValue"]);
$shopOnOther = htmlspecialchars($_POST["otherTextValue"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
// $myemail = "funfot@ya.ru"; // e-mail администратора

// Отправка письма администратору сайта

// $tema = "Тема письма админу";
// $message_to_myemail = "Текст письма:
// <br><br>
// Имя: $name<br>
// E-mail: $email<br>
// Телефон: $tel<br>
// Чек-бокс: $check<br>
// Радио: $radio<br>
// Источник (ссылка): $refferer
// ";

// mail($myemail, $tema, $message_to_myemail, "From: Sitename <reg@wayup.in> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

// Отправка письма пользователю

// $tema = "Тема письма клиенту";
// $message_to_myemail = "
// Текст письма<br>
// Файл: <a href='http://numbers.andrewgavrilov.me/form/files/ripple.zip' download>Название файла</a>

// ";
// $myemail = $email;
// mail($myemail, $tema, $message_to_myemail, "From: Sitename <reg@wayup.in> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

// Сохранение инфо о лидах в файл leads.xls

if (!empty($email)) {
   $d = fopen("leads.xls", "a+");
   fwrite($d," <tr>");     
   fwrite($d," <td>$email</td> <td>$refferer</td> <td>$date / $time</td>"); 
   fwrite($d," </tr>");  
   fwrite($d,"\n ");    
   fclose($d);
} elseif (empty($email) && $shopOn !== 'Other') {
   $d = fopen("leads.xls", "a+");
   fwrite($d," <tr>");     
   fwrite($d," <td>$shopOn</td> <td>$date / $time</td>"); 
   fwrite($d," </tr>");  
   fwrite($d,"\n ");    
   fclose($d);
} elseif ($shopOn === 'Other') {
   $d = fopen("leads.xls", "a+");
   fwrite($d," <tr>");     
   fwrite($d," <td>$shopOn</td> <td>$shopOnOther</td> <td>$date / $time</td>"); 
   fwrite($d," </tr>");  
   fwrite($d,"\n ");    
   fclose($d);
}
?>