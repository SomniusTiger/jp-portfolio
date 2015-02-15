var jpfairchild = new function() {
  var self = this;

  this.init = function() {

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

    
};

$(function() {
  jpfairchild.init();
});
