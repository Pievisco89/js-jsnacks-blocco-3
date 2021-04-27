$(function(){

  //creo due array con numero di elementi diversi
  var arrPrimo = [ 1, 2, 55 ];
  var arrSecondo = [ 8, 9, 10, 46, 88, 78];
  
  console.log(arrPrimo);
  console.log(arrSecondo);
  console.log('------------------------');

  //ciclo while che dura finchè le length dei due array sono diverse
  while(arrSecondo.length != arrPrimo.length){

    if(arrSecondo.length < arrPrimo.length){ //condizione: primo array più lungo del secondo
      arrSecondo.push(Math.floor(Math.random()*100));
    }else{ //condizione: secondo array più lungo del primo
      arrPrimo.push(Math.floor(Math.random()*100));
    }
    
  };

  console.log(arrPrimo);
  console.log(arrSecondo);


})