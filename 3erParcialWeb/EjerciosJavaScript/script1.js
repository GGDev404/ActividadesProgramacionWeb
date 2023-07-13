


while (true) {
    var edad = prompt("Ingresa tu edad:");
  
    if (edad === null) {
      alert("gracias por participar");
      break; 
    } else {
        if(edad >= 18){
            alert("Si puedes entrar");
            break; 
        }
        else{
            alert("No puedes entrar");
        }
    }
  }