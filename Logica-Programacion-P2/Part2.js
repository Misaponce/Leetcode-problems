//21. Leer tres números enteros de dos dígitos cada uno y determinar en cuál de ellos se encuentra el mayor dígito.
// function digitoMayor(array) {
//     let largestDigit = 0;
//     let numWithLargestDigit;
//     for (let i = 0; i < array.length; i++){
//         let currentNum = array[i];
//         let stringNum = currentNum.toString();

//         for (let j = 0; j < stringNum.length; j++){
//             let currentDigit = parseInt(stringNum[j]);
//             if (currentDigit > largestDigit) {
//                 largestDigit = currentDigit;
//                 numWithLargestDigit = currentNum;
//             }
//         }
//     }
//     return numWithLargestDigit;
// }

//22. Leer un número entero de tres dígitos y determinar si el primer dígito es igual al último.
// function comparaDigitos(num) {
//     return (~~(num / 100)) === (num % 10);
// }

//23. Leer un número entero de tres dígitos y determinar cuántos dígitos primos tiene.
// function cuantosDigitosPrimos(num) {
//     let numToString = num.toString();
//     let primoContador = 0;

//     for (let i = 0; i < numToString.length; i++) {
//         let backToNum = parseInt(numToString[i]);
//         // console.log(backToNum);
//         //Aplicando recursividad con una funcion para determinar que digitos son primos

//         function isPrime(d) {
//             if (d < 2) {
//                 return false
//             }

//             for (let j = 2; j <= Math.sqrt(d); j++){
//                 if (d % j === 0) {
//                     return false
//                 }
//             }
//             return true
//         }
//         isPrime(backToNum) === true ? primoContador++ : primoContador--;
//         console.log(primoContador);
//     }
//     return primoContador <= 0 ? `El entero ${num} no contiene digitos primos` : `El entero ${num} tiene ${primoContador} digitos primos`
// }

//24. Leer un número entero de tres dígitos y determinar cuántos dígitos pares tiene.
// function cuantosDigitosPares(num) {
//     let stringNum = num.toString();
//     let parContador = 0;

//     for (let i = 0; i < stringNum.length; i++){
//         let backToNum = parseInt(stringNum[i]);
//         if (backToNum % 2 === 0) {
//             parContador++;
//         } else {
//             parContador--;
//         }
//     }

//     return parContador <= 0 ? `El entero ${num} no tiene digitos pares` : `El entero ${num} tiene ${parContador} digitos pares`;
// }


console.log(cuantosDigitosPares(123));