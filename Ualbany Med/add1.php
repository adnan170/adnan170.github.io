
<html>

<head>

</head>
<body>
	<style>
		
		.new{
			
			width:auto;
			height:400px;
			float:left;
			
			
		}
		</style>
	
</body>
</html>

<?php 
error_reporting(0);
session_start();

 $_SESSION["date"];
//echo $date;
$department=$_POST["department"];
$_SESSION["department"]=$department;
//echo $department;
$time=$_POST["time"];
$_SESSION["time"]=$time;
//echo $time;

$doctor= $_POST["doctor"];
$_SESSION["doctor"]=$doctor;
 $_SESSION["doctor"];




?>

<form method="post" action="final.php">
Date of Appointment : <?php  echo $_SESSION["date"];?><br/><br/>

Timings: <?php echo $_SESSION["time"]; ?><br/><br/>


Department: <?php  echo $_SESSION["department"];?><br/><br/> 



<!--Name : <?php echo isset($_COOKIE["user"]); ?> <br/>-->


 
<?php $con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
//$sql="select `time` from `addslots` where Date='".$_SESSION["date"]."'; ";
$sql = "select `doctor_name`,`image_path`,`Info` from  `doctor` where department='".$department."';";
$result = mysqli_query($con, $sql);
//print $sql;

$image=$row['image_path'];


			while($row = mysqli_fetch_array($result))
 {

    {
		
		$image=$row['image_path'];
		
		
		
        echo "<p>Available Doctor:" . $row['doctor_name'] . "</p></br>";
		 echo "<p>Information:<br/>" . $row['Info'] . "</p></br>";
		echo '<center><img src="images/'.$image.'" style="width:220px; height:250px;"></center>';
		
		
		
		 
    }
		 }
		
 

//$name= $row['doctor_name'];

//$image=$row['doctor_image'];





mysqli_close($con);

?>


Select Doctor:
<select required id="doctor" name="doctor">
<option value="">---select---</option>
     <?php
$con =mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
$select="select";
if(isset($select)&&$select!=""){
$select=$_POST['doctor'];
}
?>
<?php
$sql="select `doctor_name` from  `doctor` where department='".$department."';";
$list=mysqli_query($con,$sql);
print $sql;
while($row_list=mysqli_fetch_assoc($list)){
?>
<option value="<?php echo $row_list['doctor_name']; ?>">
 
 <?php echo $row_list['doctor_name']; ?>
</option>
<?php
}
?>

</select><br/><br/>

 
<br/>


<br>

<input type="submit" Value="Confirm Doctor">
</form>






