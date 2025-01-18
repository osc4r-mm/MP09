function ex1(id) {
    let num1, num2

    function putInt() {
        let num;
        do {
            num = prompt("Escriu un nombre positiu");
            if (isNaN(num) || num < 0) {
                alert("El numero introduit es negatiu o no es un numero")
            }
        } while (isNaN(num) || num < 0);
        return num;
    }

    num1=putInt();
    num2=putInt();
    if (num1 != null && num2 != null) {
        if (num1 > num2) {
            alert(num1 + " Es mes gran que " + num2)
        } else if (num1 < num2) {
            alert(num2 + " Es mes gran que " + num1)
        } else {
            alert(num1 + " Es igual que " + num2)
        }
    } else {
        alert("Operacio cancelada")
    }
}