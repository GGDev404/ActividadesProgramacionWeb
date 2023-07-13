let div = document.getElementById("Section");

let texto = []
while (true) {
    let cadena = prompt("Introduce una cadena de texto");
    if (cadena === null) { 
        alert(texto);
       break;
    }
    else{
        texto.push(cadena + "-");
    }
}





