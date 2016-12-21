/*------------------------------------------------------------------
 * More info docs_build/ui/numberfield.html
  ==============================================================*/
var initNumberfield = function ($container) {
  var $btnLess = $container.find('.numberfield__btn[data-type="less"]');
  var $btnMore = $container.find('.numberfield__btn[data-type="more"]');
  var $in = $container.find('.numberfield__in');

  $btnLess.on('click', function () {
    var value = parseFloat($in.val());
    if (value === 1) {
      $btnLess.prop('disabled', true);
    } else {
      $in.val(--value)
    }
  });

  $btnMore.on('click', function () {
    var value = parseFloat($in.val());
    if (value === 1) $btnLess.prop('disabled', false);
    $in.val(++value);
  });
};

module.exports = function () {

  $('.js-numberfield').each(function () {
    initNumberfield($(this));
  });

};
