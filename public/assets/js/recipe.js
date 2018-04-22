
$(function(){





//       var url = "https://api.edamam.com/api/food-database/parser?UPC=5010459005216&app_id=9afe1548&app_key=39eb2d15eef33f342a935717411d7bec";
//
//         $.getJSON(url,function(jsondata){
//
// console.log(jsondata);
//
// })



  var url_test ="https://dev.tescolabs.com/product/?gtin=5010459005216";

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
         console.log(data);
           alert("success");
       })
       .fail(function() {
           alert("error");
       });
   });





//   var url = "https://api.edamam.com/search?q=Chicken&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
//   $.getJSON(url,function(jsondata){
//
// getResultsForRecipes(jsondata);
//   var string = JSON.stringify(jsondata,null,4)
// //console.log(string);
//
//  // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;
//
// });
// });
//
//
//
//
// function getResultsForRecipes(jsondata){
//
//
//
//
// var output = "";
//
//   for(var i = 0 ; i<jsondata.hits.length;i++){
//   $('#scroll-bar').empty();
//
// var card = "card";
//     var image = jsondata.hits[i].recipe.image;
//      var label = jsondata.hits[i].recipe.label;
//      var servings = jsondata.hits[i].recipe.yield;
//      // var adv = jsondata.hits[i].recipe.dietLabels[0];
//      // var ingr = jsondata.hits[i].recipe.ingredientLines;
//      //
//      // var ingr_String = "";
//      // for(var i=0;i<ingr.length;i++){
//      //   ingr_String += ingr[i];
//      // }
//      var calories = jsondata.hits[i].recipe.calories;
//      //
//      // var fatLabel = jsondata.hits[i].recipe.totalNutrients.FAT.label;
//      // var fat_quant = jsondata.hits[i].recipe.totalNutrients.FAT.quantity;
//      //
//      // var carbLabel = jsondata.hits[i].recipe.totalNutrients.CHOCDF.label;
//      //
//      //  var carb_quant = jsondata.hits[i].recipe.totalNutrients.CHOCDF.quantity;
//      //
//      //  var prot = jsondata.hits[i].recipe.totalNutrients.PROCNT.label;
//      //
//      //  var prot_quant = jsondata.hits[i].recipe.totalNutrients.PROCNT.quantity;
//
//
//      output += '<div class= "card" >  '
//      + '<img class = "card-img-top"   src=  "'+image+'"  > '
//       + '<div class = "card-body" > '
//       + '<p class = "card-text" > '+label+' </p> '
//       +  '</div>'
//       + '</div>';
//
//       console.log(output);
//
//
//
//
//   }
//
//     $('.scroll-bar').html(output);
//
//
//
//
// }
