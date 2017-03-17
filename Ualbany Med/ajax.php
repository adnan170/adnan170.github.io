<?php $db= new mysqli('localhost','root','','se');
  extract($_POST); 
  $user_id=$db->real_escape_string($id);
   $status=$db->real_escape_string($status);
    $sql=$db->query("UPDATE registration SET status='$status' WHERE id='$id'"); 
	
	echo 1;
	
	
	
		
	
	 ?>
	 