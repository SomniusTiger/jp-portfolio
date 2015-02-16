var jpfairchild = new function() {
  var self = this;

  this.init = function() {
    self.toggleDropdown();
    self.scrollOnClick();
    self.setSlideHeight();
    self.fitvidsInit();
    self.wowInit();
  };

  this.preventMainScrolling = function() {
    $('html, body').css({
      'height': 'auto',
      'overflow': 'hidden'
    });
  };

  this.resumeMainScrolling = function() {
    $('html, body').css({
      'height': '100%',
      'overflow': 'visible'
    });
  };

  this.toggleDropdown = function() {
    $('.header-bars').click(function() {
      if ( $('.dropdown-menu').hasClass('open') ) {
        $(this).find('.fa').addClass('fa-bars').removeClass('fa-times');
        $('.dropdown-menu, header, .header-title').removeClass('open');
        self.resumeMainScrolling();
      }
      else {
        $(this).find('.fa').addClass('fa-times').removeClass('fa-bars');
        $('.dropdown-menu, header, .header-title').addClass('open');
        self.preventMainScrolling();
      }

    });
  };

  this.scrollOnClick = function() {
    $('.intro-card-down-arrows, .project-down-arrows').click(function(){
      $('html, body').animate({
        scrollTop: $(window).height()
      }, 1000, 'easeInOutQuint');
    });
  };

  this.parallaxScroll = function() {
    // As page scrolls, add negative top margin to the project image
    // relative to the amount the user scrolls

    // Get window scroll position
    var scrollTop = $(window).scrollTop();

    // Get page width & height
    var pageHeight =  window.innerHeight || window.documentElement.clientHeight || window.body.clientHeight;
    var pageWidth =   window.innerWidth  || window.documentElement.clientWidth  || window.body.clientWidth;

    // Move by third of the window's scroll position
    // Don't scroll if less than a certain height, or not in landscape
    if (pageWidth > 768 && pageWidth > pageHeight) {
      if ( !$('.project-main-image').hasClass('contain') ) {
        $('.project-main-image').css({
          'background-position': '50% ' + Math.round( ( -scrollTop / 3 ) * 10 ) / 10 + 'px'
        });
      } 
      if ($('.project-main-image').hasClass('contain')) {
        $('.project-main-image').css({
          'background-position': '50% ' + (50 + Math.round( ( -scrollTop / 30 ) * 100 ) / 100 + '%')
        });
      }
    }
  };

  this.setSlideHeight = function() {
    var pageWidth =   window.innerWidth  || window.documentElement.clientWidth  || window.body.clientWidth;

    if (pageWidth > 540) {
      $('.container, .project-main-image-container, .intro-card').css({
        'line-height' : $(window).height() + 'px',
        'height' : $(window).height() + 'px'
      });
    }
    else {
      $('.container, .intro-card').css({
        'line-height' : 'normal',
        'height' : 'auto'
      });
      $('.project-main-image-container').css({
        'line-height' : $(window).height() + 'px',
        'height' : $(window).height() + 'px'
      });
    }
  };

  this.fitvidsInit = function() {
    $(".project-section-video").fitVids();
  };

  this.wowInit = function() {
    new WOW().init();
  };

};

$(function() {
  jpfairchild.init();
});

$(window).on('scroll', function() {
  jpfairchild.parallaxScroll();
});

$(window).resize(function(){
  jpfairchild.setSlideHeight();
});
