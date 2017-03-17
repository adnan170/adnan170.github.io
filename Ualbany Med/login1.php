<head>

<script>
    <?php
	   if(isset($_REQUEST["err"]))
	      {
			   ?>alert ("<?php echo $_REQUEST["err"];?>");
			   window.location='index.php';
		<?php  }
		
		
	?>
  </script>
</head>

<?php

//header("hi");
$user = $_REQUEST["uname"];
$pass = $_REQUEST["pass"];

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
$sql = "select * from registration where EMAIL='".$user."' and PASSWORD='".$pass."';";
print $sql;
$result = mysqli_query($con, $sql);



$number=mysqli_num_rows($result);
	$row = mysqli_fetch_array($result);
	 //$st=$row['status'];
	//while($row = mysqli_fetch_array($result))
	//{

	 
	
if($number==1 )
    	{
			
	  setcookie("user",$user, time()+3600);
	  setcookie("id",$row["id"],time()+3600);
	 header("Location:navigation.php");	
	//echo "yes";
		}
    else
   	 {
		//echo "no";	
	  header("Location:index.php?err=Incorrect Username/Password or Blocked user");
   	 }
	
//}
//echo $pass && $st==1;

mysqli_close($con);
?>










