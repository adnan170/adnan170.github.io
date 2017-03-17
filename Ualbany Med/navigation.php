<html>
<head>
</head>
<body>
<?php 

$con = mysqli_connect("localhost","root","","se");

$sql = "SELECT `type` from `registration` where Email='".$_COOKIE['user']."'";

//$result = mysqli_query($con, $sql);
//print $sql; 

$mq = mysqli_query($con,$sql) ;
$row = mysqli_fetch_array($mq);

$store=$_COOKIE["user"];

 // $id=$row['id'];
  //  $_SESSION['pid']=$id;
   $s=$row['type'];
//$_SESSION['s1']=$s;
  // echo $s;



     if(isset($_COOKIE["user"]))
	 
	 {
		 	
		 $value=$_COOKIE["user"];
		
		 if($value == 'yashnaparikh@gmail.com')
		 {
			 ?>
             <?php
	 if(isset($_COOKIE["user"]))
   {
	   
	  // echo $_COOKIE["user"];
	  ?>



<?php
   }
   ?>
   <?php
   header("Location:admin.php");
?>	
	
	 <?php 	 
		 }
  else if ( $s=="p")
	  
  { //echo $s;
  ?>
  
   
   
   
 <!--user-->  
<!--header-->
<?php
	header("Location:student.php");
?>   
<?php
  }
  else if( $s=="d")
  {
	  ?>
	  <?php
	  header("Location:doctor.php");
?>
	  <?php	  
  }
  else
  {	  
  ?>
  <?php
  header("Location:index.php");
?>	
<?php
  }
	
}
?>	
	 
 </head>
 </html>