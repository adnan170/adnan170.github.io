"use strict";
module.exports = function () {
  var $collapser = $('.js-collapser');
  var $collapserWidget = $('.widget--collapser');
  var $title = $('.js-collapser-title');
  var $titleWidget = $collapserWidget.find('.js-widget-title');
  if (!($collapser.length  || $collapserWidget.length)) return;
  $title.on('click', function () {
    $(this).closest('.js-collapser').toggleClass('collapser--expanded');
  });

  $titleWidget.on('click', function () {
    $(this).closest('.js-widget').toggleClass('widget--expanded');
  });
};
