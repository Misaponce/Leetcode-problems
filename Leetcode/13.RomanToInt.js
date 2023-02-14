//Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    let keys = {
        M: 1000,
        CD: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
let num = 0;
    //run thru 's'
    for (let i = 0; i < s.length; i++){
        // declare "current" to be equal to the value of the "keys" object based on each iteration
        let current = keys[s[i]];
        // the same with next but this time will increase one to be able to compare
        let next = keys[s[i + 1]];
        // condition if the current value is less than the next value we substract from num otherwise with add it.
        (current < next) ? (num -= current) : (num += current);
    }
    return num;
};

console.log(romanToInt("XIV"));