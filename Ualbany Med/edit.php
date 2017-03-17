<html>

<head>

<script>
    <?php
	   if(isset($_REQUEST["err"]))
	      {
			   ?>alert ("<?php echo $_REQUEST["err"];?>");
			   window.location='student.php';
		<?php  }
		
		
	?>
  </script>
</head>
</html>



<?php
error_reporting(0);
$con = mysqli_connect("localhost","root","");
		mysqli_select_db($con, "se");
		
	
		
		
		$sql="Select * from booking where id='".$_REQUEST["id"]."';";
		//print $sql;
		$result=mysqli_query($con,$sql);
		 $row = mysqli_fetch_array($result);
		 		 $date=$row['Date'];
		 
		 $timings=$row['Timings'];
		  
		  
		$sql1="Select * from addslots where Date='".$date."';";  
		$result1=mysqli_query($con, $sql1);
		
		 
		 		// $date1=$row1['Date'];
		
		mysqli_close($con);

 ?>
 
 
 <html>
 <head>
 </head>
 <body>
<center>
 <form align="center" method="post" action="reschedule.php?id=<?php echo $_REQUEST["id"]?>"
<font style="color:#FFF;">
<table cellspacing="20px" cellpadding="20px;">
   <tr>
   <td><input type="hidden" value="<?php "$_REQUEST[id]"?>" name="pid2" /></td> 
   </tr>
    <tr>
      <td><font style="color:#000;"><font size="+2">Date</td>
      <td><font color="#000000"><input type="date" name="date" value="<?php echo $date ?>"/></td>
   </tr>
   
   
    <tr>
      <td><font style="color:#000;"><font size="+2">Timings</td>
      <td><font color="#000000">
	 
 <select name="time" value=<?php echo $timings?> >
 <?php 

	 
		 while ($row1 = mysqli_fetch_array($result1)) 
		 {
            echo '<option >'.$row1['time'].'</option>';
	     }	 
?>	 
	 </select> 
	 </td>
   </tr>
   
   
  
      <td colspan="2"><center> <input type="submit" name="submit" value="update" style="width:100px; height:50px; margin-top:20px;"/></center></td>
   </tr>
</table>

</font>
</font>
</form>
</center>
</body>
</html>