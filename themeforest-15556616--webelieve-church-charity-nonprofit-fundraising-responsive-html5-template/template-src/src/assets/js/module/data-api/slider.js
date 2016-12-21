var _ = require('lodash');
var dataApiHelper = require('../data-api-helpers');
var config = require('../config');

function buildOptions($item) {
  var data = dataApiHelper.getOptions($item,
    [ ],
    [ ],
    {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      accessibility: false,
      asNavFor: true,
      arrows: false,
      fade: false,
      autoplay: false,
      autoplaySpeed: 3000
    });

  return data;
}


module.exports = function () {
  /***************************************************************
   * Initialize sliders
   * See http://kenwheeler.github.io/slick/ for more options
   ==============================================================*/
  $('.js-dapi-slider').each(function () {
    var $container = $(this);
    var options = buildOptions($container);
    var $sliderSlick = $container.find('.js-slick-slider');
    var $sliderNavSlick;
    var configSlider = {
      dots: options.dots,
      infinite: options.infinite,
      speed: options.speed,
      slidesToShow: options.slidesToShow,
      accessibility: options.accessibility,
      rtl: config.dir === 'rtl',
      fade: options.fade,
      autoplay: options.autoplay,
      autoplaySpeed: options.autoplaySpeed
    };

    if (options.asNavFor){
      $sliderNavSlick = $container.next('.slider').find('.js-slick-slider');
      configSlider.asNavFor = $sliderNavSlick;
    }
    if ($('body').hasClass('rtl')) configSlider.rtl = true;

    if (options.arrows) {
      configSlider.arrows = true;
      configSlider.prevArrow = $container.find('.js-slider-prev');
      configSlider.nextArrow = $container.find('.js-slider-next');
    } else {
      configSlider.arrows = false;

    }
    $sliderSlick.slick(configSlider);

    var slidePlayVideo = function (slider, currentSlide, play) {
      var slide = slider.$slides[currentSlide];
      var $video = $(slide).find('.slider-video');

      if ( !$video.length ) return;
      if (play) {
        $video[0].play();
      } else {
        $video[0].pause();
      }
    };

    $sliderSlick
      .on('afterChange', function (e, slider, currentSlide) {
        slidePlayVideo(slider, currentSlide, true);
      })
      .on('beforeChange', function (e, slider, currentSlide) {
        slidePlayVideo(slider, currentSlide, false);
      });

    slidePlayVideo($sliderSlick.slick('getSlick'), 0, true);

    if (options.asNavFor) {
      var $sliderNav = $container.next('.slider');

      $sliderNavSlick
        .slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          focusOnSelect: true,
          arrows: false,
          accessibility: false,
          asNavFor: $sliderSlick
        });

      $sliderNavSlick.find('[data-slick-index="0"]').addClass('slick-current');

      $sliderNavSlick
        .on('afterChange', function (e, slider, currentSlide) {
          $sliderNavSlick.find('.slick-slide').removeClass('slick-current');
          $sliderNavSlick.find('[data-slick-index="' + currentSlide + '"]').addClass('slick-current');
        });

      $container
        .on('mouseenter', '.js-slider-next', function () {
          $sliderNav.addClass('slider--hover');
        })
        .on('mouseleave', '.js-slider-next', function () {
          $sliderNav.removeClass('slider--hover');
        })
    }
  });
};