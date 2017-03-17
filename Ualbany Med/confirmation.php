

<?php
error_reporting(0);
session_start();
$vaccine=$_POST["vaccination"];
$_SESSION["vaccine"]=$vaccine;



if(isset($_COOKIE["user"]))
{
	//echo $_COOKIE["user"];
}

?>



<!DOCTYPE html>
<html>
<head>
<title> Confirmation Page </title>
</head>

<body>


<style>
h3 {
    text-align: center;
}
</style>


<?php


$time=$_POST["time"];
$vaccination=$_POST["vaccination"];

$_SESSION["vaccine"]= $vaccination;
//echo $_SESSION["vaccine"];

echo "<h3>" . 'Name:   '.$_COOKIE["user"];
echo "<h3>" . 'Date:   ' .$_SESSION["date"];
echo "<h3>" . 'Time:   ' .$time;
echo "<h3>" . 'Vaccination:   ' .$vaccination;
?> 
<form method="post" action="confirm1.php">
<input type="submit" value="Confirm and Pay" name="pay">
</form>

 <br>





</html>
