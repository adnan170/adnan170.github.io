Toolbar
=========

Source
~~~~~~


| Sass styles are in ``template_src/src/assets/sass/block/toolbar.sass`` .
| Jade source are in ``template_src/src/jade/partials/mixins/toolbar.jade`` .


Variations
~~~~~~~~~~

There are 6 variations of toolbar (see outlined block):

1. ``toolbar--v1``
    .. image:: ../img/header--v1.png

2. ``toolbar--v2``
    .. image:: ../img/header--v2.png

3. ``toolbar--v3``
    .. image:: ../img/header--v3.png

4. ``toolbar--v4``
    .. image:: ../img/header--v4.png

5. ``toolbar--v5``
    .. image:: ../img/header--v5.png

6. ``toolbar--v6``
    .. image:: ../img/header--v6.png


.. code-block:: html

    <!-- BEGIN toolbar-->
    <div class="toolbar toolbar--v1">
      <div class="toolbar__lang js-toolbar-lang dropdown">
        <button data-toggle="dropdown" type="button" class="dropdown-toggle toolbar__lang-btn">En</button>
        <div class="dropdown-menu">
          <div role="menu" class="toolbar__lang-dropdown"><a href="#" class="toolbar__lang-link">English</a><a href="#" class="toolbar__lang-link">Francais</a><a href="#" class="toolbar__lang-link">Italian</a><a href="#" class="toolbar__lang-link">Russian</a></div>
        </div>
      </div>
      <div class="dropdown toolbar__auth-item js-auth-item">
        <button data-toggle="dropdown" type="button" class="dropdown-toggle toolbar__auth-btn toolbar__auth-btn--login">
          <svg class="toolbar__icon-user">
            <use xlink:href="#icon-user"></use>
          </svg>
        </button>
        <div class="dropdown-menu">
          <div class="toolbar__auth-form js-auth-login-form">
            <!-- BEGIN AUTH LOGIN-->
            <form action="#" class="form form--auth form--login js-parsley">
              <h5 class="form__title">Login in your account</h5>
              <div class="row">
                <div class="form-group">
                  <label for="login-username-dropdown" class="control-label">Username</label>
                  <input type="text" name="username" id="login-username-dropdown" required="required" data-parsley-trigger="keyup" data-parsley-minlength="6" data-parsley-validation-threshold="5" data-parsley-minlength-message="Login should be at least 6 chars" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <label for="login-password-dropdown" class="control-label">Password</label>
                  <input type="password" name="password" id="login-password-dropdown" required="required" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <button type="button" class="form__forgot js-auth-restore">Forgot password ?</button>
                <button type="submit" class="btn--flat form__submit">Sign in</button>
              </div>
              <div class="row"><span class="form__remember">
                  <input type="checkbox" id="remember-in-dropdown" class="in-checkbox"/>
                  <label for="remember-in-dropdown" class="in-label">Remember me</label></span><span class="form__links">Not a user yet?
                  <button type="button" class="js-auth-register">Get an account</button></span></div>
            </form>
            <!-- end of block .form-login-->
            <!-- END FORM LOGIN-->
          </div>
          <div class="toolbar__auth-form js-auth-restore-form">
            <!-- BEGIN AUTH RESTORE-->
            <form action="#" class="form form--auth form--restore js-parsley">
              <h5 class="form__title">Reset password</h5>
              <div class="row">
                <div class="form-group">
                  <label for="restore-email-dropdown" class="control-label">Enter your User Name or Email</label>
                  <input type="email" name="email" id="restore-email-dropdown" required="required" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <button type="submit" class="btn--flat form__submit">Reset password</button>
              </div>
              <div class="row"><span class="form__links">Back to
                  <button type="button" class="js-auth-login">Log In</button>or
                  <button type="button" class="js-auth-register">Registration</button></span>
                <!-- end of block .form__links-->
              </div>
            </form>
            <!-- end of block .form-restore-->
            <!-- END FORM RESTORE-->
          </div>
          <div class="toolbar__auth-form js-auth-register-form">
            <!-- BEGIN AUTH REGISTER-->
            <form action="#" class="form form--auth form--register js-parsley">
              <h5 class="form__title">Sign up a new account</h5>
              <div class="row">
                <div class="form-group">
                  <label for="register-name-dropdown" class="control-label">First name</label>
                  <input type="text" name="username" id="register-name-dropdown" required="required" class="form-control"/>
                </div>
                <div class="form-group">
                  <label for="register-lastname-dropdown" class="control-label">Last name</label>
                  <input type="text" name="name" id="register-lastname-dropdown" required="required" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <label for="register-email-dropdown" class="control-label">E-mail</label>
                  <input type="email" name="email" id="register-email-dropdown" required="required" class="form-control"/>
                </div>
                <div class="form-group">
                  <label for="register-password-dropdown" class="control-label">Password</label>
                  <input type="password" name="password" id="register-password-dropdown" required="required" class="form-control"/>
                </div>
              </div>
              <div class="row"><span class="form__links">Back to
                  <button type="button" class="js-auth-login">Log In</button></span>
                <button type="submit" class="btn--flat form__submit">Sign up</button>
              </div>
            </form>
            <!-- end of block .form-register-->
            <!-- END FORM REGISTER-->
          </div>
        </div>
      </div>
      <div class="toolbar__search js-toolbar-search">
        <input type="text" placeholder="" class="form-control"/>
        <button type="button" class="toolbar__search-btn js-toolbar-search-btn"></button>
      </div>
    </div>
    <!-- END toolbar-->
