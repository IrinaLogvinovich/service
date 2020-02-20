'use strict';

$('.js-popup').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
  $('.popup__block--main').fadeIn(0);
});

$('.js-popup-call').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeIn(300);
  $('.popup-call__block').fadeIn(0);
});

$('.popup__close').on('click', function (evt) {
  evt.preventDefault();
  $('.popup').fadeOut(300);
  $('.popup__block--main').fadeOut(0);
  $('.popup-call__block').fadeOut(0);
  $('.popup__block--success').fadeOut(400);
});

$(document).on('keydown', function (evt) {
  if (evt.keyCode === 27) {
    $('.popup').fadeOut(300);
    $('.popup__block--main').fadeOut(0);
    $('.popup-call__block').fadeOut(0);
    $('.popup__block--success').fadeOut(400);
  }
});

$('form').on('submit', function(evt){
  evt.preventDefault();
  var formData = new FormData($(this)[0]);
  $.ajax({
    type: "POST",
    url: 'send.php',
    data: formData,
    processData: false,
    contentType: false,
    dataType: 'JSON',
    success: function(data) {
      $('.popup').fadeOut(0);
      $('.popup__block--main').fadeOut(0);
      $('.popup-call__block').fadeOut(0);
      $('.popup__block--success').fadeOut(0);
      $('.popup').fadeIn(400);
      $('.popup__block--success').fadeIn(400);
      $('.popup__block--main').fadeOut();
      $('.popup-call__block').fadeOut();
    },
    error: function(data) {
       //process error msg
    },
  });
});

const input = $('input[name="user-phone"]')[0];
let im = new Inputmask("+7 (999) 999-99-99");
if(input)im.mask(input);

const input2 = $('input[name="phone"]')[0];
let im2 = new Inputmask("+7 (999) 999-99-99");
if(input2) im2.mask(input2);

const input3 = $('input[name="feedback-phone"]')[0];
let im3 = new Inputmask("+7 (999) 999-99-99");
if(input3) im2.mask(input3);