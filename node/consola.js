var numero=6;
console.log(numero);
var numeroDos=13;
console.log(numeroDos);
document.getElementById("dos").innerHTML=numero;
function imprimirEnConsola(){
    console.log("el edwin esta jugando");
    document.getElementById("uno").innerHTML=numeroDos;
}
function imprimirEnUno(){
    document.getElementById("uno").innerHTML="edwin esta jugando";
}