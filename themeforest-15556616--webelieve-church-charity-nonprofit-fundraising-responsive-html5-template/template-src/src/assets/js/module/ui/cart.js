"use strict";
module.exports = function () {

  $('.js-cart-remove').on('click', function () {
    $(this).closest('.js-cart-item').slideUp();
  });

  $('.js-products-basket-add').on('click', function () {
    $(this).toggleClass('active');
  });

};
