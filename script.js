// Build a mapper function from scratch
/********* PSEUDOCODE ********/
//Map function takes an array(arr) and a function(func) as a parameter
  //Creates new empty array (newArr)
  //Loop through arr
    //Add new index to newArr[i] based on running func against arr[i]
  //return newArr

//Function to transform array

//arr
//(ARR) map(arr, func);


// Solution

// Mapper function
function mapper(arr, func) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]);
    }

    return newArr;
}
// Uppercase function
function makeUpperCase(str) {
   return str.toUpperCase();
}

const arr = ['abc', 'def', 'ghi'];
const ARR = mapper(arr, makeUpperCase);
console.log(ARR);

// Triple function
function triple(item) {
   return item * 3;
}

// Since our mapper is function it is reusable
const arr2 = [1, 2, 3];
const TRI = mapper(arr2, triple);
console.log(TRI);

// AFTER MEGA - Using .map to triple
function func(item) {
   return item * 3;
}

const arr3 = [1, 2, 3];
const newArr = arr3.map(func);
console.log(newArr); // -> [3, 6, 9]




