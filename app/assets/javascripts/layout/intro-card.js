// Detects height of browser window, sets intro card height to
// browser window height

$(function(){
  // Sets height on initial page load
  $(".intro-card").css({
    'line-height' : $(window).height() + "px"
  });

  // Sets height on window resize
  $(window).resize(function(){
    $(".intro-card").css({
      'line-height' : $(window).height() + "px"
    });
  });
});