// Detects height of browser window, sets intro card height to
// browser window height

$(function(){
  setContainerHeight();
  setComputerHeight();

  // Sets height on window resize
  $(window).resize(function(){
    setContainerHeight();
    setComputerHeight();
  });

});

function setContainerHeight() {
  $('.container').css({
    'line-height' : $(window).height() + 'px',
    'height' : $(window).height() + 'px'
  });
}

function setComputerHeight() {
  $('.computer').css({
    'max-height' : $(window).height() - 16 * 9 + 'px'
  });
  $('.computer .computer-img').css({
    'height' : $(window).height() - 16 * 9 + 'px'
  });
}
