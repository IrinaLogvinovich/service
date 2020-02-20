'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
  var target = $(get_id).offset().top;
  $("html, body").animate({ scrollTop: target }, 800);
});

$(".header__burger").on('click', function(){
  $('.header__menu').fadeToggle(400);

  $('.header__menu').on('click', function(){
    if($(document).width() <=1024) {
      $(this).hide();
    }
  });
});

$(window).on('resize', function(){
  if($(document).width() > 1024) {
    $('.header__menu').show();
  }
})