module.exports = function () {
  var Isotope = require('isotope-layout');
  var $isotopeGrid = $('.js-isotope-grid');
  var $gridSize = require('../grid-size');
  if (!$isotopeGrid.length || $gridSize.get() === 'xs') return;
  var $isotopeFilter = $('.js-isotope-filter');
  var iso;

  $(window).on('load', function() {
    iso = new Isotope( $isotopeGrid[0], {
      itemSelector: '.listing__item'
    });

  });

  $isotopeFilter.on('click', function () {
    var $this = $(this);
    if ($this.hasClass('active')) return;
    var filter = $this.data('filter');

    iso.arrange({
      filter: function(i, itemElem ) {
        if (filter === '*') {
          return true;
        } else {
          return $(itemElem).hasClass('listing__item--' + filter);
        }
      }
    });
    $isotopeFilter.removeClass('active');
    $this.addClass('active');
  });
};
