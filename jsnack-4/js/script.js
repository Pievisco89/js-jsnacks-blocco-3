$(function(){

  //creo array per squadra di basket
  var arrSquadra = [];

  getGiocatore(5);
  console.log(arrSquadra);



  /* Funzioni */
  //funzione che genera numeri random da 0 a max
  function getNumRandom(max){
    return Math.floor(Math.random() * max);
  };

  //funzione per generare codice giocatore
  function getCodeRandom() {
    var code = [];
    var lettere = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (var i = 0; i < 3; i++) {
      code.push(lettere.charAt(Math.floor(Math.random() * lettere.length)));
    };
    for (var i = 0; i < 3; i++) {
      code.push(Math.floor(Math.random() * 10));
    };
    return code.join(' ');
  };

  //funzione per generare oggetti giocatori
  function getGiocatore(limit){
    for(var i = 0; i < limit; i++){
      var giocatore = {
        codice: getCodeRandom(),
        media: getNumRandom(50),
        percentuale: getNumRandom(100)
      }
      arrSquadra.push(giocatore);
    };
  };

});

