<?php


if(isset($_COOKIE["user"]))
{
	echo $_COOKIE["user"];
}

session_start();
//$_SESSION["vaccine"];
 $_SESSION["vaccine"];

//echo $_SESSION["vaccine"];
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
$sql = "INSERT INTO `activeuser`(`id`, `Name`, `Vaccination`) VALUES (NULL,'".$_COOKIE["user"]."','".$_SESSION["vaccine"]."');";
$result = mysqli_query($con, $sql);
print $sql;
mysqli_close($con);


header("Location:proceddpayment.php?err=inserted");

?>