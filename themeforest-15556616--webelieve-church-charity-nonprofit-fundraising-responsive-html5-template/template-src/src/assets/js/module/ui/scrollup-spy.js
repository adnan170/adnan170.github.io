/***************************************************************
 * "Scroll to top" button
 ==============================================================*/
var _ = require('lodash');
module.exports = function () {
  var $scrollup = $('.js-scrollup'),
    scrollupClass = '',
    _cssClass = null;

  var setScrollupClass = function () {
    var offsetTop = $(window).scrollTop();
    if (offsetTop > 400) {
      scrollupClass = 'scrollup-show';
    } else {
      scrollupClass = '';
    }

    if (scrollupClass !== _cssClass) {
      $scrollup.removeClass('scrollup-show');
      $scrollup.addClass(scrollupClass);
      _cssClass = scrollupClass;
    }
  };

  $(window).on('scroll', _.debounce(setScrollupClass, 200));
  $scrollup.on('click', function () {
    $('html, body').animate({scrollTop: 0});
  });

};