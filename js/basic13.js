// 1 Print all integers from 1-255.

function printIntegers() {
  for(let i = 1; i < 256; i ++) {
    console.log(i);
  }
}

printIntegers();

// 2 Print all odd integers from 1-255.

function printOddIntegers() {
  for(i = 1; i < 256; i++) {
    if(i % 2 != 0) {
      console.log(i);
    }
  }
}

printOddIntegers();

// 3 Print all integers and the sum of all integers from 0-255

function printIntegersAndSum() {
  let sum = 0;
  for(i = 0; i < 256; i++) {
    sum = sum + i;
    console.log(i);
  }
  console.log(sum);
}

printIntegersAndSum();

// 4 Print all values of an array

function printArrayValues(array) {
  for(i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
} 

testArray1 = [0, 2, 1, 3, 5, 4];
printArrayValues(testArray1);
// 5 Print max value of a given array

function maxValue(array) {
  let max = array[0];
  for(i = 0; i < array.length; i++) {
    if(max < array[i]) {
      max = array[i];
    }
  }
  console.log(max);
}

testArray2 = [0, 2, 1, 3, 5, 4];
maxValue(testArray2);
// 6 Print the average of the values of a given array

function average(array) {
  let sum = 0
  for(i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  console.log(sum/array.length);
}

testArray3 = [0, 2, 1, 3, 5, 4]
average(testArray3);

// 7 Create and return an array with all odd integers from 1-255

function makeOddArray() {
  let oddArray = [];
  for(i = 1; i < 256; i++) {
    if(i % 2 != 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
}

makeOddArray();

// 8 Square each value of a given array then return that array with the new values

//creating new array and pushing squared values
function squareArray(array) {
  let squaredArray = []
  for(i = 0; i < array.length; i++) {
    squaredArray.push(array[i] * array[i])
  }
  return squaredArray;
}

//changing values of current array by squaring them
function squareTheArray(array) {
  for(i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i]
  }
  return array;
} 

testArray4 = [0, 2, 1, 3, 5, 4]
squareArray(testArray4);
squareTheArray(testArray4);

// 9 Return all values of a given array that are greater than a given value

// def greater(array, value)
//   greater_array = []
//   array.each do |num|
//     if num > value
//       greater_array << num
//     end
//   end
//   greater_array
// end

function greater(array, value) {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > value) {
      count++;
    }
  }
  console.log(count);
}

testArray5 = [0, 22, 1, 3, 55, 4];
value = 10;
greater(testArray5, value);

// // 10 Return the given array after setting any negative values to zero

// def negative_to_zero(array)
//   array.map! do |num|
//     if num < 0
//       num = 0
//     else
//       num = num
//     end
//   end
//   array
// end

// // 11 Print the min, max, and average values of a given array

// def array_values(array)
//   min = array[0]
//   max = min
//   sum = 0.0
//   i = 0
//   while i < array.length
//     if array[i] < min
//       min = array[i]
//     end
//     if array[i] > max
//       max = array[i]
//     end
//     sum = sum + array[i]
//     i += 1
//   end
//   average = sum/array.length
//   p min
//   p max
//   p average
// end

// // 12 Shift all values of a given array to the left, dropping the first value and leaving a 0 at the end of the array then return that array

// def shift(array)
//   i = 0
//   while i < array.length - 1
//     array[i] = array[i + 1]
//     i += 1
//   end
//   array[array.length - 1] = 0
//   array
// end

// // 13 Replace any negative values of a given array with the string "Dojo" then return that array

// def replace_negatives(array)
//   array.map! do |value|
//     if value < 0
//       value = "Boot"
//     else
//       value = value
//     end
//   end
//   p array
// end
