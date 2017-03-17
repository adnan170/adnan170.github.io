<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>UAlbany Care Plus</title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/icon" href="assets/images/favicon.ico"/>
    <!-- Font Awesome -->
    <link href="assets/css/font-awesome.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">    
    <!-- Slick slider -->
    <link rel="stylesheet" type="text/css" href="assets/css/slick.css"/> 
    <!-- Animate css -->
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css"/>  
    <!-- Bootstrap progressbar  -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-progressbar-3.3.4.css"/> 
     <!-- Theme color -->
    <link id="switcher" href="assets/css/theme-color/purple-theme.css" rel="stylesheet">

    <!-- Main Style -->
    <link href="style.css" rel="stylesheet">

    <!-- Fonts -->

    <!-- Open Sans for body font -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    
  </head>
  <body> 

  <!-- BEGAIN PRELOADER -->
  <div id="preloader">
    <div id="status">&nbsp;</div>
  </div>
  <!-- END PRELOADER -->

  <!-- SCROLL TOP BUTTON -->
  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
  <!-- END SCROLL TOP BUTTON -->
<header id="header">
    <!-- header top search -->
    
    <!-- header bottom -->
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="header-contact">
              <ul>
                <li>
                  <div class="phone">
                    <i class="fa fa-phone"></i>
                    <a href="callto:"+1(518) 442-5454" >+1(518) 442-5454</a>
                  </div>
                </li>
                <li>
                  <div class="mail">
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:askUHC@albany.edu">askUHC@albany.edu</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="header-login">
              <a class="login modal-form" data-target="#login-form" data-toggle="modal" href="#">Login / Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End header -->
  
  <!-- Start login modal window -->
  <div aria-hidden="false" role="dialog" tabindex="-1" id="login-form" class="modal leread-modal fade in">
    <div class="modal-dialog">
      <!-- Start login section -->
      <div id="login-content" class="modal-content">
        <div class="modal-header">
          <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title"><i class="fa fa-unlock-alt"></i>Login</h4>
        </div>
        <div class="modal-body">
          <form method="post" action="login1.php">
            <div class="form-group">
              <input type="email" name="uname" id="user name" placeholder="E-mail" class="form-control" required>
            </div>
            <div class="form-group">
              <input type="password" name="pass" id="password" placeholder="Password" class="form-control" required>
            </div>
             <div class="loginbox">
              <!--<label><input type="checkbox"><span>Remember me</span></label>-->
              <button class="btn signin-btn" type="submit">SIGN IN</button>
            </div>                    
          </form>
        </div>
        <div class="modal-footer footer-box">
          <a href="forget.php">Forgot password ?</a>
          <span>No account ? <a id="signup-btn" href="#">Sign Up.</a></span>            
        </div>
      </div>
      <!-- Start signup section -->
      <div id="signup-content" class="modal-content">
        <div class="modal-header">
          <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title"><i class="fa fa-lock"></i>Sign Up</h4>
        </div>
        <div class="modal-body">
          <form action="registration1.php" method="post">
            <div class="form-group">
              <input placeholder="First Name" class="form-control" id="first name" name="fname" required>
            </div>
            <div class="form-group">
              <input placeholder="Last name" class="form-control" id="last name" name="lname" required>
            </div>
            <div class="form-group">
              <input placeholder="Email" type="email" class="form-control" id="email address" name="email" required>
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control" name="passwd" id="passwd" required>
            </div>
			 <div class="form-group">
              <input type="password" placeholder="Confirm Password" class="form-control" id="confirm password" required>
            </div>
			<div class="form-group">
			 Gender&nbsp;&nbsp;
			<input type="radio" name="gender" value="male" id="gender"/>Male&nbsp;
			<input type="radio" value="female" name="gender" id="gender" />Female<br /><br>
    
    Type of User<br/><br/>
	<select name="type" >

	<option required>----Select----</option>
	<option value="p" >Patient</option>
  	<option value="d">Doctor</option>
    </select>
			</div>
            <div class="signupbox">
              <span>Already got account? <a id="login-btn" href="#">Sign In.</a></span>
            </div>
            <div class="loginbox">
              <label><input type="checkbox"><span>Remember me</span><i class="fa"></i></label>
              <button class="btn signin-btn" type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End login modal window -->

  <!-- BEGIN MENU -->
  <section id="menu-area">      
    <nav class="navbar navbar-default" role="navigation">  
      <div class="container">
        <div class="navbar-header">
          <!-- FOR MOBILE VIEW COLLAPSED BUTTON -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- LOGO -->              
          <!-- TEXT BASED LOGO -->
          <a class="navbar-brand" href="index.php">UAlbany Care Plus</a>              
         
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul id="top-menu" class="nav navbar-nav navbar-right main-nav">
            <li><a href="index.php">Home</a></li>
            <li><a href="appointment.php">Book Appointment</a></li>
            
            <li  class="active"><a href="#">Contact</a></li>
          </ul>                     
        </div><!--/.nav-collapse -->
        
      </div>     
    </nav>
  </section>
  <!-- END MENU --> 
  <!-- Start contact section  -->
  <section id="contact">
     <div class="container">
       <div class="row">
         <div class="col-md-12">
           <div class="title-area">
              <h2 class="title">Directions</h2>
              <span class="line"></span>
              <p>To be on time you need a perfect travel schedule and should know the way towards us</p>
            </div>
         </div>
		 
         </div>
         <div class="col-md-12">
           <div class="contact-area">
             <div class="row">
               <div class="col-md-4">
                 <div class="contact-area-left">
                   <h4>Contact Info</h4>
                   
                   <address class="single-address">
                     <p>400 Patroon Creek Blvd,</br>Suite 200,</br> Albany, NY 12206 </p>
                     <p>askUSC@albany.edu</p>
                     <p>+1(518) 442-5454 </p>
                   </address> 
				   
                                 
                 </div>
               </div>
			   
			   <div class="col-md-6">
                 <div class="contact-area-left">
                   <h4>BUS Schedule</h4>
                   
                   <address class="single-address">
                     
        <strong><span style="text-decoration: underline;">Fall 2016 UAlbany Bus Schedules</span></strong>
        <p><strong><a href="Rte1_Downtown_Fall_2016_Bus_Schedules.pdf">Route #1</a> (Downtown Via Western Avenue)<br />
        <a href="Rte2_Fall_2016_Bus_Schedules.pdf">Route #2</a> (Uptown Circulator)<br />
        <a href="Rte3_Madison_Ave_East_Campus-Weekday_Fall_2016_Bus_Schedules.pdf">Route #3</a> (East Campus/Albany Law School)<br />
        <a href="Route_4.pdf">Route #4</a> (Student Health/Counseling Center)<br />
        <a href="RShopping_Shuttle_Fall_2016_Bus_Schedules.pdf">Route #5</a> (Shopping Shuttle)</strong></p>
                   </address> 
				   
                                 
                 </div>
               </div>
			   
               
             </div>
           </div>
         </div>
       </div>
     </div>
  </section>
  <!-- End contact section  -->

  <!-- Start google map -->
  <section id="google-map">
    <iframe src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>
  <!-- End google map -->


  <!-- Start footer -->
  <footer id="footer">
    <div  class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="footer-left">
           <p>UAlbany Health Care+</p>
          </div>
        </div>
        
      </div>
    </div>
  </footer>
  <!-- End footer -->

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>    
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <!-- Bootstrap -->
  <script src="assets/js/bootstrap.js"></script>
  <!-- Slick Slider -->
  <script type="text/javascript" src="assets/js/slick.js"></script>    
 <!-- counter -->
  <script src="assets/js/waypoints.js"></script>
  <script src="assets/js/jquery.counterup.js"></script>
  <!-- Wow animation -->
  <script type="text/javascript" src="assets/js/wow.js"></script> 
  <!-- progress bar   -->
  <script type="text/javascript" src="assets/js/bootstrap-progressbar.js"></script>  
 
 
  <!-- Custom js -->
  <script type="text/javascript" src="assets/js/custom.js"></script>
    
  </body>
</html>