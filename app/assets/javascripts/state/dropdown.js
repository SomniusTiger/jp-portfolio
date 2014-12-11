// Logic for when the dropdown opens and closes

$(function () {

  $('.header-bars').click(function() {

    if ( $(this).siblings('.dropdown-menu').hasClass('open') ) {
      $('.dropdown-menu').removeClass('open');
    }
    else {
      $('.dropdown-menu').addClass('open');
    }

  });

});
