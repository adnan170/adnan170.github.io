HTML structure
==============

Realtyspace is a responsive theme with 2 column layout (1 column is also supported).
This is a basic structure:

.. code-block:: html

    <!DOCTYPE html>
    <html>
      <head lang="en">
        <meta charset="UTF-8">
        <title></title>
        <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=9,chrome=1"><![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, shrink-to-fit=no">
        <meta name="format-detection" content="telephone=no">
        <!-- Loading Source Sans Pro, Cambay, Teko  font that is used in this theme-->
        <link href="http://fonts.googleapis.com/css?family=Cambay:400,700%7CTeko:500%7CSource+Sans+Pro:200,400,600,700,400italic,700italic&amp;subset=latin,latin-ext" rel="stylesheet" type="text/css">
        <!-- Boostrap and other lib styles-->
        <link rel="stylesheet" href="assets/css/vendor.css">
        <!-- Font-awesome lib-->
        <link rel="stylesheet" href="assets/css/font-awesome.css">
        <!-- Theme styles, please replace "default" with other color scheme from the list available in template/css-->
        <link rel="stylesheet" href="assets/css/theme-default.css">
        <!-- Your styles should go in this file-->
        <link rel="stylesheet" href="assets/css/custom.css">
        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
      </head>
      <body>
        <div class="box">
          <!-- BEGIN topbar-->
          <div class="topbar js-topbar">
            <div class="container">
              <div class="topbar__row">
                <button class="header__menu header__menu--mob js-menu-btn"></button>
                <!-- BEGIN nav block-->
                <nav class="nav js-nav nav--v1"></nav>
                <!-- END nav block-->
                <a href="donate.html" class="btn--flat-rounded header__donate header__donate--v1">Donate</a>
              </div>
            </div>
          </div>
          <!-- END topbar-->
          <!-- BEGIN HEADER-->
          <header class="header"></header>
          <!-- END HEADER-->
          <!-- BEGIN MAIN SECTION-->
          <main class="main">
            <!-- BEGIN WIDGET-->
            <div class="widget js-widget">
              <!-- END WIDGET HEADER-->
              <!-- BEGIN WIDGET CONTENT-->
              <div class="widget__content">
                <!-- SOME CONTENT -->
              </div>
              <!-- END WIDGET CONTENT-->
            </div>
            <!-- END WIDGET-->
          <!-- BEGIN FOOTER-->
          <footer class="footer"></footer>
          <!-- END FOOTER-->
        </div>
        <!-- BEGIN SCRIPTS and INCLUDES-->
        <script type="text/javascript" src="https://maps.google.com/maps/api/js?libraries=places&amp;sensor=false"></script>
        <!--
        Contains vendor libraries (Bootstrap3, Jquery, Chosen, etc) already compiled into a single file, with
        versions that are verified to work with our theme. Normally, you should not edit that file.
        -->
        <script type="text/javascript" src="js/vendor.js"></script>
        <!--
        This file is used for demonstration purposes and contains example property items, that are mostly used to
        render markers on the map. You can safely delete this file, after you've adapted the demo.js code
        to use your own data.
        -->
        <script type="text/javascript" src="js/demodata.js"></script>
        <!--
        The library code that Realtyspace theme relies on, in order to function properly.
        Normally, you should not edit this file or add your own code there.
        -->
        <script type="text/javascript" src="js/app.js"></script>
        <!--
        the main file, that you should modify. It contains lots of examples of
        plugin usage, with detailed comments about specific sections of the code.
        -->
        <script type="text/javascript" src="js/demo.js"></script>
        <!-- END SCRIPTS and INCLUDES-->
      </body>
    </html>