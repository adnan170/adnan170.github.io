
<?php
error_reporting(0);
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
$sql1 = "select * from registration where email='".$_COOKIE["user"]."';";
$result1 = mysqli_query($con, $sql1);
$row=mysqli_fetch_array($result1);
//print $sql;
mysqli_close($con);

//header("Location:login.php?err=Registration done! you may login now");

?>
<html>
<head>
 <link rel="stylesheet" type="text/css" href="table.css"/> 

<script>

	function f()
	{
		location="delete.php";
	}
</script>
</head>


<body>

<br>

<table align="center">

<tr>
<td>First Name: </td>
<td><input type="text" value="<?php echo $row["Fname"]?>" readonly></td>
</tr>

<tr>
<td>Last Name: </td>
<td><input type="text" value="<?php echo $row["Lname"]?>" readonly></td>
</tr>

<tr>
<td>Email: </td>
<td><input type="text" value="<?php echo $row["Email"]?>" readonly></td>
</tr>

<tr>
<td>Gender </td>
<td><input type="text" value="<?php echo $row["Gender"]?>" readonly></td>
</tr>

</table>


<br><br><br><br><br>

<?php

if(isset($_COOKIE["user"]))
{
	$_COOKIE["user"];
}
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
//$new= isset($_POST["type"]);
$sql="Select * from booking where name='".$_COOKIE["user"]."'";

				$result=mysqli_query($con, $sql);
				$row=mysqli_fetch_array($result);
				if($row>0)
				{

?>

<html>

<head>
</head>
<body>
<center>   <h3><font face="verdana" color="grey">  Your Appointments  </font></h3></center>
<table border="2" width="80%" height="30%" >
		    <thead>
				<td><center>ACTION</center></td>
		        <td><center>ID</center></td>
		        <td><center>EMAIL</center></td>
		        <td><center>DATE</center></td>
		        <td><center>TIMINGS</center></td>
				<td><center>DOCTOR</center></td>
		        <td><center>ACTION</center></td>
		    </head>
		    <?php 

            foreach ($result as $key => $user) :
            	?>
		    <tr>
			
				
				
				<td  class="text-left"><center><a href=delete.php?id=<?php echo $user['id'] ?>>Cancel Appointment</a></center></td>
		        <td  class="text-left"><center><?php echo $user['id'] ?></center></td>
		        <td  class="text-left"><center><?php echo $user['Name']; ?></center></td>
		        <td  class="text-left"><center><?php echo $user['Date']; ?></center></td>
				<td  class="text-left"><center><?php echo $user['Timings']; ?></center></td>
				<td  class="text-left"><center><?php echo $user['doctor']; ?></center></td>
		       <td  class="text-left"><center><a href=resch.php?id=<?php echo $user['id'] ?>>Reschedule Appointment</a></center></td>
		    </tr>
            
            
		   <?php endforeach; ?>
		</table>


</body>

</html>
<?php
				}
				else
				{
					?>
					<html>

<head>
</head>
<body>
<center>   <h3><font face="verdana" color="grey">  No Appointments Yet  </font></h3></center>
<?php
				}
?>












</body>
</html>



