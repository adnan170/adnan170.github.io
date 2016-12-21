Form
====

Source
~~~~~~

| Sass styles are in folder ``template_src/src/assets/sass/core/form.sass`` .
| Jade source are in ``template_src/src/jade/partials/mixins/form.jade`` .
| JS source are in ``template_src/src/assets/js/module/ui/form-controls.js`` .

Options
~~~~~~~

| We are using the standard bootstrap layout, but changed the design. Added flex styles for easier use. By default form interaction is activated for all ``.form`` containers. See the initialization in ``demo.js``

.. code-block:: js

   app.formControls('.form');

| This will work when the form exists on page loading, otherwise you should activate your new form by calling this function ``app.formControls('.form--created-dinamically');``

| ``form-group--lg-4``, ``form-group--lg-6``, etc. define the width for form group, work similarly like bootstrap columns.
| ``form-group--inline`` will add horizontal style to ``form-group`` block.
| ``js-parsley`` will add front end validation for forms.

Variations
~~~~~~~~~~

Main modifiers are:

*
  ``<div class="form">`` - default form look

  .. image:: ../img/form--comment.png

*
  ``<div class="form form--horizontal">`` - labels and controls are aligned horizontal

  .. image:: ../img/form--horizontal.png

*
  ``<div class="form form--subscribe">`` - subscribe form

  .. image:: ../img/form--subscribe.png


Example
~~~~~~~

.. code-block:: html

    <!-- BEGIN FORM-->
    <form action="#" class="form js-parsley form--comment">
      <div class="row">
        <div class="form-group form-group--lg-4">
          <label for="comment-name" class="control-label">Your Name *</label>
          <input type="text" id="comment-name" required="required" class="form-control"/>
        </div>
        <div class="form-group form-group--lg-4">
          <label for="comment-email" class="control-label">Your E-mail *</label>
          <input type="email" id="comment-email" required="required" class="form-control"/>
        </div>
        <div class="form-group form-group--lg-4">
          <label for="comment-phone" class="control-label">Your telephone</label>
          <input type="text" id="comment-phone" required="required" class="form-control"/>
        </div>
      </div>
      <div class="row">
        <div class="form-group form-group--lg-12">
          <label for="comment-message" class="control-label">Message</label>
          <textarea id="comment-message" required="required" class="form-control"></textarea>
        </div>
      </div>
      <div class="form__buttons">
        <button type="submit" class="btn--flat form__btn">Submit</button>
      </div>
    </form>
    <!-- END FORM-->

.. Note:: Pay attention to input's attributes ``data-parsley-*`` - these are validation rules, see documentation `Parsleyjs <http://parsleyjs.org/>`_

How add custom form validation and submit ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Just create you own function:

.. code-block:: js

  function initFormSubmit (container) {
    /**
     * Form submit validation
     ==============================================================*/
    var $form = $(container);
    if (!$form.length) return;
    var $formSubmitBtn = $form.find(':submit');
    $form.parsley()
      .on('form:success', function (formInstance) {
        $formSubmitBtn.addClass('btn--loading');
        $formSubmitBtn.prop('disabled', true);

        // php/contact.php - replace it to your url script
        $.post('php/contact.php', $form.serialize())
          .done(function () {
            app.notifier.showSuccess('The message was sent!');
            formInstance.reset();
            $form[0].reset();
          })
          .fail(function () {
            app.notifier.showError('Something went wrong!');
          })
          .always(function () {
            $formSubmitBtn.prop('disabled', false);
            $formSubmitBtn.removeClass('btn--loading');
          });

        formInstance.submitEvent.preventDefault();

      });

  }

After call this like this:

.. code-block:: js

   initFormSubmit('#form-agent')



