"use strict";
module.exports = function () {
  var jssorslider = require('jssorslider');
  var utils = require('../utils');
  var gridSize = require('../grid-size');
  var $sermon = $('.js-sermon');
  if (!$sermon.length) return;

  var $sermonItem = $sermon.find('.js-sermon-item');
  var $plyrVideo = $sermon.find('.js-plyr-video');
  var $plyrAudio = $sermon.find('.js-plyr-audio');
  var $btnVideo = $sermon.find('.js-sermon-video');
  var $btnAudio = $sermon.find('.js-sermon-audio');
  var modifier = $sermon.data('modifier');

  var options = {
    $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
    $PlayOrientation: 2,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 2,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 1,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
    }
  };

  function ScaleSlider() {
    var parentWidth = $('#sermon-slider').parent().width();
    if (parentWidth) {
      sermonSlider.$ScaleWidth(parentWidth);
    }
    else
      window.setTimeout(ScaleSlider, 30);
  }

  if (modifier === 'main') {
    var sermonSlider = new $JssorSlider$("sermon-slider", options);
    // responsive code begin
    // you can remove responsive code if you don't want the slider scales
    // while window resizing

    //Scale slider after document ready
    ScaleSlider();

    //Scale slider while window load/resize/orientationchange.
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
  }


  var selector;
  switch (modifier) {
    case 'main':
      selector = 'slider__item';
      break;
    case 'grid':
      selector = 'sermon__media';
      break;
    default:
      selector = 'sermon__item';

  }

  var $current;

  var playMedia = function ($btn, type) {
    var stopPlay = $btn.hasClass('active');
    var $item = $btn.closest('.js-sermon-item');
    $btnVideo.removeClass('active');
    $btnAudio.removeClass('active');

    if (gridSize.get() !== 'lg') {
      window.location.href = $item.data('href');
      return;
    }

    var player = $('.plyr--playing');

    if (player) {
      $.each(player, function () {
        $(this)[0].plyr.pause();
      })
    }

    $sermon.find('.' + selector)
      .removeClass('sermon__item--audio')
      .removeClass('sermon__item--video');

    if (modifier !== 'main') {
      $sermon.find('.sermon__video').slideUp(300);
      $sermon.find('.sermon__audio').slideUp(300);
    }

    if (!stopPlay) {
      if (modifier === 'main') {
        $current = $sermon.find('.slider__item[debug-id="slide-' + $item.data('id') + '"]');

        sermonSlider.$GoTo($item.data('id'));

      } else if (modifier === 'grid') {
        $current = $sermon.find('.sermon__media');

        $plyrVideo[0].plyr.source({
          type: 'video',
          title: 'Example title',
          sources: [
            {
              src: $item.data('video') + '.mp4',
              type: 'video/mp4'
            },
            {
              src:  $item.data('video') + '.webm',
              type: 'video/webm'
            }
          ],
          poster:  $item.data('poster')
        });

        $plyrAudio[0].plyr.source({
          type: 'audio',
          title: 'Example title',
          sources: [
            {
              src: $item.data('audio') + '.mp3',
              type:'audio/mp3'
            }
          ]
        });
        utils.centerElementInViewport($current);

      } else {
        $current = $item;
      }
      $current
        .addClass('sermon__item--' + type);

      if (modifier !== 'main') {
        $current
          .find('.sermon__' + type)
          .slideDown(300);
      }


      $btn.addClass('active');

    }
  };

  $btnVideo.on('click', function () {
    var $btn = $(this);
    playMedia($btn, 'video');

  });

  $btnAudio.on('click', function () {
    var $btn = $(this);
    playMedia($btn, 'audio');
  });

};
