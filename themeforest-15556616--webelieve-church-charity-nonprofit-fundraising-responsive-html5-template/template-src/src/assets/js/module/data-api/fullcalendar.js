require('fullcalendar');

module.exports = function () {
  var gridSize = require('../grid-size');
  $('.js-calendar').each(function () {
    var $container = $(this);
    var $fullCalendar = $container.find('.js-fullcalendar');
    var $btnNextMonth = $container.find('.js-calendar-next');
    var $btnPrevMonth = $container.find('.js-calendar-prev');
    var $period = $container.find('.js-calendar-period');

    $fullCalendar.fullCalendar({
      columnFormat: gridSize.get() == 'xs' ? 'ddd' : 'dddd',
      height: gridSize.get() == 'xs' ? 500 : 'auto',
      header: false,
      events: [
        {
          title: 'Event1',
          start: '2016-03-04',
          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
        },
        {
          title: 'Don’t miss out on Gateway’s new series, Jesus, as Pastor Robert and...',
          start: '2016-03-05',
          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
        },
        {
          title: 'A powerfull life-changing experience.',
          start: '2016-03-15',
          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
        },
        {
          title: 'Build a Foundation for Parenting.  Because The Brady Bunch made it look.',
          start: '2016-03-16',
          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
        },
        {
          title: 'Don’t miss out on Gateway’s new series, Jesus, as Pastor Robert  unpacks and explains who Jesus was, is and will be.',
          start: '2016-03-27',
          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
        }
      ],
      viewRender: function () {
        var moment = $fullCalendar.fullCalendar('getDate');
        $period.text(moment.format('MMMM YYYY'))
      }
    });

    $btnPrevMonth.click(function() {
      $fullCalendar.fullCalendar('prev');
    });
    $btnNextMonth.click(function() {
      $fullCalendar.fullCalendar('next');
    });
    $(window).resize(function () {
      console.log($fullCalendar);
      $fullCalendar.fullCalendar('option', 'columnFormat', gridSize.get() == 'xs' ? 'ddd' : 'dddd');
    });

  });

};
