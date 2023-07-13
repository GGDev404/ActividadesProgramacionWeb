let letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

while (true) {
    let numeroId = prompt("Ingreda tu numero de DNI");

    if(numeroId === null){
        break;
    }
    else{
         numeroId = parseInt(numeroId)
        if (Number.isInteger(numeroId) && numeroId >= 0 && numeroId <= 9999999999) {
            let index = numeroId % 23;
            alert("la letra de tu DNI es " + letrasDNI[index])
        }
    }
}