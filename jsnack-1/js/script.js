$(function(){
//array di 10 oggetti di zucchine
  var arrZucchine = [
    {
      varietà: 'bianca',
      peso: 3,
      lunghezza: 15
    },
    {
      varietà: 'blu',
      peso: 5,
      lunghezza: 10
    },
    {
      varietà: 'azzurra',
      peso: 8,
      lunghezza: 20
    },
    {
      varietà: 'verde',
      peso: 10,
      lunghezza: 25
    },
    {
      varietà: 'nera',
      peso: 4,
      lunghezza: 13
    },
    {
      varietà: 'beige',
      peso: 9,
      lunghezza: 17
    },
    {
      varietà: 'viola',
      peso: 3,
      lunghezza: 15
    },
    {
      varietà: 'arancione',
      peso: 3,
      lunghezza: 15
    },
    {
      varietà: 'rossa',
      peso: 3,
      lunghezza: 15
    },
    {
      varietà: 'argento',
      peso: 7,
      lunghezza: 14
    },
  ];

  var peso = 0;

  for(var zucchina of arrZucchine){
    peso += zucchina['peso'];
  };

  console.log(peso);

});