<?php
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
$sql = "insert into `addslots` (`id`,`time`,`Date`) values(NULL, '".$_POST["time"]."','".$_POST["date"]."');";
$result = mysqli_query($con, $sql);
print $sql;
mysqli_close($con);


header("Location:admin.php?err=inserted");

?>