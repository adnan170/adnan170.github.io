"use strict";
module.exports = function () {
  var $switchBtn = $('.js-switch-btn');
  var $switchView = $('.js-switch-view');
  var $switchListing = $('.js-switch-view > .listing');
  if (!$switchBtn.length || !$switchView.length ) return;

  $switchBtn.on('click', function () {
    var mode = $(this).data('mode');
    var view = $switchView.data('view');
    console.log(view);
    if (view === 'event') {
      window.location.href = 'events_' + mode + '.html';
      return;
    } else if(view === 'sermon') {
      window.location.href = 'sermons_' + mode + '.html';

    }
    var oldMode = mode === 'grid' ? 'list' : 'grid';
    $switchView.removeClass(view + '--' + oldMode);
    $switchView.addClass(view + '--' + mode);
    $switchListing.removeClass('listing--' + oldMode);
    $switchListing.addClass('listing--' + mode);
  });
};
