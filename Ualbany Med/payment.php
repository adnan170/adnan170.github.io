<!DOCTYPE html>

<head>
<title> Payment Page</title>
</head>
<body>



<br>
<style>
h2 {
    text-align: center;
}
</style>

<?php
error_reporting(0);
session_start();



$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"se");
$sql=mysqli_query($con,"SELECT * FROM payment where medicalissue='".$_SESSION["vaccine"]."'");
// you should edit the above query instead of the userinfo table you should take the vaccination value from the welcome.php 'select tag' i.e., whichever vaccination user is selecting that should be mapped with the vaccination in the payment table.

$medicalissue='medicalissue';
$cost='cost';
$rows=mysqli_fetch_assoc($sql);
echo "<h2 style='color:GREY'>" . 'Medical Issue:   ' . $rows[$medicalissue] . '<br/><br/>' . 'Cost:   $' . $rows[$cost].' '."</h2>";
?>






<br/>
<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" align="center">
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="FDQUPWT2T5STW">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="button_subtype" value="services">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="cn" value="Add special instructions to the seller:">
<input type="hidden" name="amount" value="<?php if(isset($rows[$cost]) && !empty($rows[$cost]))echo $rows[$cost]; ?>">
<input type="hidden" name="no_shipping" value="2">

<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynowCC_LG.gif:NonHosted">
<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>




<br/><br/><br/><br/><br/><br/><br/>




</body>
</html>
