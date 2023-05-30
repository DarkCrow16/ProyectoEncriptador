function encriptar(){
    var texto = document.getElementById("texto").value;
    var programador = document.getElementById("programador");

    var textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (document.getElementById("texto").value.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        programador.src = "./img/Cifrado.png";
        document.getElementById("texto2").innerHTML = textoCifrado;
        document.getElementById("texto").value = "";
        
    }
    
    else {
        programador.src ="./img/Programador.jpg";
        alert ("Debes ingresar algun texto");        
    }
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    var programador = document.getElementById("programador");
    
    var textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length !=0) {
            document.getElementById("texto").value = textoCifrado;
            programador.src = "./img/TxtDesencriptado.png";
            document.getElementById("texto2").innerHTML = textoCifrado;
            document.getElementById("texto").value = "";
            
            
    }
        
    else {
        programador.src ="./img/Programador.jpg";
        alert ("Debes ingresar algun texto");        
        }
}

function copy() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!");
}
