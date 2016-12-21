Subscribe
=========

Source
~~~~~~


Sass styles are in ``template_src/src/assets/sass/widgets/subscribe.sass`` .

Jade source are in ``template_src/src/jade/partials/widgets/subscribe.jade`` .

Example
~~~~~~~

.. code-block:: html

  <!-- BEGIN SUBSCRIBE-->
  <div class="subscribe">
    <h4 class="subscribe__title">Our Newsletter</h4>
    <div class="subscribe__form">
      <form action="#" class="form form--subscribe js-form-subscribe">
        <div class="form-group">
          <label class="control-label">Your E-mail</label>
          <input type="email" required class="form-control">
        </div>
        <button type="submit" class="form__submit">Send</button>
      </form>
    </div>
  </div>
  <!-- END SUBSCRIBE-->

.. code-block:: js

    /**
     * Subscribe form validation initialization as well as
     * displaying PNotify global message on error/success
     *
     * app.notifier.showSuccess/showError is a wrapper around `PNotify` function
     * with predefined defaults to make it look good in this theme
     *
     * if you would like to modify it, feel free to use the PNotify
     * plugin directly
     ==============================================================*/

    var subscribeForm = $('.js-subscribe-form');
    if (subscribeForm.length) {
        subscribeForm
            .parsley()
            .on('form:success', function (formInstance) {
                app.notifier.showSuccess('You have been successfully subscribed!');
                return false;
            })
            .on('form:error', function (formInstance) {
                app.notifier.showError('Subscription failed! Please try again.');
                return false;
            })
        ;

    }

.. Note:: More documentaion `PNotify <http://sciactive.github.io/pnotify/>`_

.. Note:: Pay attention to input's attributes ``data-parsley-*`` this are rules for validation, see documentation `Parsleyjs <http://parsleyjs.org/>`_