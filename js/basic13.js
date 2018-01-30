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

testArray = [0, 2, 1, 3, 5, 4];
printArrayValues(testArray);
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

testArray = [0, 2, 1, 3, 5, 4];
maxValue(testArray);
// 6 Print the average of the values of a given array

function average(array) {
  let sum = 0
  for(i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  console.log(sum/array.length);
}

testArray = [0, 2, 1, 3, 5, 4]
average(testArray);

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

// // 8 Square each value of a given array then return that array with the new values

// def square_array(array)
//   squared_array = []
//   array.each do |num|
//     square = num * num
//     squared_array << square
//   end
//   squared_array
// end

// // 9 Return all values of a given array that are greater than a given value

// def greater(array, value)
//   greater_array = []
//   array.each do |num|
//     if num > value
//       greater_array << num
//     end
//   end
//   greater_array
// end

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
