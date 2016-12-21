"use strict";
var htmlForm = function (modifier) {
  return '\
  <form action="#" class="form js-form-event form--event form--event-' + modifier + '">\
    <div class="row">\
      <div class="form-group form-group--text">\
        <label for="comment-name" class="control-label">Your Name *</label>\
        <input type="text" id="comment-name" required="required" class="form-control">\
      </div>\
      <div class="form-group form-group--text">\
        <label for="comment-email" class="control-label">Your E-mail *</label>\
        <input type="email" id="comment-email" required="required" class="form-control">\
      </div>\
      <div class="form-group form-group--text">\
        <label for="comment-phone" class="control-label">Your telephone</label>\
        <input type="text" id="comment-phone" required="required" class="form-control">\
      </div>\
    </div>\
    <div class="row">\
      <div class="form-group">\
        <label for="comment-message" class="control-label">Message</label>\
        <textarea id="comment-message" required="required" class="form-control"></textarea>\
      </div>\
    </div>\
    <div class="form__buttons">\
      <button type="submit" class="btn--flat form__btn">Submit</button>\
    </div>\
  </form>'
};

module.exports = function () {
  var utils = require('../utils');
  var map = require('../map');
  var formControls = require('./form-controls');
  var $event = $('.js-event');
  if (!$event.length) return;
  var $eventItem = $event.find('.js-event-item');
  var modifier = $event.data('modifier');

  var isFlipped = ['columns', 'split', 'grid'].indexOf(modifier) > -1;

  var $btnLocation = $('.js-event-location');
  var $btnMail = $('.js-event-mail');

  var createForm = function ($item) {
    if($item.data('form-init')) return;
    $item.find('.js-form').html(htmlForm(modifier));
    $item.find('.js-form-event').parsley();
    formControls($item.find('.js-form-event'));
    $item.data('form-init', true);
  };

  var createMap = function ($item) {
    if($item.data('map-init')) return;
    var $map = $item.find('.js-map');
    setTimeout(function(){
      map.init($map, window.demodata.contacts);
    }, 400);
    $item.data('map-init', true);
  };

  var changeActive = function ($btn, $item, type) {
    $eventItem.removeClass('event__item--form').removeClass('event__item--map');
    $eventItem.find('.js-form').slideUp(300);
    $eventItem.find('.js-map').slideUp(300);
    if (isFlipped) {
      $eventItem.find('.flipper').removeClass('flipper--rotate');
    }

    if ($btn.hasClass('active')) {
      $btn.removeClass('active');
    } else {
      $item.addClass('event__item--' + type);
      $item.find('.js-' + type).slideDown(300);

      $btnLocation.removeClass('active');
      $btnMail.removeClass('active');
      $btn.addClass('active');
      if (isFlipped) {
        $item.find('.flipper').addClass('flipper--rotate');
      }
    }

  };

  $btnLocation.on('click', function () {
    var $btn = $(this);
    var $item = $btn.closest('.js-event-item');
    createMap($item);

    changeActive($btn, $item, 'map')
  });

  $btnMail.on('click', function () {
    var $btn = $(this);
    var $item = $btn.closest('.js-event-item');
    createForm($item);
    changeActive($btn, $item, 'form');
  });

  $('.js-event-unflip').on('click', function () {
    $btnLocation.removeClass('active');
    $btnMail.removeClass('active');
    $eventItem.removeClass('event__item--form').removeClass('event__item--map');
    $eventItem.find('.flipper').removeClass('flipper--rotate');
  });


};
