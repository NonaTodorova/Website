

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

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });





});
