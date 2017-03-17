<?php
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con, "se");

//$new= isset($_POST["type"]);
//print $new;
$sql = "INSERT INTO `registration`(`id`, `Fname`, `Lname`, `Email`, `Password`, `Gender`, `type`) VALUES (NULL,'".$_POST["fname"]."','".$_POST["lname"]."','".$_POST["email"]."','".$_POST["passwd"]."','".$_POST["gender"]."','".$_POST["type"]."');";
$result = mysqli_query($con, $sql);
print $sql;
mysqli_close($con);

header("Location:index.html?err=Registration done! you may login now");

?>