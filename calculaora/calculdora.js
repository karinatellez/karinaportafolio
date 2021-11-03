var operacion = ""; // string
var estaDigitandoPrimerNumero = true; //booleano
var primerNumero = "";
function mostrarNumero(numero) {
  if (estaDigitandoPrimerNumero == true) {
    primerNumero += numero;
    document.getElementById("pantalla").innerHTML = primerNumero;
  } else {
    segundoNumero += numero;
    document.getElementById("pantalla").innerHTML = segundoNumero;
  }
}
var segundoNumero = "";

function mostrarResultado() {
  var resultado = 0; // numero
  if (operacion == "sumar") {
    resultado = parseInt(primerNumero) + parseInt(segundoNumero);
  }
  if (operacion == "dividir") {
    resultado = parseInt(primerNumero) / parseInt(segundoNumero);
  }
  if (operacion == "resta") {
    resultado = parseInt(primerNumero) - parseInt(segundoNumero);
  }
  if (operacion == "multiplicacion") {
    resultado = parseInt(primerNumero) * parseInt(segundoNumero);
  }
  document.getElementById("pantalla").innerHTML = resultado;
  operacion = "";
  primerNumero = "";
  segundoNumero = "";
  estaDigitandoPrimerNumero = true;
}

function sumar() {
    estaDigitandoPrimerNumero = false;
    document.getElementById("pantalla").innerHTML = "";
    operacion = "sumar";
  }
  
function dividir() {
  estaDigitandoPrimerNumero = false;
  document.getElementById("pantalla").innerHTML = "";
  operacion = "dividir";
}

function restar() {
  estaDigitandoPrimerNumero = false;
  document.getElementById("pantalla").innerHTML = "";
  operacion = "resta";
}

function multiplicacion() {
  estaDigitandoPrimerNumero = false;
  document.getElementById("pantalla").innerHTML = "";
  operacion = "multiplicacion";
}

function borrar() {
    document.getElementById("pantalla").innerHTML = "";
  estaDigitandoPrimerNumero = true;
  primerNumero = "";
  operacion = "";
  segundoNumero = "";

  console.log("estaborrando");
}
