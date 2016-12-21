module.exports = function () {
  var Isotope = require('isotope-layout');
  var gridSize = require('../grid-size');
  var $isotopeProducts = $('.js-isotope-products');
  if (!$isotopeProducts.length) return;
  var iso = new Isotope( $isotopeProducts[0], {
    itemSelector: '.products__item'
  });

  var page = 0;
  var min = 0;
  var max;
  var total = $('.products__item').length - 2;
  var rangeFilter = function () {
    var offset = 5;
    switch (gridSize.get()) {
      case 'lg': offset = 5; break;
      case 'md': offset = 4; break;
      case 'sm': offset = 3; break;
      case 'xs': offset = 1; break;
    }

    var limit = Math.round(total / offset);

    if (page < 0) {
      page = limit-1;
    } else if (page == limit){
      page = 0;
    }
    min = offset * page + 2;
    max =  offset * page + offset + 2;

    iso.arrange({
      filter: function(i, itemElem ) {
        return $(itemElem).index() === 0 ||  $(itemElem).index() === 1 || ($(itemElem).index() >= min && $(itemElem).index() < max );
      }
    });
  };

  rangeFilter(true);

  $('.js-products-prev').on('click', function () {
    --page;
    rangeFilter();
  });
  $('.js-products-next').on('click', function () {
    ++page;
    rangeFilter();
  });

  $(window).on('load', function() {

  });

};
