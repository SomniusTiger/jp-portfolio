var jpfairchild = new function() {
  var self = this;

  this.init = function() {
    self.toggleDropdown();
    self.scrollOnClick();
    self.setSlideHeight();
    self.fitvidsInit();
  };

  this.preventMainScrolling = function() {
    $('html, body').css({
      'overflow-x': 'hidden',
      'overflow-y': 'hidden'
    });
  };

  this.resumeMainScrolling = function() {
    $('html, body').css({
      'overflow-x': 'visible',
      'overflow-y': 'visible'
    });
  };

  this.toggleDropdown = function() {
    $('.header-bars').click(function() {
      if ( $('.dropdown-menu').hasClass('open') ) {
        $(this).find('.fa').addClass('fa-bars').removeClass('fa-times');
        $('.dropdown-menu').removeClass('open');
        $(this).parent().removeClass('open');
        self.resumeMainScrolling();
      }
      else {
        $(this).find('.fa').addClass('fa-times').removeClass('fa-bars');
        $('.dropdown-menu').addClass('open');
        $(this).parent().addClass('open');
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
    $('.container').css({
      'line-height' : $(window).height() + 'px',
      'height' : $(window).height() + 'px'
    });
  };

  this.fitvidsInit = function () {
    $(".project-section-video").fitVids();
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
