$(function(){

  var arrLunghe = [];
  var arrCorte = [];
  var pesoLunghe = 0;
  var pesoCorte = 0;

  var arrZucchine = [
    {
      nome: 'bianca',
      peso: 10,
      lunghezza: 16
    },
    {
      nome: 'blu',
      peso: 11,
      lunghezza: 17
    },
    {
      nome: 'azzurra',
      peso: 12,
      lunghezza: 18
    },
    {
      nome: 'verde',
      peso: 13,
      lunghezza: 19
    },
    {
      nome: 'nera',
      peso: 9,
      lunghezza: 9
    },
    {
      nome: 'beige',
      peso: 8,
      lunghezza: 8
    },
    {
      nome: 'viola',
      peso: 7,
      lunghezza: 7
    },
    {
      nome: 'arancione',
      peso: 6,
      lunghezza: 6
    },
    {
      nome: 'rossa',
      peso: 4,
      lunghezza: 5
    },
    {
      nome: 'argento',
      peso: 3,
      lunghezza: 4
    }
  ];
  console.log(arrZucchine);
  console.log('----------------');

  for(var zucchina of arrZucchine){
    if(zucchina['lunghezza'] < 15){
      arrCorte.push(zucchina);
      pesoCorte += zucchina['peso']
      console.log(arrCorte);
    }else{
      arrLunghe.push(zucchina);
      pesoLunghe += zucchina['peso'];
      console.log(arrLunghe);
    }
  };
  
  console.log('-------pesoLunghe------');
  console.log(pesoLunghe);
  console.log('-------pesoCorte------');
  console.log(pesoCorte);
  


});