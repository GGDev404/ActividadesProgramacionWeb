    var nota = parseInt(prompt("Ingresa tu nota:"));
    
    if (nota === null) {
      alert("gracias por participar");
    } else {
        if ( Number.isInteger(nota)) {
            if(nota >= 0 && nota < 3){
                alert("Muy deficiente ");
            }
            if(nota >= 3 && nota < 5){
                alert("Insuficiente ");
            }
            if(nota >= 5 && nota < 6){
                alert("Suficiente");
            }
            if(nota >= 6 && nota < 7 ){
                alert("Bien");
            }
            if(nota >= 7 && nota < 9){
                alert("Notable");
            }
            if(nota >= 9 && nota <= 10){
                alert("Sobresaliente");
            }
            else{
                alert("Ingresa una nota valida");
            }
        }
        else{
            alert("Ingresa un numero para tu nota");
        }
    }
