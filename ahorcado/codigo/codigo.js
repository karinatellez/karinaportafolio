var palabraSecreta ="otorrinolaringologo";
var palabraSecretaGuiones = palabraSecreta.replaceAll("o","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("t","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("r","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("i","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("n","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("l","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("a","_");
palabraSecretaGuiones = palabraSecretaGuiones.replaceAll("g","_");
document.getElementById("palabraconguiones").innerHTML =palabraSecretaGuiones;
var intentos=0;
function adivinarLetra(){
    var letra = document.getElementById("inputPassword").value;
    if (palabraSecreta.indexOf(letra)>=0){
        console.log("letra encontrada");
        
    }
    else{intentos=intentos+1;
        if (intentos <=9){
            document.getElementById("imagenAhorcado").src="../images/"+intentos+".png";
        }

    }
}
function reiniciar(){
    document.getElementById("imagenAhorcado").src="../images/inicial.png";
    intentos=0;
    
}


