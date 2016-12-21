exports.init = function () {
  /*------------------------------------------------------------------
   * More info docs_build/ui/nav.html
   ==============================================================*/

  var gridSize = require('../grid-size');
  var $nav = $('.js-nav');
  var $navOnClick = $('.js-nav-onclick');
  var $navLinkDropdown = $('.has-children > a');
  var $navItem = $('.nav__item');
  var $navBtn = $('.js-menu-btn');

  var navBtnChange = function (active) {
    if(active) {
      $navBtn.removeClass('active');
      $nav.removeClass('opened');
      $navBtn.find('.header__menu-svg').html('<use xlink:href="#icon-menu"></use>');
    } else {
      $navBtn.addClass('active');
      $nav.addClass('opened');
      $navBtn.find('.header__menu-svg').html('<use xlink:href="#icon-close"></use>');
    }
  };

  $navBtn.on('click', function () {
    navBtnChange($(this).hasClass('active'))
  });

  $navLinkDropdown.on('click', function () {
    var openOnClick =  ['xs', 'sm', 'md'].indexOf(gridSize.get()) > -1 || !!$navOnClick.length;

    if (!openOnClick) return;
    var $link = $(this);
    var $item = $link.closest('.nav__item');
    if( $item.hasClass('opened') ) {
      $item.removeClass('opened');
    } else {
      $navItem.removeClass('opened');
      $item.parents('.has-children').addClass('opened');
      $item.addClass('opened');
    }
    if ($item.hasClass('has-children')) return false;
  });


  $('.has-children').each(function (i, item) {
    var $dropdown = $(item).find('.nav__sub');
    var offsetLeft = $(item).offset().left;
    var offsetRight = ($(window).width() - ($(item).offset().left + $(item).outerWidth()));
    if (offsetLeft < $dropdown.width() ) {
      $dropdown.removeClass('nav__sub--left').addClass('nav__sub--right');
    } else if (offsetRight < $dropdown.width() ){
      $dropdown.removeClass('nav__sub--right').addClass('nav__sub--left');
    }
  });

  $(document).on('click', function (event) {
    var isNav = !!$(event.target).closest('.js-nav').length;
    var isNavBtn = $(event.target).hasClass('js-menu-btn') || $(event.target).closest('.js-menu-btn').length !== 0;
    if (isNav || isNavBtn) return;

    $nav.find('.nav__item').removeClass('opened');

    navBtnChange(true);
  });
};