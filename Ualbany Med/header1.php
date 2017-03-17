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
   <form method="post" action="logout.php">
   <input type="submit" value="Logout">
   </form>
 <header role="banner" id="fh5co-header">
			<div class="container">
				<!-- <div class="row"> -->
			    <nav class="navbar navbar-default">
		        <div class="navbar-header">
		        	<!-- Mobile Toggle Menu Button -->
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		         <a class="navbar-brand" href="index.php">UAlbany Care Plus</a> 
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
					 <li class="active"><a href="#" data-nav-section="home"><span>Manage Users</span></a></li>
					 <li class="active"><a href="#" data-nav-section="home"><span>Add Available slots</span></a></li>
		           <!-- <li><a href="#" data-nav-section="work"><span>Staff</span></a></li>
		           <li><a href="#" data-nav-section="testimonials"><span>Testimonials</span></a></li>
		           <!--<li><a href="#" data-nav-section="services"><span>Services</span></a></li>
		            //<li><a href="#" data-nav-section="about"><span>Developer's</span></a></li>-->
		            <li><a href="#" data-nav-section="contact"><span>Logout</span></a></li>
					<li><a href="#" data-nav-section="login"><span>Send mails</span></a></li>
					
					
		          </ul>
		        </div>
				
			    </nav>
			 
		  </div>
	</header>
	
	
	
	 <?php 	 
		 }
  else if ( $s=="p")
	  
  { //echo $s;
  ?>
  
   
   
   
 <!--user-->  
<!--header-->
<form method="post" action="logout.php">
   <input type="submit" value="Logout">
   </form>
<header role="banner" id="fh5co-header">
			<div class="container">
				<!-- <div class="row"> -->
			    <nav class="navbar navbar-default">
		        <div class="navbar-header">
		        	<!-- Mobile Toggle Menu Button -->
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		         <a class="navbar-brand" href="index.php">UAlbany Care Plus</a> 
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
		         <li onclick="location.href=booking.php"class="active"><a href="booking.php" data-nav-section="home"><span>Schedule Appointment</span></a></li>
					 <li class="active"><a href="#" data-nav-section="home"><span>Profile</span></a></li>
		            <li><a href="#" data-nav-section="contact"><span>Logout</span></a></li>
					<li><a href="#" data-nav-section="login"><span>Contact Us</span></a></li>
					
		          </ul>
		        </div>
			    </nav>
			  <!-- </div> -->
		  </div>
	</header>
   
<?php
  }
  else if( $s=="d")
  {
	  ?>
	  <form method="post" action="logout.php">
   <input type="submit" value="Logout">
   </form>
	  <header role="banner" id="fh5co-header">
			<div class="container">
				<!-- <div class="row"> -->
			    <nav class="navbar navbar-default">
		        <div class="navbar-header">
		        	<!-- Mobile Toggle Menu Button -->
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		         <a class="navbar-brand" href="index.php">UAlbany Care Plus</a> 
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
		         <li class="active"><a href="#" data-nav-section="home"><span>View Appointment</span></a></li>
					 <li class="active"><a href="#" data-nav-section="home"><span>Profile</span></a></li>
		            <li><a href="#" data-nav-section="contact"><span>Logout</span></a></li>
					<li><a href="#" data-nav-section="login"><span>Contact Us</span></a></li>
					
		          </ul>
		        </div>
			    </nav>
			  <!-- </div> -->
		  </div>
	</header>
<?php	  
  }
  else
  {	  
  ?>
  
  <header role="banner" id="fh5co-header">
			<div class="container">
				<!-- <div class="row"> -->
			    <nav class="navbar navbar-default">
		        <div class="navbar-header">
		        	<!-- Mobile Toggle Menu Button -->
					<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		         <a class="navbar-brand" href="index.php">UAlbany Care Plus</a> 
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
		            <li><a href="#" data-nav-section="work"><span>Staff</span></a></li>
		           <!-- <li><a href="#" data-nav-section="testimonials"><span>Testimonials</span></a></li>
		            <li><a href="#" data-nav-section="services"><span>Services</span></a></li>-->
		            <li><a href="#" data-nav-section="about"><span>Developer's</span></a></li>
		            <li><a href="#" data-nav-section="contact"><span>Login</span></a></li>
					<li><a href="#" data-nav-section="login"><span>Contact Us</span></a></li>
					
		          </ul>
		        </div>
			    </nav>
			  <!-- </div> -->
		  </div>
	</header>
	
<?php
  }
	
}
?>	
	 
 </head>
 </html>