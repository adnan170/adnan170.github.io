
<?php
error_reporting(0);
session_start();
?>
<!DOCTYPE html>
<html>
<body>



<style>
h3 {
    text-align: center;
}
</style>


<?php
$_SESSION["date"] = $_POST["appointment"];
echo "<h3>" . 'Date:   ' .$_SESSION["date"];
 ?>
 <br>
<br>
 
 
 
 
 
 <form action="finalconfirm.php" method="post" align="center">
  Select Time:
  
  <select required name="time" id="time">
  
  <option value="">----select----</option>
  <option >9:00-9:30</option>
  <option >9:30-10:00</option>
  <option >10:00-10:30</option>
  <option >10:30-11:00</option>
  <option >11:00-11:30</option>
  <option >11:30-12:00</option>
  <option >12:00-12:30</option>
  <option >12:30-1:00</option>
  <option >1:00-1:30</option>
  <option >1:30-2:00</option>
  <option >2:00-2:30</option>
  <option >2:30-3:00</option>
  <option >3:00-3:30</option>
  <option >3:30-4:00</option>
  </select><br/>
  </br>
  Select Vaccination:
  
  <select required name="vaccination" id="vaccination">
  <option value="">----select----</option>
  <option >smallpox</option>
  <option >MMR</option>
  <option >chickenpox</option>
  <option >Influenza</option>
  <option >Rotavirus</option>
  <option >Zoster</option>
  <option >Yellow fever</option>

  
  
  
  <br> <br>
  <input type="submit" value="Submit">
  
</form>

</body>
</html>