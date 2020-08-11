$(document).ready(function() {
  $("clickable".click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#sample-hide").toggle();
    $("body").addClass("light-background")
  });
});