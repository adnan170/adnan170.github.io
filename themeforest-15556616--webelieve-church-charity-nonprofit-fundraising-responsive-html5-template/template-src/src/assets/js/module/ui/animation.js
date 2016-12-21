"use strict";
var reveal = function (selector, options, delay) {
  if(!$(selector).length) return;
  sr.reveal(selector, options, delay);
};

module.exports = function () {
  var ScrollReveal = require('scrollreveal');

  window.sr = ScrollReveal({
    //reset: true,
    viewFactor: 0.3,
    duration: 800
  });


  var gridSize = require('../grid-size');
  var $body = $('body');


  if ($body.hasClass('scroll-animation') && gridSize.get() === 'lg') {

    // widgets
    reveal('.main .widget:not(.widget--sidebar) .widget__title', {
      scale: 1.1
    });

    //nextevent--countcircles
    var circlesReveal = {
      easing: 'ease-in-out',
      rotate: {z: 100},
      scale: 1,
      distance: '0px'
    };

    //reveal('.js-countcircles > div', circlesReveal, 100);
    reveal('.nextevent--countcircles .nextevent__details', {
      distance: '50px',
      origin: 'bottom',
      scale: 0.8,
      opacity: 0.8
    });


    // about simple
    reveal('.about--simple .about__details', {
      distance: '90px',
      origin: 'right'
    });

    // sermon main
    reveal('.sermon--main .listing__item', {
      distance: '30px',
      origin: 'top'
    }, 120);

    reveal('.sermon--main .sermon__link-item', {
      scale: 1.3
    }, 20);

    // sermon--ordered
    reveal('.sermon--ordered .sermon__item', {
      distance: '30px',
      origin: 'bottom',
      rotate: {z: 10},
    }, 120);

    reveal('.sermon--ordered .sermon__link-item', {
      scale: 1.3
    }, 20);


    // event main
    reveal('.event--main .listing__item', {
      distance: '50px',
      origin: 'bottom',
      rotate: {x: 100}
    }, 120);

    // event--split
    reveal('.event--split .event__item', {
      distance: '50px',
      origin: 'bottom',
      rotate: {y: 100}
    }, 120);


    // post main
    reveal('.post--main .post__item--0', {
      distance: '150px',
      origin: 'left'
    });

    reveal('.post--main .post__item--1', {
      distance: '150px',
      origin: 'top',
      delay: 50
    });

    reveal('.post--main .post__item--2', {
      distance: '150px',
      origin: 'right',
      delay: 100
    });
    // nextevent--countpanel
    reveal('.nextevent--countpanel .countdown--panel', {
      rotate: {x: 100}
    });
    reveal('.nextevent--countpanel .nextevent__preview', {
      distance: '50%',
      origin: 'left'
    });
    reveal('.nextevent--countpanel .nextevent__details', {
      distance: '50%',
      origin: 'right'
    });

    //  nextevent--counttimer
    reveal('.nextevent--counttimer .nextevent__preview', {
      distance: '50%',
      origin: 'bottom'
    });
    reveal('.nextevent--counttimer .nextevent__details', {
      distance: '50%',
      origin: 'bottom'
    });

    //about--columns
    reveal('.about--columns .about__item', {
      distance: '50%',
      origin: 'bottom'
    }, 100);
    //sermon--column
    reveal('.sermon--column .sermon__item', {
      rotate: {y: 100}
    }, 150);


    // cause--donation
    reveal('.cause--donation .cause__details', {
      distance: '50%',
      origin: 'bottom'
    });
    reveal('.cause--donation .cause__counter', {
      distance: '50%',
      origin: 'left'
    });
    reveal('.cause--donation .cause__preview', {
      distance: '50%',
      origin: 'right'
    });

    //event--columns

    reveal('.event--columns .event__item', {
      scale: 1.3
    }, 150);

    //event--columns
    reveal('.post--standart .post__item', {
      distance: '50%',
      origin: 'right'
    }, 150);

    //about--minimal
    reveal('.about--minimal .about__item', {
      distance: '50px',
      origin: 'top',
      scale: 1.2
    }, 200);

    //ministry--gallery
    reveal('.ministry--gallery .ministry__gallery-item', {
      distance: '150px',
      origin: 'bottom',
      scale: 1
    }, 150);

    //post--preview
    reveal('.post--preview .post__item', {
      distance: '150px',
      origin: 'bottom',
      scale: 1
    }, 200);

    //post--masonry
    reveal('.post--masonry .post__item', {
      distance: '50px',
      origin: 'bottom',
      scale: 1
    });

    // paralax effect for main slider
    $(window).on('scroll', function () {
      if(window.detectIE || $('.slider--wide').length === 0 ) return;
      var scrollAmount = $(window).scrollTop() / 2;
      scrollAmount = Math.round(scrollAmount);

      if(scrollAmount > 500) return;
      $('.slider--wide .slider__block').css('transform', 'translateY(' + scrollAmount + 'px)');
    })
  } else {
    $body.removeClass('scroll-animation')
  }
}();