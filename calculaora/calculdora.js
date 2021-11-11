var operacion = ""; // string
var estaDigitandoPrimerNumero = true; //booleano
var primerNumero = "";
var segundoNumero = "";
var resultado = 0; // numero
function mostrarNumero(numero) {
  primerNumero += numero;
  document.getElementById("pantalla").innerHTML = primerNumero;
}

function mostrarResultado() {
  if (primerNumero == "") {
    primerNumero = 0;
  }
  if (operacion == "sumar") {
    resultado += parseFloat(primerNumero);
  }
  if (operacion == "dividir") {
    if (resultado != 0) {
      resultado = resultado / parseFloat(primerNumero);
    } else {
      resultado = parseFloat(primerNumero);
    }
  }

  if (operacion == "resta") {
    resultado -= parseFloat(primerNumero);
  }
  if (operacion == "multiplicacion") {
    if (resultado != 0) {
      resultado = resultado * parseFloat(primerNumero);
    } else {
      resultado = parseFloat(primerNumero);
    }
  }
  document.getElementById("pantalla").innerHTML = resultado;
  /* operacion = ""; */
}

function sumar() {
  /*     estaDigitandoPrimerNumero = false; */
  document.getElementById("pantalla").innerHTML = "";
  operacion = "sumar";
  mostrarResultado();
  primerNumero = "";
}

function dividir() {
  /*   estaDigitandoPrimerNumero = false; */
  document.getElementById("pantalla").innerHTML = "";
  operacion = "dividir";
  mostrarResultado();
  primerNumero = "";
}

function restar() {
  /*   estaDigitandoPrimerNumero = false; */
  document.getElementById("pantalla").innerHTML = "";
  operacion = "resta";
  mostrarResultado();
  primerNumero = "";
}

function multiplicacion() {
  /*   estaDigitandoPrimerNumero = false; */
  document.getElementById("pantalla").innerHTML = "";
  operacion = "multiplicacion";
  mostrarResultado();
  primerNumero = "";
}

function borrar() {
  document.getElementById("pantalla").innerHTML = "";
  /*   estaDigitandoPrimerNumero = true; */
  primerNumero = "";
  operacion = "";
  segundoNumero = "";
  console.log("estaborrando");
}
