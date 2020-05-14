var str = 'this is a string.';

//length method - returns size of the string.container
var strLen = str.length;

//go to character at specified string index
var strIdx = str[8];

//indexOf method - get position of character in string
var strIdxOf = str.indexOf('r');

//slice method - get a substring or a specified portion of a string.center
var strSlice = str.slice(5,7);


//toUpperCase() and to LowerCasse() - change the case
var strUpper = str.toUpperCase();
var strLower = str.toLowerCase();

//replace() method - replace character of a string
var strRpl = str.replace('a', 'our');


console.log(strIdx);
console.log(strLen);
console.log(strIdxOf);
console.log(strSlice);
console.log(strUpper +' '+strLower);
console.log(strRpl);

//Arrays
var fruits = ['apples','oranges','grapes','lemons','bananas'];
console.log(fruits[2]);
/*var fruits = [];
fruits[0] = 'apples';
fruits[1] = 'oranges';
fruits[2] = 'grapes';  etc. */
//array methods
//length method - gets the number of elements in an array
console.log(fruits.length);
//push() - adds new element to end of array
fruits.push('cantelop');
console.log(fruits);
fruits.pop('cantelop');
console.log(fruits);

//sort() method - sorts the elements in the array
//console.log(fruits.sort());

//toString() method - converts to a string and returns result
//console.log(fruits);
console.log(fruits.toString());






