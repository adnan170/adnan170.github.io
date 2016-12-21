var config = require('./module/config');

/**
 * @global
 * @type {{init: Function, activateHeaderSpy: (*|exports|module.exports), activateScrollToTopSpy: (*|exports|module.exports), activateUIPanel: (*|exports|module.exports)}}
 */
module.exports = {
  /**
   * @param {Object} [options]
   * @param {string} options[].urlPrefix - path that is appended to images,
   */
  initTheme: function (options) {

    var _ = require('lodash');
    if (options) {
      _.each(options, function (value, key) {
        config[key] = value;
      });
    }

    if (config.loadSvgWithAjax === true) {
      $(document.body).prepend($('<div>').load('img/sprite-inline.svg'));
    }


    require('./module/detect-ie');

    require('jquery');
    require('lodash');
    require('smoothscroll-for-websites');
    require('bootstrap-sass');

    require('slick-carousel/slick/slick.js');

    require('./module/parsley-bootstrap')();
    require('parsleyjs');

    require('jquery.countdown');

    require('jquery-knob');
    require('select2');
    require('bootstrap-sass');
    require('ion-rangeslider');

    require('./module/workarounds')();
    require('./module/grid-size').watch();
    require('./module/ui/nav').init();
    require('./module/ui/auth-btn')();
    require('./module/ui/switch-view')();
    require('./module/data-api/slider')();
    require('./module/data-api/knob')();
    require('./module/ui/filters-search')();
    require('./module/ui/tab')();
    require('./module/ui/collapser')();
    require('./module/ui/sermon')();
    require('./module/ui/event')();
    require('./module/ui/cart')();
    require('./module/ui/isotope-products')();
    require('./module/data-api/datetime')();
    require('./module/data-api/fullcalendar')();
    require('./module/data-api/isotope')();
    require('./module/data-api/countdown').timer();
    require('./module/data-api/countdown').circles();
    require('./module/data-api/numberfield')();

    require('./module/ui/animation');
    require('./module/ui/common');


  },
  activateScrollToTopSpy: require('./module/ui/scrollup-spy'),
  activateUIPanel: require('./demo/ui-panel'),
  config: config,
  gridSize: require('./module/grid-size').get(),
  createMap: require('./module/map').create,
  initMap: require('./module/map').init,
  createGmapMarker: require('./module/gmap/marker').create,
  createGmapInfoboxMarker: require('./module/gmap/infobox-marker').create,
  notifier: require('./module/notifier'),
  plyr: require('plyr'),
  utils: require('./module/utils'),
  createPhotoSwipe: require('./module/ui/photo-swipe').init,
  formControls: require('./module/ui/form-controls')
};
