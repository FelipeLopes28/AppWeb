// var divisao = document.querySelector('.divisao')
// var multiplicacao = document.querySelector('.multiplicacao')
// var soma = document.querySelector('.soma')
// var subtracao = document.querySelector('.subtracao')
// var resultado = document.querySelector('.resultado')

// divisao.addEventListener('click', Divisao);
// multiplicacao.addEventListener('click', Multiplicacao);
// soma.addEventListener('click', Soma);
// subtracao.addEventListener('click', Subtracao);


function C(){
  document.caixas.caixa1.value = "";
  document.caixas.caixa2.value = "";
  document.p.resultado.value = "";
}

function Divisao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) / parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

function Multiplicacao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) * parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

function Soma(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) + parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

function Subtracao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) - parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}


