<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

if (isset($_POST["phone"])) {

    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    // $email = htmlspecialchars($_POST["email"]);

    $to_email = "esen_31_03@mail.ru";
    $from_email = "yessen3103@gmail.com";
//    $from_email = "admin@" . $_SERVER['SERVER_NAME'];

    $subject = "Обратная связь с контактной формы yandex-nvc.com";
    $message_to_myemail = "Здравствуйте!" . "<br/>" .
    "С контактной формы сайта yandex-nvc.com получено сообщение!" . "<br/>" .
    "Имя: " . $name . "<br/>" .
    "Телефон: " . $phone . "<br/>";

    $message_to_myemail .= "Конец сообщения. Удачи вам в работе!";


    require 'PHPMailerAutoload.php';

    echo $message_to_myemail;

//Create a new PHPMailer instance
     $mail = new PHPMailer;

 //Tell PHPMailer to use SMTP
     $mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
     $mail->SMTPDebug = 0;

//Set the hostname of the mail server
     $mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
     $mail->Port = 465;

//Set the encryption system to use - ssl (deprecated) or tls
     $mail->SMTPSecure = 'ssl';

     $mail->CharSet = "UTF-8";

//Whether to use SMTP authentication
     $mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
     $mail->Username = 'yessen3103';

//Password to use for SMTP authentication
     $mail->Password = 'Zhan31031999';

//Set who the message is to be sent from
     $mail->setFrom($from_email);

//Set an alternative reply-to address
     $mail->addReplyTo($from_email, 'Yessenaly');

//Set who the message is to be sent to
     $mail->addAddress($to_email);

//Set the subject line
     $mail->Subject = $subject;

     $mail->isHTML(true);

//Set body message
     $mail->Body = “Имя $name . Телефон $number . Почта $email”; // Текст письма

//send the message, check for errors
    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
    }
}


header ("Location:../thanks.html");
