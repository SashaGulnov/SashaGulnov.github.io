<?php
   // 
   // PHP mailer
   // 

   // use PHPMailer\PHPMailer\PHPMailer;
   // use PHPMailer\PHPMailer\Exception;
   // use PHPMailer\PHPMailer\SMTP;

   // require './PHPMailer/src/Exception.php';
   // require './PHPMailer/src/PHPMailer.php';
   // require 'PHPMailer/src/SMTP.php';

   // $mail = new PHPMailer(true);
   // $mail -> CharSet = 'UTF-8';
   // $mail->isSMTP();
   // $mail->SMTPAuth   = true;
   // $mail -> setLanguage('ru', './PHPMailer/language/');
   // $mail -> isHTML(true);

   // $mail->Host = 'ssl://smtp.mail.ru';
   // $mail->Username   = 'kirill_titarenko98@mail.ru'; // Логин на почте
   // $mail->Password   = 'pgyu7Dn1wpNyK2jleVeU'; // Пароль на почте
   // $mail->SMTPSecure = 'ssl';
   // $mail->Port       = 465;

   // $mail -> setFrom('kirill_titarenko98@mail.ru', 'Кирилл');
   // $mail -> addAddress('kurkuedova.na@icloud.com');
   // $mail -> Subject = 'Hey!';

   // $body = '<h1>НАЧАЛО</h1>';

   // if(trim(!empty($_POST['name']))) {
   //    $body.='<p>Имя: '.$_POST['name'].'</p>';
   // }

   // if(trim(!empty($_POST['number']))) {
   //    $body.='<p>Номер: '.$_POST['number'].'</p>';
   // }

   // $mail -> Body = $body;

   // if (!$mail->send()) {
   //    $message = 'Error';
   // } else {
   //    $message = $_POST['name'];
   // }

   // $response = array('message'=>$message);

   // echo json_encode($response);

   //
   // Простой обработчик
   //

   $name = $_POST['name'];
   $number = $_POST['number'];
   $response = array('name'=>$name);
   echo json_encode($response);

?>