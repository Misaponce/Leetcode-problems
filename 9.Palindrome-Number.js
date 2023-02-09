//Given an integer x, return true if x is a palindrome, and false otherwise.
//Follow up: Could you solve it without converting the integer to a string?

//This solution is converting the interger to a string
// var isPalindrome = function(x) {
//     let numToString = x.toString();
//    return numToString.split('').reverse().join('') === numToString;
// };


//This solution is without converting
var isPalindrome = function(x) {
    //making a copy of 'x' so we do not change it's original value
    let copy = x;
    let invertedX = 0;

    while(copy > 0) {
        //this const will store the modulus which will return the last digit of 'x'
        const digit = copy % 10;
        //by making this operation we send the stored value of digit at the begining of invertedX
        invertedX = invertedX * 10 + digit;
        //then we substract the last digit of copy since it has been added to invertedX
        copy = Math.floor(copy / 10);
    }
    //final compare
    return invertedX === x;

};

console.log(isPalindrome(121));