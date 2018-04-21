
$(function(){

  var url = "https://api.edamam.com/search?q=Chicken&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";

  var url2 = "";





  $.getJSON(url,function(jsondata){

 // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

 var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

    console.log(value);

});
});
