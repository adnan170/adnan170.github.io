var _ = require('lodash');
var dataApiHelper = require('../data-api-helpers');

function buildOptions($item) {
  return dataApiHelper.getOptions($item,
    [],
    [],
    {
      readOnly: true,
      fgColor: "#ef5350",
      bgColor: "#4d4d4d",
      thickness: 0.07,
      lineCap: 'round',
      min: 0,
      max: 100,
      width: $item.parent().width(),
      height: $item.parent().width(),
      displayInput: false
    });
}


module.exports = function () {
  /***************************************************************
   * Initialize sliders
   * See http://kenwheeler.github.io/slick/ for more options
   ==============================================================*/
  $('.js-dapi-knob').each(function () {
    var $container = $(this);
    var options = buildOptions($container);

    $container.knob(options);
    console.log(options);

    var updateKnob = _.debounce(function () {
      var size = $container.parent().width();
      $container.trigger('configure', {
        width: size,
        height: size
      });
    }, 100);

    $(window).on('resize', updateKnob);

  });
};