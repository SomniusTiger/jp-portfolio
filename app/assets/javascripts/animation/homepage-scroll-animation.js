// Determines animation of elements on homepage

$(function() {
  // Init WOW.js
  var halfWow = new WOW({
    boxClass: 'halfWow',
    offset: $(window).height()/2
  });

  halfWow.init();

  var wow = new WOW();
  wow.init();

});
