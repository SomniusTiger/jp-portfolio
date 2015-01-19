// Detects height of browser window, sets intro card height to
// browser window height

$(function(){
  setContainerHeight();
});

// Sets height on window resize
$(window).resize(function(){
  setContainerHeight();
});

function setContainerHeight() {
  $('.container').css({
    'line-height' : $(window).height() + 'px',
    'height' : $(window).height() + 'px'
  });
}
