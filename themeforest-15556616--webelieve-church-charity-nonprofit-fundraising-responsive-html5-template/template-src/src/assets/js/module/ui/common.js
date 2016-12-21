module.exports = function () {
  var utils = require('../utils');
  $('.js-event-register-btn').on('click', function () {
    $('.js-event-register-form').slideDown();
    utils.centerElementInViewport('.js-event-register-form');
    return false;
  });

  $('.js-cause-donate-btn').on('click', function () {
    $('.js-cause-donate-form').slideDown();
    utils.centerElementInViewport($('.js-cause-donate-form'));
    return false;
  });
}();