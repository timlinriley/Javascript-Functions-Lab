
// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

  const maxOfThreeNumbers= (x,y,z) => {
  if (x >=y && x>=z){
console.log(x);
  } else if  (y >= x && y >=z ){
    console.log(y);}
 else {
  console.log(z);
}
}
maxOfThreeNumbers(1,3,2)

// 3.Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character)  {
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
    console.log('true')}
  
  else {
    console.log('false')}
} 
  isCharAVowel("a");

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

let array = [1,2,3,4,5];
const sumArray = (numArray) => {
  let origin = 0;
    for(i=0; i < numArray.length; i++)  {
  
      origin += numArray[i];
    }


return origin;    }
console.log(sumArray(array))


// 5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

let array1 = [1,2,3,4,5];
const multiplyArray = (numArray) => {
  let origin = 1;
    for(i=0; i < numArray.length; i++)  {
  
      origin *= numArray[i];
    }
return origin; }
console.log(multiplyArray(array1))

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
let array2 = ["Long", "Longest", "Array",]
const longestStringInArray = (array) => {
  if  (array2[0].length > array2[1].length && array2[0].length > array[2].length){
    console.log(array2[0])
  } 
  else if 
  (array2[1].length > array2[0].length && array2[1].length > array[2].length){
    console.log(array[1])
  }
    else {
      console.log(array[2])
    }
}
      longestStringInArray(array2);

    