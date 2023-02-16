// 1. Leer un número entero y determinar si es un número terminado en 4. Si cumplete retornar true de lo contrario false.
// function terminaen4(num) {
//     return num % 10 === 4;
// }

//2. Leer un número entero y determinar si tiene 3 dígitos.
// function tiene3Digi(num) {
//     let contador = 0;

//     while(num > 0){
//         num = Math.floor(num / 10);
//         contador++;
//     }
//     return contador === 3;
// }

//3. Leer un número entero y determinar si es negativo.
// function isNegative(num){
//     return num < 0;
// }

//4. Leer un número entero de dos dígitos y determinar a cuánto es igual la suma de sus dígitos.

// function suma2Digitos(num) {
//     while(num >= 10 && num <= 99){
//         return (Math.floor(num / 10)) + (num % 10);
//     }
//     return 'El numero ingresado es menor a 10 o mayor a 99';
// }

//5. Leer un número entero de dos dígitos y determinar si ambos dígitos son pares.

// function par2Digitos(num) {
//     while(num >= 10 && num <= 99){
//         return (Math.floor(num / 10)) % 2 === 0 && (num % 10) % 2 === 0;
//     }
//     return 'El numero ingresado es menor a 10 o mayor a 99';
// }

//6. Leer un número entero de dos dígitos menor que 20 y determinar si es primo.

// function isPrime(num) {
//  if (num > 9 && num <= 20){
//     let root = Math.ceil(Math.sqrt(num));
//     for (let i = 2; i <= root; i++){
//         console.log(num % i);
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
//  }
//  return `${num} no es un entero de dos digitos menor que 20`;
// }

//7. Leer un número entero de dos dígitos y determinar si es primo y además si es negativo.
// function isPrimeandNegative(num) {
//     if (num < 0) {
//         return 'el numero ingresado es negativo, por lo tanto no puede ser primo'
//     } else {
//         if (num > 9 && num <= 99){
//             let root = Math.ceil(Math.sqrt(num));
//             for (let i = 2; i <= root; i++){
//                 console.log(num % i);
//                 if (num % i == 0) {
//                     return false;
//                 }
//             }
//             return true;
//          }
//          return `${num} no es un entero de dos digitos`;
//     }
// }

//8. Leer un número entero de dos dígitos y determinar si sus dos dígitos son primos.
// function twoDigitsPrime(num) {
//     if (num <= 9 && num >= 100) {
//         return `${num} no es un entero de dos digitos`;
//     } else {
//         let d1 = Math.floor(num / 10);
//         let d2 = num % 10;
//         let esPrimo = true;

//         function evaluarPrime(d) {
//             if (d === 1) {
//                 return `${d} no es primo ni compuesto`;
//             } else if (d > 1){
//                 for (let i = 2; i < d; i++){
//                     if(d % i == 0) {
//                         esPrimo = false;
//                         break;
//                     }
//                 }
//                 return esPrimo;
//             }
//         }

//         console.log(evaluarPrime(d1));
//         console.log(evaluarPrime(d2));
        
//         return evaluarPrime(d1) == true && evaluarPrime(d2) == true ? `Ambos digito son primos` : `Uno o ambos digitos no son primos`;
//     }
// }

//9. Leer un número entero de dos dígitos y determinar si un dígito es múltiplo del otro.
// function sonMultiplos(num) {
//     let n1 = Math.floor(num / 10);
//     let n2 = num % 10;

//     if (num > 9 && num <= 100) {
//         if (n1 % n2 == 0) {
//             return `${n1} es multiplo de ${n2}`;
//         } else if (n2 % n1 == 0) {
//             return `${n2} es multiplo de ${n1}`;            
//         } else {
//             return `ninguno de los digitos son multiplos entre si`;
//         }
//     } 
//     return `El numero ingresado no es un entero de dos digitos`;
// }

//10. Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.
// function sonIguales(num) {
//     while(num > 9 && num < 100) {
//         let digi1 = Math.floor(num / 10);
//         let digi2 = num % 10;

//         return digi1 === digi2;
//     }
//     return `${num} No es un entero de dos digitos`;
// }

//11. Leer dos números enteros y determinar cuál es el mayor.
// function mayorQue(num1, num2){
//     return num1 > num2 ? num1 : num2;
// }

//12. Leer dos números enteros de dos dígitos y determinar si tienen dígitos comunes.
// function digitosComunes(num1, num2){
//     let x1 = Math.floor(num1 / 10);
//     let x2 = num1 % 10;

