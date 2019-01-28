$(document).ready(function() {
  // Activate the Carousel
  $("#mycarousel").carousel({
    interval: 2000
  });

  // Carousel Play and Pause button
  $("#carousel-pause").click(function() {
    if( $("#carousel-pause").children("span").hasClass("fa-pause")) {
      $("#carousel-pause").carousel("pause");
      $("#carousel-pause").children("span").removeClass("fa-pause");
      $("#carousel-pause").children("span").addClass("fa-play");
    } else if( $("#carousel-pause").children("span").hasClass("fa-play")){
      $("#carousel-pause").carousel("cycle");
      $("#carousel-pause").children("span").removeClass("fa-play");
      $("#carousel-pause").children("span").addClass("fa-pause");
    }
  });

  // Add the login modal to be displayed when click
  $(".modal-button-login").click(function() {
    $('#loginModal').modal('toggle');
  });

  // Add the Reserve table modal to be displayed when click
  $(".modal-button-reserve-table").click(function() {
    $('#reserveTableModal').modal('toggle');
  });


  //
});