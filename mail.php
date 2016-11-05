<?php
if(isset($_POST['email'])){
	$mailTo = "smoreno91@gmail.com";
	$subject = "Correo desde www.lamatriarca.co";
	
	$postEmail	 = $_POST['email'];
	$postName	 = $_POST['name'];
	$postSubject = $_POST['subject'];
	$postMessage = $_POST['message'];
	
	$body = "Nuevo mensaje enviado desde la página web
<br><br>
CORREO: ".$postEmail."<br>
NOMBRE: ".$postName."<br>
ASUNTO: ".$postSubject."<br>
MENSAJE: ".$postMessage = $_POST['message']."<br>";	

	$headers = "To: Restaurante La Matriarca <".$mailTo.">\r\n";
	$headers .= "From: ".$postName." <".$postEmail.">\r\n";
	$headers .= "Content-Type: text/html";
	
	//envio destinatario
	//if (mail($to, $subject, $message, $headers)) {
	/*if (mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers)) {
    echo "Mail Sent.";
  } else {
    echo "failed";
  }*/
  require 'lib/swift_required.php';
  require 'mailgun-credentials.php';

// Create the Transport
$transport = Swift_SmtpTransport::newInstance('smtp.mailgun.org', 25)
  ->setUsername($LOGIN)
  ->setPassword($PASSWORD)
  ;

// Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);

// Create a message
$message = Swift_Message::newInstance($postSubject)
  ->setFrom(array($postEmail => $postName))
  ->setTo(array($mailTo))
  ->setBody($body)
  ;

// Send the message
echo $mailer->send($message);
}
?>  