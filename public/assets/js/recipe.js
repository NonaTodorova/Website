/*
Getting the starting recipes function
*/

$(document).ready(function(){

  var url = "https://api.edamam.com/search?q="+"Chicken" + "&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
  $.getJSON(url,function(jsondata){

getResultsForRecipes(jsondata);
//   var string = JSON.stringify(jsondata,null,4)
// console.log(string);
});
});

/*
Search field function
*/
$(function(){
    $('#searchform').submit(function(){
      var searchTerms = $("#searchterms").val();
      getRecipesResults(searchTerms);
      return false;
    });
});




/*
Function to get results from the recipes API
*/
  function getRecipesResults(searchTerms){

// alert("hello");

  var url = "https://api.edamam.com/search?q="+searchTerms+ "&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
  $.getJSON(url,function(jsondata){
//console.log(jsondata);
getResultsForRecipes(jsondata);
console.log(jsondata);
  // var string = JSON.stringify(jsondata,null,4)


 // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

});
};


/*
Function to get the results and display them on the screen
*/

function getResultsForRecipes(jsondata){




var output = "";

  for(var i = 0 ; i<jsondata.hits.length;i++){
  $('#scroll-bar').empty();

var card = "card";
    var image = jsondata.hits[i].recipe.image;
     var label = jsondata.hits[i].recipe.label;
     var servings = jsondata.hits[i].recipe.yield;
     // var adv = jsondata.hits[i].recipe.dietLabels[0];
      var ingr = jsondata.hits[i].recipe.ingredientLines;
    //  console.log(ingr);

     //  var ingr_String = "";
     //  for(var i=0;i<ingr.length;i++){
     //    ingr_String += ingr[i] + " ";
     // }
     var calories = Math.round(jsondata.hits[i].recipe.calories);
     //
     // var fatLabel = jsondata.hits[i].recipe.totalNutrients.FAT.label;
     // var fat_quant = jsondata.hits[i].recipe.totalNutrients.FAT.quantity;
     //
     // var carbLabel = jsondata.hits[i].recipe.totalNutrients.CHOCDF.label;
     //
     //  var carb_quant = jsondata.hits[i].recipe.totalNutrients.CHOCDF.quantity;
     //
     //  var prot = jsondata.hits[i].recipe.totalNutrients.PROCNT.label;
     //
     //  var prot_quant = jsondata.hits[i].recipe.totalNutrients.PROCNT.quantity;


     output += '<div class= "card" >  '
      + '<img class = "card-img-top"   src=  "'+image+'"  > '
      + '<div class = "card-body" > '
      + '<p class = "card-text" > '+label+' </p> '
      + '<br>'
      + '<br>'
      + '<p class = "card-text" > '+calories+' </p> '
      +  '</div>'
      + '</div>';

      // console.log(output);




  }

    $('#recipes').html(output);

}
