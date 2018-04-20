
$(function(){

  var url = "https://api.edamam.com/search?q=apple&app_id=107bd766&app_key=3bd0d97e2ed7c692c9cd9fef319ee6a4&totalNutrients";

  $.getJSON(url,function(jsondata){
//   var myjson = JSON.stringify(jsondata);
    console.log(jsondata);

});
});
