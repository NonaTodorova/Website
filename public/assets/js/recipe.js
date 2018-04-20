
$(function(){

  //var url = "https://api.edamam.com/search?q=Tropicana&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&totalNutrients";

  var url2 = "https://api.edamam.com/api/food-database/parser?UPC=7622210432391&app_id=9afe1548&app_key=39eb2d15eef33f342a935717411d7bec";

  $.getJSON(url2,function(jsondata){
//   var myjson = JSON.stringify(jsondata);
    console.log(jsondata);

});
});
