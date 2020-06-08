  // LIMPAR RESULTADOS
function C(){ 
  document.caixas.caixa1.value = "";
  document.caixas.caixa2.value = "";
  document.result.resultado.value = "";
}

  // DIVISÃO
function Divisao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) / parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

  // MULTIPLICAÇAO
function Multiplicacao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) * parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

// SOMA
function Soma(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) + parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}

// SUBTRAÇÃO
function Subtracao(){
  var caixa1 = document.querySelector('.caixa1').value;
  var caixa2 = document.querySelector('.caixa2').value;

  var resultado = parseInt(caixa1) - parseInt(caixa2);
  document.querySelector('.resultado').innerHTML= resultado;
}


