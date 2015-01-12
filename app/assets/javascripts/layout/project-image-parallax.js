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

    // Set margin-top to a third of the window's scroll position
    // Scroll rate is also based on window height
    $('.project-main-image').css({
      'margin-top': ( scrollTop / 4 )
    });
  };
};

$(function() {
  parallaxScroll.imgSize();
});

$(window).resize(function() {
  parallaxScroll.imgSize();
});

$(window).scroll(function() {
  parallaxScroll.Scroll();
});
