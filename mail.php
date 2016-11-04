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
	if (mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers)) {
    echo "Mail Sent.";
  } else {
    echo "failed";
  }
}
?>  