// Logic for getting project images to parallax scroll

var parallaxScroll = new function() {
  var self = this;

  this.Scroll = function() {
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
      $('.project-main-image').css({
        'background-position': '50% ' + Math.round( ( -scrollTop / 3 ) * 10 ) / 10 + 'px'
      });
    }
  };
};

$(window).on('scroll', function() {
  parallaxScroll.Scroll();
});
