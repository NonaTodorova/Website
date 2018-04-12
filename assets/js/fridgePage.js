import Quagga from 'quagga'; // ES6
const Quagga = require('quagga').default; // Common JS (important: default)

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

$(#scanbtn).click(function(){
  Quagga.start();
}
});
