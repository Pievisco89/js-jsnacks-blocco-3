$(function(){

  var arrLettere = [ "a", "b", "c"]
  var arrNumeri = [ 1, 2, 3]
  var arrNuovo = [];

  totale(arrLettere, arrNumeri, arrNuovo);

  console.log(arrNuovo);



  //funzione per mischiare array
  function totale(arr1, arr2, arrTot){

    for(var i = 0; i < arr1.length; i++){
      arrTot.push(arr1[i]);
      arrTot.push(arr2[i]);
    }
  
  };
  
});

