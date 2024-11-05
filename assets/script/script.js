$(document).ready(function () {
  $(document).ready(function () {
    $("#hamButton").click(function () {
      $(".menuBarContent").toggleClass("menuVisible"); // Toggle kelas
    });
  });

  $(".link").click(function () {
    $(".menuBarContent").removeClass("menuVisible");
  });
});
