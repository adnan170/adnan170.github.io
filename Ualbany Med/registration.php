
<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!--<!DOCTYPE html>
<html>
<head>
<title>New Fashions a Flat Ecommerce Bootstarp Responsive Website Template | Registration :: w3layouts</title>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href='http://fonts.googleapis.com/css?family=Raleway:400,200,600,800,700,500,300,100,900' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Arimo:400,700,700italic' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/component.css" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="New Fashions Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" 
		/>	
<script src="js/jquery.easydropdown.js"></script>		
<script src="js/jquery.min.js"></script>
<script src="js/simpleCart.min.js"> </script>
<!-- start menu -->
<!--<link href="css/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
<!-- start menu -->
<head>
<style>

	
	.error
	{
			border-color:red;
	}
	.normal
	{
                border-color:black;
	}


</style>
<script src="jq/jquery-1.11.1.min.js"></script>
<script>
	function validate()
	{
		var f=1;	
		
		
			var firstname=document.getElementById("first name").value;
			var lastname=document.getElementById("last name").value;
			var password=document.getElementById("passwd").value;
			var confirmpassword=document.getElementById("confirm password").value;
			var email=document.getElementById("email address").value;
			//var gender =document.getElementById("gender").value;
			
			if ($('input[type=radio]:checked').length <= 0) 
						{
  								  alert("please select gender ")
						}
			
			//var gender= $('input[type="radio"]:checked').val();
			//var addressline1= document.getElementById("address1").value;
			//var addressline2=document.getElementById("address2").value;
			//var area = document.getElementById("area").value;
			//var city =document.getElementById("city").value;
			//var state =document.getElementById("state").value;
			//var pincode =document.getElementById("pincode").value;
			//var country =document.getElementById("country").value;
			var secq =document.getElementById("SQ").value;
			var seca =document.getElementById("SA").value;
			
			
			
			if(firstname=="") 
			  {f=0; document.getElementById("first name").className="error";}
			else
			  { document.getElementById("first name").className="normal"; }
			if(lastname=="") 
			  {f=0; document.getElementById("last name").className="error";}
			else
			  { document.getElementById("last name").className="normal"; }
			if(email==""||email.indexOf("@")<=1||email.lastIndexOf(".")==-1||email.lastIndexOf(".")>email.length==-3) 
			  { f=0; document.getElementById("email address").className="error";}
			else
			  { document.getElementById("email address").className="normal"; }
			if(password=="" || password.length<=7)
			   { f=0; document.getElementById("passwd").className="error";}
			else
			   { document.getElementById("passwd").className="normal"; }
			if(confirmpassword==""|| confirmpassword!=password)
			   {f=0; document.getElementById("confirm password").className="error";}
			else
			   { document.getElementById("confirm password").className="normal"; }
			 if(gender=="") 
			  {f=0; document.getElementById("address1").className="error";}
			else
			  { document.getElementById("address1").className="normal"; }
				
		/*	  if(addressline1=="") 
			  {f=0; document.getElementById("address1").className="error";}
			else
			  { document.getElementById("address1").className="normal"; }
			  if(addressline2=="") 
			  {f=0; document.getElementById("address2").className="error";}
			else
			  { document.getElementById("address2").className="normal"; }
			  if(area=="") 
			  {f=0; document.getElementById("area").className="error";}
			else
			  { document.getElementById("area").className="normal"; }
			  if(city=="") 
			  {f=0; document.getElementById("city").className="error";}
			else
			  { document.getElementById("city").className="normal"; }
			  if(state=="") 
			  {f=0; document.getElementById("state").className="error";}
			else
			  { document.getElementById("state").className="normal"; }	
						
			if(pincode=="") 
			  {f=0; document.getElementById("pincode").className="error";}
			else
			  { document.getElementById("pincode").className="normal"; }
			  if(country=="") 
			  {f=0; document.getElementById("country").className="error";}
			else
			  { document.getElementById("country").className="normal"; } */
			  if(secq=="") 
			  {f=0; document.getElementById("SQ").className="error";}
			else
			  { document.getElementById("SQ").className="normal"; }
			  if(seca=="") 
			  {f=0; document.getElementById("SA").className="error";}
			else
			  { document.getElementById("SA").className="normal"; }			
						
			
			if(f==0)
			return false;
			else
			return true;
			
			
	}

</script>
</head>
<body>
<!--<?php 
	//include 'header1.php';
?>-->
<!--header-->

<!--header//-->
<div class="registration-form">
	 <div class="container">
		 <ol class="breadcrumb">
		  <li><a href="index.php">Home</a></li>
		  <li class="active">Registration</li>
		 </ol>
		 <h2>Registration</h2>
		 <div class="col-md-6 reg-form">
			 <div class="reg">
			
				 <form method="post" action="registration1.php" onSubmit="return validate();">
					<font style="color:#000;">
	<p>First Name<br />
                      <font color="#000000">
                      <input type="text" name="fname" id="first name"/>
                      </font><br />
    Last Name<br /><font style="color:#000;">
    <font color="#000000">
    <input type="text" name="lname" id="last name" />
    </font><br />
    Email Address<br /><font style="color:#000;">
    <font color="#000000">
    <input type="text" name="email" id="email address" />
    </font><br />
    Password<br /><font style="color:#000;">
    <font color="#000000">
    <input type="password" name="passwd" id="passwd" />
    </font><br />
    Confirm Password<br /><font style="color:#000;">
    <font color="#000000">
    <input type="password" id="confirm password" />
    </font><br /><br>
   Gender&nbsp;&nbsp;
    <input type="radio" name="gender" value="male" id="gender"/>Male&nbsp;
    <input type="radio" value="female" name="gender" id="gender" />Female<br /><br>
    
    Type of User<br/><br/>
	<select name="type" >

	<option >----Select----</option>
	<option value="p" >Patient</option>
  	<option value="d">Doctor</option>
    </select>
<br/><br/>
   
   	Security question <br/>
    <font style="color:#000;">
    <select name="SEC_Q" id="SQ">
      <option>What is your pets name?</option>
      <option >Who is your role model?</option>
      <option>What is your favourite color?</option>
      <option>Where did you spend your childhood?</option>
      </b></b>
    </select>
    <br /><br />
    </font>
    Security answer<br/><font color="#000000">
    <input type="text" name="SEC_A" id="SA"  />
    </font></p>
					<p><br />   
					  
					  <input type="submit" value="Register Now">
				   </p>
					
				 </form>
			 </div>
		 </div>
		 <div class="col-md-6 reg-right">
			
			 
		 </div>
		 <div class="clearfix"></div>		 
	 </div>
</div>


</body>
</html>
		<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>