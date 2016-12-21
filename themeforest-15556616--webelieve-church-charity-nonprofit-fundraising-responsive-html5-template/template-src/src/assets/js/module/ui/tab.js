"use strict";
module.exports = function () {
  var $tabExpander = $('.js-tab-expander');
  if (!$tabExpander.length ) return;

  $tabExpander.on('click', function () {
    $(this).closest('.js-tab').addClass('tab--expanded');
  });
};
