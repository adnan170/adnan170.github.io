<?php 

$date = $_REQUEST["date"];
$time = $_REQUEST["time"];
//echo $time;
//echo $date;
//echo $_REQUEST["id"];
//echo $p_name1;
//echo $p_price1;
//echo $descrip;
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
$sql="update booking set Date='".$date."', Timings='".$time."' where id= '".$_REQUEST["id"]."'; ";
print $sql;
$result = mysqli_query($con, $sql);
require_once "PHPMailerAutoload.php";
date_default_timezone_set( 'America/New_York' );

$mail = new PHPMailer;

	
$mail->isSMTP();            
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;                          
$mail->Username = "ualbanyhealthcare@gmail.com";                 
$mail->Password = "Jimit1247";                           
$mail->SMTPSecure = "tls";                           
$mail->Port = 587;                                   
$mail->From = "ualbanyhealthcare@gmail.com";
$mail->FromName = "do-not-reply";
$mail->addAddress("jpatel4@albany.edu", "Jim");
$mail->isHTML(true);
$mail->Subject = "Important [Regarding Appointments]";
$full_name=$_COOKIE["user"];
$text_message="Regards,<br>Ualbany Health Care+<br>Phone: +1(518)442-5454 <br> Email: askUHC@albany.edu";
$body_message="Your appointment has been re-scheduled on date";
$body_message .= " [ ".$_SESSION["date"]." ] ";
$body_message .= " time ";
$body_message .= " [ ".$_SESSION["time"]." ] ";
$message  = "<html><body>";
$message .= "<table width='100%' bgcolor='#e0e0e0' cellpadding='0' cellspacing='0' border='0'>";
$message .= "<tr><td>";
$message .= "<table align='center' width='100%' border='0' cellpadding='0' cellspacing='0' style='max-width:100%; background-color:#fff; font-family:Verdana, Geneva, sans-serif;'>";
$message .= "<thead>
  <tr height='80'>
  <th colspan='4' style='border-bottom:solid 1px #bdbdbd; font-family:Source Sans Pro, Arial, sans-serif;font-size: 30px;font-weight: 700;text-transform: uppercase; color:#c762cb;' >Ualbany Health Care+</th>
  </tr>
  </thead>";

$message .= "<tbody>
       <tr align='center' height='50' style='font-family:Verdana, Geneva, sans-serif;'>
       <td style='background-color: GREY; text-align:center;'></td>
       
       </tr>
       <tr>
       <td colspan='4' style='padding:15px;'>
       <p style='font-size:20px;'>Hi' ".$full_name.",</p>
       <hr />
       <p style='font-size:25px;'>".$body_message."</p>
       <p style='font-size:15px; font-family:Verdana, Geneva, sans-serif;'>".$text_message.".</p>
       </td>
       </tr>
       <tr height='80'>
       <td colspan='4' align='center' style='background-color:#f5f5f5; border-top:dashed #00a2d1 2px; font-size:24px; '>
       </td>
       </tr>
       </tbody>";
    
$message .= "</table>";
$message .= "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";
$mail->Body = $message;
$mail->AltBody = "If you cant view the mail please contact us through email or phone.";
if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    header("location:mprofile.php?err=Your Appointment Has Been Rescheduled.You will receive an email soon regarding appointment");
}


?>