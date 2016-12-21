module.exports = function () {
  var gridSize = require('../grid-size');

  $('.js-filters-btn').on('click', function () {
    if (gridSize.get() === 'xs') {
      $(this).closest('.js-filters').addClass('filters--opened');
    }
  });
};