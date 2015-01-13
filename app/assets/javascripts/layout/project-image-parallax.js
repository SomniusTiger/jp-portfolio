// Logic for getting project images to parallax scroll

var parallaxScroll = new function() {
  var self =    this,
  pageHeight =  $(window).height(),
  pageWidth =   $(window).width();

  this.imgSize = function() {
    // Resize container element to always be the height of the page
    $('.project-main-image-container').height(pageHeight);
  };

  this.Scroll = function() {
    // As page scrolls, add negative top margin to the project image
    // relative to the amount the user scrolls

    // Get window scroll position
    var scrollTop = $(window).scrollTop();

    // Set background position to a third of the window's scroll position
    // Scroll rate is also based on window height
    $('.project-main-image').css({
      'background-position': "50% " + Math.round( ( -scrollTop / 3 ) * 10 ) / 10 + "px"
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
