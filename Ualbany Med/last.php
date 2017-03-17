

<html>
<head>

</head>

<?php 
error_reporting(0);
session_start();

$_SESSION["date"];
$_SESSION["department"];
$_SESSION["time"];
$doctor=$_POST["doctor"];
$_SESSION["doctor"]=$doctor;





?>

<div style="width: 300px; height:400px; ">
<form method="post" action="last1.php">

Name: <?php if(isset($_COOKIE["user"]))
{
	echo $_COOKIE["user"];
}
	?> <br/><br/>

Date of Appointment : <?php echo $_SESSION["date"];?><br/><br/>

Timings: <?php echo $_SESSION["time"];?><br/><br/>

Specialist: <?php echo $_SESSION["department"];?><br/><br/>

Doctor: <?php echo $_SESSION["doctor"];?><br/><br/>
<input type="submit" value="Confirm" >

</form>


</div>
</html>



