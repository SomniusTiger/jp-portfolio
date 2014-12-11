// Logic for when the dropdown opens and closes

$(function () {

  $('.header-bars').click(function() {

    if ( $('.dropdown-menu').hasClass('open') ) {
      $(this).find('.fa').addClass('fa-bars').removeClass('fa-times');
      $('.dropdown-menu').removeClass('open');
      $(this).parent().removeClass('open');
    }
    else {
      $(this).find('.fa').addClass('fa-times').removeClass('fa-bars');
      $('.dropdown-menu').addClass('open');
      $(this).parent().addClass('open');
    }

  });

});
