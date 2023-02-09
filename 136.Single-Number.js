// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    //on this object will store the array nums values and the amount of times it repeats.
    let keys = {}; //2: 2, 5: 1

    for (let num of nums){
        //run thru nums array to check how many time each key[value] appear and incrementing in 1 and in the case
        //the key[value] does not appear, will add 1, all this to the object keys.
        keys[num] = keys[num] + 1 || 1;
    }

    for (let key in keys) {
        // console.log(keys[key]);
        //if the keys[key] this means the value of the property key equals 1 then return that property which will show
        // the actual number that appears just once in the array
        if (keys[key] === 1){
            return key;
        }
    }
};

console.log(singleNumber([2,2,5]));