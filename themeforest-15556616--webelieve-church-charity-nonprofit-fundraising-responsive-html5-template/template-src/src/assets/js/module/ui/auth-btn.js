"use strict";
module.exports = function () {
  $('.js-auth-register').on('click', function () {
    $('.toolbar__auth-form').hide();
    $('.js-auth-register-form').show();
  });
  $('.js-auth-restore').on('click', function () {
    $('.toolbar__auth-form').hide();
    $('.js-auth-restore-form').show();
  });
  $('.js-auth-login').on('click', function () {
    $('.toolbar__auth-form').hide();
    $('.js-auth-login-form').show();
  });

  $('.js-toolbar-search .form-control').on('input', function () {
    var value = $(this).prop('value');
    if (value) {
      $(this).closest('.js-toolbar-search').addClass('active');
    } else {
      $(this).closest('.js-toolbar-search').removeClass('active');
    }
  });
};
