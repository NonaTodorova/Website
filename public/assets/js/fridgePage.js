

$(function() {
//    $("#fridgeTab").onload(function() {
//       // remove classes from all

//       $("#profileTab").removeClass("active");
//       // add class to the one we clicked
//       $("#fridgeTab").addClass("active");
//    });
// });

$( document ).ready(function() {
    $("#profileTab").removeClass("active");
      // add class to the one we clicked
      $("#fridgeTab").addClass("active");
})

$(function().ready(function()) {

  $("#scanbtn").click(function() {
      quagga.start();

  })

});



});
