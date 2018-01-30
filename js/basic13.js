// 1 Print all integers from 1-255.

function printIntegers() {
  for(let i = 1; i < 256; i ++) {
    console.log(i);
  }
}

printIntegers();

// // 2 Print all odd integers from 1-255.

// def print_odd_integers
//   num = 1
//   while num <= 255
//     if num.odd?
//       p num
//     end
//   num += 1
//   end
// end



// // 3 Print all integers and the sum of all integers from 0-255

// def print_integers
//   sum = 0
//   num_array = []
//   num = 0
//   while num <= 255
//     p num
//     num_array << num
//     num += 1
//   end
//   num_array.each do |num|
//     sum += num
//   end
//   p sum
// end

// // 4 Print all values of an array

// def print_array(array)
//   array.each do |value|
//     p value
//   end
// end

// // 5 Print max value of a given array

// def max_value(array)
//   p array.max
// end

// // 6 Print the average of the values of a given array

// def average(array)
//   sum = 0.0
//   array.each do |num|
//     sum += num
//   end
//   avg = sum / array.length
//   p avg
// end

// // 7 Create and return an array with all odd integers from 1-255

// def odd_array
//   odd_arr = []
//   num = 1
//   while num <= 255
//     if num.odd?
//       odd_arr << num
//     end
//     num += 1
//   end
//   odd_arr
// end

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
