"use strict";
module.exports = function (container) {
  var $controls = $(container).find('.form-control');
  if (!$controls.length ) return;
  var $label = $(container).find('.control-label');

  var checkState = function () {
    $controls.each(function (){
      var $control = $(this);
      if ($control.val() !== '') {
        $control.closest('.form-group').addClass('active');
      } else {
        $control.closest('.form-group').removeClass('active');
      }

      if ($control.attr('disabled') === 'disabled') $control.closest('.form-group').addClass('disabled')

    });
  };

  $label.on('click', function () {
    checkState();
    $(this).closest('.form-group').addClass('active');
  });

  $controls.on('click focus input blur change', function () {
    checkState();
    $(this).closest('.form-group').addClass('active');
  });

  $(window).on('load', function () {
    checkState();
  });
};
