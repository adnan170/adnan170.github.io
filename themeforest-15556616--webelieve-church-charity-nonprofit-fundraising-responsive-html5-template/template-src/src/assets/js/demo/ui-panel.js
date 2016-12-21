/***************************************************************
 * Panel useful for development, where you can
 * enable or disable various theme features.
 *
 * Usually, this should be DISABLED on live website.
 ==============================================================*/
module.exports = function () {
  var _ = require('lodash');
  var panels = ['pages', 'boxed', 'patterns', 'theme_colors', 'sidebar' ];
  var options = {
    pages: [
      {url: 'about.html', name: 'About'},
      {url: 'about--full.html', name: 'About full'},
      {url: 'about--left.html', name: 'About sidebar left'},
      {url: 'account.html', name: 'Account'},
      {url: 'blog_details.html', name: 'Blog details'},
      {url: 'blog_details--full.html', name: 'Blog details full'},
      {url: 'blog_details--left.html', name: 'Blog details sidebar left'},
      {url: 'blog_grid.html', name: 'Blog grid'},
      {url: 'blog_grid--full.html', name: 'Blog grid full'},
      {url: 'blog_grid--left.html', name: 'Blog grid sidebar left'},
      {url: 'blog_list.html', name: 'Blog list'},
      {url: 'blog_list--full.html', name: 'Blog list full'},
      {url: 'blog_list--left.html', name: 'Blog list sidebar left'},
      {url: 'blog_masonry.html', name: 'Blog masonry'},
      {url: 'blog_masonry--full.html', name: 'Blog masonry full'},
      {url: 'blog_masonry--left.html', name: 'Blog masonry sidebar left'},
      {url: 'calendar.html', name: 'Calendar'},
      {url: 'cart.html', name: 'Cart'},
      {url: 'cause_details.html', name: 'Cause details'},
      {url: 'cause_details--full.html', name: 'Cause details full'},
      {url: 'cause_details--left.html', name: 'Cause details sidebar left'},
      {url: 'causes_grid.html', name: 'Causes grid'},
      {url: 'causes_grid--full.html', name: 'Causes grid full'},
      {url: 'causes_grid--left.html', name: 'Causes grid sidebar left'},
      {url: 'causes_list.html', name: 'Causes list'},
      {url: 'causes_list--donate.html', name: 'Causes list donate'},
      {url: 'causes_list--full.html', name: 'Causes list full'},
      {url: 'causes_list--left.html', name: 'Causes list sidebar left'},
      {url: 'checkout.html', name: 'Checkout'},
      {url: 'community.html', name: 'Community'},
      {url: 'community--full.html', name: 'Community full'},
      {url: 'community--left.html', name: 'Community sidebar left'},
      {url: 'community_member.html', name: 'Community member'},
      {url: 'community_member--full.html', name: 'Community member full'},
      {url: 'community_member--left.html', name: 'Community member sidebar left'},
      {url: 'contacts.html', name: 'Contacts'},
      {url: 'contacts_header_2.html', name: 'Contacts header 2'},
      {url: 'contacts_header_3.html', name: 'Contacts header 3'},
      {url: 'contacts_header_4.html', name: 'Contacts header 4'},
      {url: 'contacts_header_5.html', name: 'Contacts header 5'},
      {url: 'contacts_header_6.html', name: 'Contacts header 6'},
      {url: 'donate.html', name: 'Donate'},
      {url: 'email.html', name: 'Email'},
      {url: 'error_404.html', name: 'Error 404'},
      {url: 'event_details.html', name: 'Event details'},
      {url: 'event_details--full.html', name: 'Event_details full'},
      {url: 'event_details--left.html', name: 'Event details sidebar left'},
      {url: 'events_grid.html', name: 'Events grid'},
      {url: 'events_grid--full.html', name: 'Events grid full'},
      {url: 'events_grid--left.html', name: 'Events grid sidebar left'},
      {url: 'events_list.html', name: 'Events list'},
      {url: 'events_list--full.html', name: 'Events list full'},
      {url: 'events_list--left.html', name: 'Events list sidebar left'},
      {url: 'faq.html', name: 'Faq'},
      {url: 'feature_bootstrap.html', name: 'Feature bootstrap'},
      {url: 'feature_boxed.html', name: 'Feature boxed'},
      {url: 'feature_no_content.html', name: 'Feature no content'},
      {url: 'feature_rtl.html', name: 'Feature rtl'},
      {url: 'feature_typography.html', name: 'Feature typography'},
      {url: 'feature_ui.html', name: 'Feature ui'},
      {url: 'gallery.html', name: 'Gallery'},
      {url: 'gallery--2.html', name: 'Gallery'},
      {url: 'gallery--masonry.html', name: 'Gallery'},
      {url: 'gallery--masonry-2.html', name: 'Gallery'},
      {url: 'gallery_caption.html', name: 'Gallery caption'},
      {url: 'gallery_caption--2.html', name: 'Gallery caption'},
      {url: 'gallery_caption--masonry.html', name: 'Gallery caption masonry'},
      {url: 'gallery_caption--masonry-2.html', name: 'Gallery caption masonry'},
      {url: 'gallery_details.html', name: 'Gallery details'},
      {url: 'index.html', name: 'Index'},
      {url: 'index_2.html', name: 'Index 2'},
      {url: 'index_3.html', name: 'Index 3'},
      {url: 'index_auth.html', name: 'Index auth'},
      {url: 'index_header_2.html', name: 'Index header 2'},
      {url: 'index_header_3.html', name: 'Index header 3'},
      {url: 'index_header_4.html', name: 'Index header 4'},
      {url: 'index_header_5.html', name: 'Index header 5'},
      {url: 'index_header_6.html', name: 'Index header 6'},
      {url: 'product.html', name: 'Product'},
      {url: 'sermon_details.html', name: 'Sermon details'},
      {url: 'sermon_details--full.html', name: 'Sermon details full'},
      {url: 'sermon_details--left.html', name: 'Sermon details sidebar left'},
      {url: 'sermons_grid.html', name: 'Sermons grid'},
      {url: 'sermons_grid--full.html', name: 'Sermons grid full'},
      {url: 'sermons_grid--left.html', name: 'Sermons grid sidebar left'},
      {url: 'sermons_list.html', name: 'Sermons list'},
      {url: 'sermons_list--full.html', name: 'Sermons list full'},
      {url: 'sermons_list--left.html', name: 'Sermons list sidebar left'},
      {url: 'shop.html', name: 'Shop'},
      {url: 'user_login.html', name: 'User login'},
      {url: 'user_register.html', name: 'User register'},
      {url: 'user_restore_pass.html', name: 'User restore pass'}
    ],
    boxed: false,
    bg_patterns: ['brickwall', 'debut_light', 'diagonal_lines_01', 'diagonal-noise', 'dust_2X', 'groovepaper', 'little_pluses', 'p4', 'p5',
      'retina_dust', 'ricepaper2', 'shl', 'squairy_light', 'stardust_2X', 'subtle_dots', 'subtle_dots_2X', 'white_brick_wall', 'worn_dots'],
    theme_colors: ['default', 'beige', 'blue_dark', 'blue_light', 'brown', 'gray', 'yellow', 'violet'],
    header_fixed: true,
    header_colors: [],
    dropdown_effects: ['default', 'bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
    slider_effects: ['default', 'bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
    hover_effects: ['default'],
    sidebar: ['left', 'right', 'hide'],
    rtl: false
  };

  var UIpanel = (function () {
    var widget = {},
      $body = $('body'),
      $uiPanel,
      $uiPanelToogle,
      $linkStyles = document.querySelectorAll('link');

    widget.ui = {
      select: function (data, type, selected) {
        var _this = this;
        _this.getWrapper = function (type, options) {
          return '<select class="form-control js-uipanel-control-' + type + '"><option value="">Choose option</option>' + options + '</select>';
        };
        _this.getOptions = function (data) {
          return data.map(function (item) {
            return '<option value="' + item.value + '" ' + (selected === item.value ? 'selected' : '') + '>' + item.title + '</option>';
          });
        };

        return _this.getWrapper(type, _this.getOptions(data));
      },
      radio: function (value, title, type) {
        return '<div class="checkbox">' +
          '<input id="option_' + type + '_' + title + '" type="radio" name="' + type + '" class="in-radio js-uipanel-control-' + type + '" value="' + value + '">' +
          '<label for="option_' + type + '_' + title + '" class="in-label">' + title + '</label>' +
          '</div>';

      },
      formGroup: function (label, control) {
        return '<div class="form-group">' +
          '<label for="" class="control-label">' + label + '</label>' +
          control +
          '</div>';
      }
    };

    widget.panels = {
      pages: {
        onChange: function (e) {
          window.location.href = window.location.href.replace(/([a-z0-9_&\-]*\.html#?.*)$/i, e.currentTarget.value);
        },
        add: function () {
          var data = options.pages.map(function (page) {
            return {
              value: page.url,
              title: page.name
            }
          });

          var url = window.location.pathname;
          var filename = url.substring(url.lastIndexOf('/') + 1);
          var control = widget.ui.select(data, 'pages', filename);
          var formGroup = widget.ui.formGroup('Pages', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('pages');
        }
      },
      boxed: {
        onChange: function (e) {
          if (e.currentTarget.value == 'true') {
            $body.addClass('boxed');
          } else {
            $body.removeClass('boxed');
          }
        },
        add: function () {
          var controls = widget.ui.radio(false, 'No', 'boxed');
          controls += widget.ui.radio(true, 'Yes', 'boxed');
          var formGroup = widget.ui.formGroup('Boxed', controls);
          $uiPanel.append(formGroup);
          widget.listeners.control('boxed');
        }
      },
      rtl: {
        onChange: function (e) {
          if (e.currentTarget.value == 'true') {
            $body.addClass('rtl');
          } else {
            $body.removeClass('rtl');
          }
        },
        add: function () {
          var controls = widget.ui.radio(false, 'No', 'rtl');
          controls += widget.ui.radio(true, 'Yes', 'rtl');
          var formGroup = widget.ui.formGroup('RTL', controls);
          $uiPanel.append(formGroup);
          widget.listeners.control('rtl');
        }
      },
      patterns: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/bg-[a-zX0-9_\-&]*/, '');
          $body.addClass('bg-' + e.currentTarget.value);
        },
        add: function () {
          var data = options.bg_patterns.map(function (pattern) {
            return {
              value: pattern,
              title: pattern
            }
          });

          var control = widget.ui.select(data, 'patterns');
          var formGroup = widget.ui.formGroup('Patterns', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('patterns');
        }
      },
      theme_colors: {
        onChange: function (e) {
          var themeId = e.currentTarget.value;
          if (!themeId) return;
          var config = require('../module/config');
          [].forEach.call($linkStyles, function (link) {
            if (/\/css\/theme\-/.test(link.href)) {
              var xhr = new XMLHttpRequest();
              xhr.open('GET', 'assets/css/theme-' + themeId + '.css');
              xhr.send('');
              xhr.addEventListener("load", function(e) {
                console.log('loaded');
                link.href = 'assets/css/theme-' + themeId + '.css';
                config.colorTheme = themeId;
              }, false);
            }
          });
        },
        add: function () {
          var data = options.theme_colors.map(function (pattern) {
            return {
              value: pattern,
              title: pattern
            }
          });

          var control = widget.ui.select(data, 'theme_colors');
          var formGroup = widget.ui.formGroup('Theme colors', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('theme_colors');
        }
      },
      dropdown_effects: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/menu-[a-zA-Z]*/, '');
          $body.addClass('menu-' + e.currentTarget.value);
        },
        add: function () {
          var data = options.dropdown_effects.map(function (effect) {
            return {
              value: effect,
              title: effect
            }
          });

          var control = widget.ui.select(data, 'dropdown_effects');
          var formGroup = widget.ui.formGroup('Menu effects', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('dropdown_effects');
        }
      },
      slider_effects: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/slider\-\-[a-zA-Z]*/, '');
          $body.addClass('slider--' + e.currentTarget.value);
        },
        add: function () {
          var data = options.slider_effects.map(function (effect) {
            return {
              value: effect,
              title: effect
            }
          });

          var control = widget.ui.select(data, 'slider_effects');
          var formGroup = widget.ui.formGroup('Slider effects', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('slider_effects');
        }
      },
      hover_effects: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/hover-[a-zA-Z]*/, '');
          $body.addClass('hover-' + e.currentTarget.value);
        },
        add: function () {
          var data = options.hover_effects.map(function (effect) {
            return {
              value: effect,
              title: effect
            }
          });

          var control = widget.ui.select(data, 'hover_effects');
          var formGroup = widget.ui.formGroup('Hover effects', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('hover_effects');
        }
      },
      compact: {
        onChange: function (e) {
          if (e.currentTarget.value == 'true') {
            $body.addClass('compact');
          } else {
            $body.removeClass('compact');
          }
        },
        add: function () {
          var controls = widget.ui.radio(false, 'No', 'compact');
          controls += widget.ui.radio(true, 'Yes', 'compact');
          var formGroup = widget.ui.formGroup('Header compact', controls);
          $uiPanel.append(formGroup);
          widget.listeners.control('compact');

        }
      },
      header_colors: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/header_color_[a-zX0-9_\-&]*/, '');
          $body.addClass(e.currentTarget.value);
        },
        add: function () {
          var data = options.header_colors.map(function (style) {
            return {
              value: style[0],
              title: style[1]
            }
          });

          var control = widget.ui.select(data, 'header_colors');
          var formGroup = widget.ui.formGroup('Header style', control);
          $uiPanel.append(formGroup);
          widget.listeners.control('header_colors');
        }
      },
      sidebar: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/sidebar-[a-zX0-9_\-&]*/, '');
          $body.addClass('sidebar-' + e.currentTarget.value);
        },
        add: function () {
          var controls = options.sidebar.map(function (type) {
            return widget.ui.radio(type, type, 'sidebar');
          });

          var formGroup = widget.ui.formGroup('Sidebar', controls);
          $uiPanel.append(formGroup);
          widget.listeners.control('sidebar');
        }
      },
      listing_grid: {
        onChange: function (e) {
          $body[0].className = $body[0].className.replace(/listing-grid-[a-zX0-9_\-&]*/, '');
          $body.addClass('listing-grid-' + e.currentTarget.value);
        },
        add: function () {
          var controls = options.listing_grid.map(function (type) {
            return widget.ui.radio(type, type, 'listing_grid');
          });

          var formGroup = widget.ui.formGroup('Listing grid', controls);
          $uiPanel.append(formGroup);
          widget.listeners.control('listing_grid');
        }
      }
    };

    widget.addPanels = function (_panels) {
      _panels.forEach(function (panel) {
        widget.panels[panel].add();
      });
    };

    widget.listeners = {
      panel: function () {
        $uiPanel = $('.js-ui-panel');
        $uiPanelToogle = $('.js-ui-panel-toggle');
        $uiPanelToogle.on('click', function () {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $uiPanel.removeClass('opened');
          } else {
            $(this).addClass('active');
            $uiPanel.addClass('opened');
          }
        });

        var $uiPanelButtonScroll = $('.js-ui-panel-scroll');

        $uiPanelButtonScroll.on('click', function () {
          var delta = $(this).data('dir') == 'up' ? -500 : 500;
          var offsetTop = $(window).scrollTop();
          $('html, body').animate({scrollTop: offsetTop + delta}, 100);
        });

        var $uiPanelButtonNext = $('.js-ui-panel-next');

        $uiPanelButtonNext.on('click', function () {
          var $uiControlPages = $('.js-uipanel-control-pages');
          var current = $uiControlPages.find('option:selected').index();
          var $uiControlPagesNext = $uiControlPages.find('option')[current+1];
          var url = $($uiControlPagesNext).attr('value');
          if (url) window.location.href = window.location.href.replace(/([a-z0-9_&\-]*\.html#?.*)$/i, url);
        });
      },
      control: function (type) {
        $('.js-uipanel-control-' + type).on('change', function (e) {
          widget.panels[type].onChange(e);
        });
      }
    };


    widget.init = function (_panels) {

      $('<link>')
        .appendTo('head')
        .attr({type: 'text/css', rel: 'stylesheet'})
        .attr('href', 'assets/css/ui-panel.css');

      var htmlBlock = '<div class="ui-panel js-ui-panel">' +
        '<button class="ui-panel__toggle js-ui-panel-toggle"></button>' +
        '<button type="button" class="ui-panel__btn ui-panel__btn--up js-ui-panel-scroll" data-dir="up"></button>' +
        '<button type="button" class="ui-panel__btn ui-panel__btn--down js-ui-panel-scroll" data-dir="down"></button>' +
        '<button type="button" class="ui-panel__btn ui-panel__btn--next js-ui-panel-next"></button>' +
        '</div>';
      $body.append(htmlBlock);

      widget.listeners.panel();
      widget.addPanels(_panels);
    };

    return widget;
  })();
  setTimeout(function(){
    UIpanel.init(panels);
    return UIpanel;
  });
};
