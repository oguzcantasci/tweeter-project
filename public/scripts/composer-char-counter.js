/* eslint-disable no-undef */
$(document).ready(function() {
  $("#tweet-text").on("keyup", function(e) {
    let chars = (140 - $(this).val().length);
    if (chars < 0) {
      $(".counter").addClass("exceed");
    } else {
      $(".counter").removeClass("exceed");
    }
    $(".counter").text(chars);
  });
});