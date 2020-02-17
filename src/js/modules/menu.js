'use strict';

$(".anchor").on("click", function () {
  var get_id = $(this).attr("href");
  var target = $(get_id).offset().top;
  $("html, body").animate({ scrollTop: target }, 800);
});