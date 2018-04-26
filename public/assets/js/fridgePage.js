
$(function() {


$( document ).ready(function() {
    $("#profileTab").removeClass("active");
      // add class to the one we clicked
      $("#fridgeTab").addClass("active");
})

var _scannerIsRunning = false;

function startScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'),
            constraints: {
                width: 480,
                height: 320,
                facingMode: "environment"
            },
        },
        decoder: {
            readers: [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                "code_39_reader",
                "code_39_vin_reader",
                "codabar_reader",
                "upc_reader",
                "upc_e_reader",
                "i2of5_reader"
            ],
            debug: {
                showCanvas: true,
                showPatches: true,
                showFoundPatches: true,
                showSkeleton: true,
                showLabels: true,
                showPatchLabels: true,
                showRemainingPatchLabels: true,
                boxFromPatches: {
                    showTransformed: true,
                    showTransformedBox: true,
                    showBB: true
                }
            }
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        }
    });


    Quagga.onDetected(function (result) {
getUPC_Code(result.codeResult.code);
        Quagga.stop();
        _scannerIsRunning=false;

        $("#scanner-container").hide();




    });


}
  $('.btn-danger').click(function(e){
  //console.log($(this))

  var id = $(this).attr('id');

var url_test ="/delete?item="+id;

$.ajax({
         url: url_test,
         type: "GET",
     })

//WSlocation.reload(true);

})

// TEST

// Start/stop scanner
document.getElementById("btnScan").addEventListener("click", function () {
    if (_scannerIsRunning) {
        Quagga.stop();
        _scannerIsRunning=false;
        $("#scanner-container").hide();
    } else {
      $("#scanner-container").show();
        startScanner();
        _scannerIsRunning=true;


    }
}, false);




});



function getUPC_Code(upc_code){

  var url_test ="https://dev.tescolabs.com/product/?gtin="+upc_code;

$.ajax({
           url: url_test,
           beforeSend: function(xhrObj){
               // Request headers
               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","f4b09768d9a04ed198d32676e660526c");
           },
           type: "GET",
           // Request body
           data: "{body}",
       })


       .done(function(data) {

var output = "";
var desc = data.products[0].description;


var url_test ="/addItem?desc="+desc;

$.ajax({
         url: url_test,
         type: "GET",
     })


location.reload(true);

       })
       .fail(function(){
alert("Fail");
       })



}
