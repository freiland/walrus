$(document).ready(function() {
  $(".clickable").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $(".clickable2").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});