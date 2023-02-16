//21. Leer tres números enteros de dos dígitos cada uno y determinar en cuál de ellos se encuentra el mayor dígito.
function digitoMayor(array) {
    let largestDigit = 0;
    let numWithLargestDigit;
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i];
        let stringNum = currentNum.toString();

        for (let j = 0; j < stringNum.length; j++){
            let currentDigit = parseInt(stringNum[j]);
            if (currentDigit > largestDigit) {
                largestDigit = currentDigit;
                numWithLargestDigit = currentNum;
            }
        }
    }
    return numWithLargestDigit;
}

console.log(digitoMayor([82,0,21]));