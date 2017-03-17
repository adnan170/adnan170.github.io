<?php

error_reporting(0);
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
$sql = "select * from registration where email='".$_COOKIE["user"]."';";
$result = mysqli_query($con, $sql);
$row=mysqli_fetch_array($result);

$name=$row["Fname"];
//$lname=$row["Lname"];
//echo $name;
//print $sql;




mysqli_close($con);

//header("Location:login.php?err=Registration done! you may login now");

?>

<html>

<head>
</head>
<body>
<center>   <h3><font face="verdana" color="grey">  Your Appointments  </font></h3></center>
<table align="center" border="2" width="80%" height="30%" >
		    <tr>
				
		        <td><center>ID</center></td>
				
		        <td><center>PATIENT EMAIL</center></td>
		        <td><center>DATE</center></td>
		        <td><center>TIMINGS</center></td>
				
		    </tr>
		    <?php 
			$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
			
			$sql1="Select * from booking where doctor='".$name."'";
				//	print $sql1;
				$result1=mysqli_query($con, $sql1);

            foreach ($result1 as $key => $user) :
            	?>
		    <tr>
			
				
				
				
		        <td><center><?php echo $user['id'] ?></center></td>
		       
				<td><center><?php echo $user['Name']; ?></center></td>
				<td><center><?php echo $user['Date']; ?></center></td>
		      <td><center><?php echo $user['Timings']; ?></center></td>
		    </tr>
            
            
		   <?php endforeach; ?>
		</table>
		<br>
		<br>


</body>

</html>
