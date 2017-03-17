

<html>


<head>

 <!--<script>
	


$(function() {

var urlmaterial = getUrlParameter('material');
if(urlmaterial){
	//$("input[name=material][value="+urlmaterial+"]").prop("checked",true);	
	$('select[name=material]').val(urlmaterial);
}




	var genderSelected = '<?php echo $_GET['gender'];?>';
	var styleSelected = '<?php echo $_GET['style'];?>';
	$('.next').on('click',function(){
	   var selectedMaterial = $('select[name=material]').val();
		if(selectedMaterial == 'Select'){
			alert("please select material"); 		
	    	return false;
		}else{
			location="selectcolor.php?gender="+genderSelected+"&style="+styleSelected+"&material="+selectedMaterial;
		}
	});  

	$('.back').on('click',function(){
		//alert('clicked');
		location="ctshirt.php?gender="+genderSelected+"&style="+styleSelected;
	});

});
	</script>-->
</head>

</html>


<?php
error_reporting(0);
session_start();


$date= $_POST["date"];
$_SESSION["date"]=$date;
 $_SESSION["date"];
//echo $date;
//$department=$_POST["department"];
//$_SESSION["department"]=$department;
//echo $department;
//$time=$_POST["time"];
//$_SESSION["time"]=$time;
//echo $time;

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
//$sql="select `time` from `addslots` where Date='".$_SESSION["date"]."'; ";
//$sql = "select `doctor_name`,`image_path` from  `doctor` where department='".$department."';";
$result = mysqli_query($con, $sql);
//print $sql;

$image=$row['image_path'];
echo $image;
 
//$name= $row['doctor_name'];

//$image=$row['doctor_image'];

mysqli_close($con);


//header("Location:binfo.php");

?>

<form method="post" action="adding.php">
<br>
<br>
Name : <?php if(isset($_COOKIE["user"]))
{
	echo $_COOKIE["user"];
}
	?><br/>

Date of Appointment : <?php  echo $_SESSION["date"];?><br/><br/>

Timings: 
<select required id="time" name="time" >
<option value="">---select---</option>
     <?php
$con =mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");
$select="select";
if(isset($select)&&$select!=""){
$select=$_POST['time'];
}
?>
<?php
$sql="select `time` from `addslots` where Date='".$_SESSION["date"]."';";
$list=mysqli_query($con,$sql);
print $sql;
while($row_list=mysqli_fetch_assoc($list)){
?>
<option value="<?php echo $row_list['time']; ?>">
 
 <?php echo $row_list['time']; ?>
</option>
<?php
}
?>

</select><br/><br/>

Department: <select required name="department" >
<option value="">----Select---- </option>
<option value="Physician"> Physician</option>
<option value="Orthopaedic"> Orthopaedic</option>
<option value="Dermatologist"> Dermatologist</option>
<option value="Cardiologist"> Cardiologist</option>
<option> </option>
</select><br/><br/>


<input type="submit" Value="NEXT">

<!--Timings : <?php  echo $_SESSION["time"];?><br/>

Department : <?php  echo $_SESSION["department"];?><br/><br/>

Name of Patient: <input type="text" name="name" id="name" ><br/><br/>

Age: <input type="number" name="age" ><br/><br/>-->



 




</form>


