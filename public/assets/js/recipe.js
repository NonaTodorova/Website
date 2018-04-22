
$(function(){

;



  var url = "https://api.edamam.com/search?q=Chicken&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&from=0&to=5";
  $.getJSON(url,function(jsondata){

getResultsForRecipes(jsondata)
console.log(jsondata);

 // var value = jsondata.hits[0].recipe.totalNutrients.FAT.label;

});
});


function getResultsForRecipes(jsondata){

  for(var i = 0 ; i<jsondata.hits.length;i++){





  }



}







// <!-- <div class="card" >
//   <img class="card-img-top" src="assets/img/breakfast.jpg" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
