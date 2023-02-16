//21. Leer tres números enteros de dos dígitos cada uno y determinar en cuál de ellos se encuentra el mayor dígito.
function digitoMayor(array) {

  function lastDig(num) {
        num % 10;
    }

    for (let i = 0; i < array.length; i++){
        console.log(lastDig(array[i]));
    }
}

console.log(digitoMayor([21,21,23]));