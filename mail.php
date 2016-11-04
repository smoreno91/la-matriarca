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
/*	if (mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers)) {
    echo "Mail Sent.";
  } else {
    echo "failed";
  }*/
  
  /*require 'vendor/autoload.php';
$sendgrid = new SendGrid("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");
$email    = new SendGrid\Email();

$email->addTo($mailTo)
      ->setFrom("info@lamatriarca.com")
      ->setSubject($subject)
      ->setHtml($body);

$sendgrid->send($email);*/
require 'vendor/autoload.php';
Dotenv::load(__DIR__);
$sendgrid_apikey = "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";
$sendgrid = new SendGrid($sendgrid_apikey);
$url = 'https://api.sendgrid.com/';
$pass = $sendgrid_apikey;
$template_id = '1';
$js = array(
  'sub' => array(':name' => array('Elmer')),
  'filters' => array('templates' => array('settings' => array('enable' => 1, 'template_id' => $template_id)))
);

$params = array(
    'to'        => $mailTo,
    //'toname'    => "Example User",
    'from'      => "info@lamatriarca.co",
    //'fromname'  => "Your Name",
    'subject'   => $subject,
    //'text'      => "I'm text!",
    'html'      => $body,
    'x-smtpapi' => json_encode($js),
  );

$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
// Tell PHP not to use SSLv3 (instead opting for TLS)
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $sendgrid_apikey));
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);
}
?>  