//     let y1 = Math.floor(num2 / 10);
//     let y2 = num2 % 10;

//     if (num1 === num2) {
//         return `Ambos numeros son iguales`;
//     } else if (x1 === y1 || x1 === y2) {
//         return `${x1} es el digito comun entre ambos numeros`;
//     } else if (x2 === y1 || x2 === y2) {
//         return `${x2} es el digito comun entre ambos numeros`;
//     } else {
//         return `los numeros no compartes digitos en comun`;
//     }
    
// }

//13. Leer dos números enteros de dos dígitos y determinar si la suma de los dos números origina un número par.
// function sumaDaPar(num1, num2) {
//     return (num1 + num2) % 2 == 0; 
// }

//14. Leer dos números enteros de dos dígitos y determinar a cuánto es igual la suma de todos los dígitos.
// function sumaTodosDigitos(num1, num2) {

//     while(num1 > 9 && num1 < 100 && num2 > 9 && num2 < 100){
                
//         let x1 = Math.floor(num1 / 10);
//         let x2 = num1 % 10;

//         let y1 = Math.floor(num2 / 10);
//         let y2 = num2 % 10;

//             return x1 + x2 + y1 + y2;
//     }
//     return `Uno o ambos numeros no son enteros de dos digitos`;
// }

//15. Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.
// function suma3Digitos(num) {
//     let digito = 0;

//     if (num > 99 && num < 1000){
//         while(num > 0) {
//             digito += num - ((Math.floor(num / 10)) * 10);
//             num = Math.floor(num / 10);
//         }
//         return digito;
//     }

//     return `${num} No es un entero de tres digitos`;
// }

//16. Leer un número entero de tres dígitos y determinar si al menos dos de sus tres dígitos son iguales.
// function dosDigitosPares(num) {
//     let copia = num;
//     let digito1 = 0;
//     let digito2 = 0; 
//     let digito3 = 0;

//     while (copia > 0) {
//         digito3 = copia % 10;
//         copia = Math.floor(copia / 10);
//         digito2 = copia % 10;
//         copia = Math.floor(copia / 10);
//         digito1 = copia % 10;
//         copia = Math.floor(copia / 10);
//     }
    
//     if (digito1 !== digito2 && digito1 !== digito3) {
//         if (digito2 !== digito3) {
//             return `El entero ${num} no tiene digitos en comun`;
//         }
//         return `El entero ${num} tiene dos o mas digitos en comun`;
//     } else {
//         return `El entero ${num} tiene dos o mas digitos en comun`;
//     }
// }

//17. Leer un número entero de tres dígitos y determinar en qué posición está el mayor dígito.
// function posicionDigMayor(num) {
//     if (num >= 100 && num <= 999) {
//         let arrayNum = Array.from(num.toString()).map(Number).sort((a, b) => a - b);

//         return `El digito mayor del entero ${num} es: ${arrayNum.slice(-1)}`;
//     } else {
//         return `${num} no es un entero de 3 digitos`;
//     }
// }

//18. Leer un número entero de tres dígitos y determinar si algún dígito es múltiplo de los otros.

// function anyMultiplo(num) {
//     let copy = num;
//     let numArray = Array.from(copy.toString()).map(Number);

//     let digito1 = parseInt(numArray.slice(0,1).join(''));
//     let digito2 = parseInt(numArray.slice(1,2).join(''));
//     let digito3 = parseInt(numArray.slice(-1).join(''));
    
//     if (digito1 % digito2 !== 0 && digito2 % digito1 !== 0){
//         if (digito2 % digito3 !== 0 && digito3 !== digito2) {
//             if (digito1 % digito3 !== 0 && digito3 % digito1 !== 0) {
//                 return `Ningun digito del entero ${num} es multiplo de los otros`;
//             } return `Alemenos un digito del entero ${num} es multipo de los otros`;
//         } return `Alemenos un digito del entero ${num} es multipo de los otros`;
//     } return `Alemenos un digito del entero ${num} es multipo de los otros`;

// }

//19. Leer tres números enteros y determinar cuál es el mayor. Usar solamente dos variables.
// function numMayor(n1, n2, n3) {
//     return n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 > n3 ? n2 : n3;
// }

//20. Leer tres números enteros y mostrarlos ascendentemente. Sin usar sort (utilizando bubble sort)
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = 0; j < arr.length - 1 - i; j++){
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// console.log(bubbleSort([21,6,9,1,4,7]));

