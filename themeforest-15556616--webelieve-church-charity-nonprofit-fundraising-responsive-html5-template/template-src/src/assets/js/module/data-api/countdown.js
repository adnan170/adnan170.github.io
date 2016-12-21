var _ = require('lodash');

var buildOptions  = function($item){
  return _.defaultsDeep(
    {
      endDate: $item.data('end-date')
    },
    {
      endDate: '2016/05/04'
    }
  );
};


var gridSize = require('../grid-size');
var template = '<div class="countdown__column">\
                <div class="countdown__value">%D</div>\
                <div class="countdown__label">Days</div>\
              </div>\
              <div class="countdown__delimiter"></div>\
              <div class="countdown__column">\
                <div class="countdown__value">%H</div>\
                <div class="countdown__label">Hours</div>\
              </div>\
              <div class="countdown__delimiter"></div>\
              <div class="countdown__column">\
                <div class="countdown__value">%M</div>\
                <div class="countdown__label">Minutes</div>\
              </div>\
              <div class="countdown__delimiter countdown__delimiter--seconds"></div>\
              <div class="countdown__column">\
                <div class="countdown__value">%S</div>\
                <div class="countdown__label">Seconds</div>\
              </div>';


exports.timer = function () {
  $('.js-counttimer').each(function () {
    var $item = $(this);
    $item.countdown(buildOptions($item).endDate, function(event) {
      $(this).html(event.strftime(template));
    });
  });
};

exports.circles = function (id) {

  $('.js-countcircles').each(function () {
    var $item = $(this);

    var $days = $item.find('.countdown-days');
    var $hours = $item.find('.countdown-hours');
    var $minutes = $item.find('.countdown-minutes');
    var $seconds = $item.find('.countdown-seconds');
    var config = {
      readOnly: true,
      fgColor: "#ef5350",
      bgColor: "#fff",
      thickness: 0.07,
      lineCap: 'round',
      min: 0,
      font: 'Teko',
      max: 60,
      width: gridSize.get() === 'xs' ? 50 : 120,
      height: gridSize.get() === 'xs' ? 50 : 120
    };

    $days.knob(_.defaults({max: 60}, config));
    $hours.knob(_.defaults({max: 24}, config));
    $minutes.knob(config);
    $seconds.knob(config);

    $item.countdown(buildOptions($item).endDate, function(event) {
      $days.val(event.offset.totalDays).trigger('change');
      $hours.val(event.offset.hours).trigger('change');
      $minutes.val(event.offset.minutes).trigger('change');
      $seconds.val(event.offset.seconds).trigger('change');
    });

    var updateKnob = _.debounce(function () {
      var size = {
        width: gridSize.get() === 'xs' ? 50 : 120,
        height: gridSize.get() === 'xs' ? 50 : 120
      };

      $days.trigger('configure', size);
      $hours.trigger('configure', size);
      $minutes.trigger('configure', size);
      $seconds.trigger('configure', size);
    }, 100);

    $(window).on('resize', updateKnob);
  });
};