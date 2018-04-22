
$(function(){





  var url = "https://api.edamam.com/search?q=Chicken&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
  $.getJSON(url,function(jsondata){

getResultsForRecipes(jsondata);
  var string = JSON.stringify(jsondata,null,4)
//console.log(string);

 // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

});
});


function getResultsForRecipes(jsondata){

  for(var i = 0 ; i<jsondata.hits.length;i++){

    var image = jsondata.hits[i].recipe.image;
     var label = jsondata.hits[i].recipe.label;
     var servings = jsondata.hits[i].recipe.yield;
     var adv = jsondata.hits[i].recipe.dietLabels[0];
     var ingr = jsondata.hits[i].recipe.ingredientLines;
     // var ingr_String = "";
     // for(var i=0;i<ingr.length;i++){
     //   ingr_String += ingr[i];
     // }
     var calories = jsondata.hits[i].recipe.yield.calories;
     // Nutrient info
     var fatLabel = jsondata.hits[i].recipe.totalNutrients.FAT.label;
     var fat_quant = jsondata.hits[i].recipe.totalNutrients.FAT.quantity;

     var carbLabel = jsondata.hits[i].recipe.totalNutrients.CHOCDF.label;

      var carb_quant = jsondata.hits[i].recipe.totalNutrients.CHOCDF.quantity;

      var prot = jsondata.hits[i].recipe.totalNutrients.PROCNT.label;

      var prot_quant = jsondata.hits[i].recipe.totalNutrients.PROCNT.quantity;


      console.log(ingr);






  }

}







// <!-- <div class="card" >
//   <img class="card-img-top" src="assets/img/breakfast.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
