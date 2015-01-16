// Logic for getting project images to parallax scroll

var parallaxScroll = new function() {
  var self = this;

  this.imgSize = function() {
    // Resize container element to always be the height of the page
    var pageHeight =  $(window).height();
    var pageWidth =   $(window).width();

    $('.project-main-image-container').height(pageHeight);
  };

  this.Scroll = function() {
    // As page scrolls, add negative top margin to the project image
    // relative to the amount the user scrolls

    // Get window scroll position
    var scrollTop = $(window).scrollTop();

    // Set Y of translate3d to a third of the window's scroll position
    // Scroll rate is also based on window height
    $('.project-main-image').css({
      'transform': 'translate3d(0, ' + Math.round( ( scrollTop / 3 ) * 10 ) / 10 + 'px, 0)'
    });
  };
};

$(function() {
  parallaxScroll.imgSize();
});

$(window).resize(function() {
  parallaxScroll.imgSize();
});

$(window).on('scroll', function() {
  parallaxScroll.Scroll();
});
