



$(function() {

  $('#searchform').submit(function(){
    var searchTerms = $("#searchterms").val();
    getRecipesResults(searchTerms);
    return false;
  });
  });

  function getRecipesResults(searchTerms){

  var url = "https://api.edamam.com/search?q="+searchTerms+ "&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
  $.getJSON(url,function(jsondata){

getResultsForRecipes(jsondata);
  var string = JSON.stringify(jsondata,null,4)
console.log(string);

 // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

});
};




function getResultsForRecipes(jsondata){




var output = "";

  for(var i = 0 ; i<jsondata.hits.length;i++){
  $('#scroll-bar').empty();

var card = "card";
    var image = jsondata.hits[i].recipe.image;
     var label = jsondata.hits[i].recipe.label;
     var servings = jsondata.hits[i].recipe.yield;
     // var adv = jsondata.hits[i].recipe.dietLabels[0];
     // var ingr = jsondata.hits[i].recipe.ingredientLines;
     //
     // var ingr_String = "";
     // for(var i=0;i<ingr.length;i++){
     //   ingr_String += ingr[i];
     // }
     var calories = jsondata.hits[i].recipe.calories;
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
      +  '</div>'
      + '</div>';

      console.log(output);




  }

    $('#recipes').html(output);




}
