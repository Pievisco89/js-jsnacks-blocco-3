$(function(){
  

  //creare un array con elementi a caso
  var array = ["pietro", "giovanni", "francesco", "maria", "michele", "marco", "carlo", "giacomo", "paolo", "aldo", "lorenzo", "filippo", "stefano", "giuseppe"]

  var a = 3;
  var b = 11;

  var nuovoArray = getArray(array, a, b);

  console.log(nuovoArray)

  /* funzione con parametri array, numero a e numero b. numero a < numero b e numero b <= array.length
  mi ritorna il nuovo array con elementi compresi tra a e b */
  function getArray(arr, a, b){

    if(a < b && b <= arr.length){
      var newArray = [];

      for(var i = a; i < b; i++){
        newArray.push(arr[i])  
      }
    }
    return newArray;

  };

});