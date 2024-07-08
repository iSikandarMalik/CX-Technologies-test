/**
 * Q#1: Write a function that will take an array as input, sort, and return the array in descending order.
 * For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].
 */

const descSortArr = (arr) => arr.sort((a,b) => b - a)

console.log('descSortArr', descSortArr([3,2,7,4,6,9]))


/**
 * Q#2: Write a function that will take a string as input, check and return if it is palindrome or not.
 * For example, if the string is “madam” the function should return true and if the string is “doctor” it should return false.
 */

const palindromeStr = (str) => {
  let temp = []
  for (let i = str.length-1; i > -1; i--) temp.push(str[i])
  return temp.join('') === str
}

console.log('palindromeStr', palindromeStr('madam'))

/**Q#3: Write a function that will take an array as input and return the sum of the two largest numbers in a n array.
 * For example, in the array [3,7,1,5,11,19] the result would be 30 because 11 and 19 are the largest numbers.
 */

const largestSum = (arr) => {
  let largest, secondLargest
  for (let i = 0; i < arr.length; i++) {
    if (!largest) {
      largest = arr[i]
      secondLargest = arr[i+1]
      continue
    }
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
      continue
    }
    if (arr[i] > secondLargest < largest) {
      secondLargest = arr[i]
    }
  }
  return largest + secondLargest
}

console.log('largestSum', largestSum([20,11,2,5,6,90,80,70,100]))

/**
 * Q#4: Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry.
 * For example, in an array [3,4,9,1,7,3,2,6] the highest entry is 9, and missing numbers are [0,5,8]
 */

const findMissing = (arr) => {
  let allNums = [0,1,2,3,4,5,6,7,8,9]
  for (let i = 0; i < arr.length; i++) if (allNums.includes(arr[i])) allNums.splice(allNums.indexOf(arr[i]), 1)
  return allNums
}

console.log('findMissing', findMissing([3,4,9,1,7,3,2,6]))


/**
 * Q#5: Write a function that will take an array of numbers and return the number most repeated in the array with how many times it was repeated.
 * For example, if the array is [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times
 */

const mostFrequentNum = (arr) => {
  let obj = {}, value, count
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }
  }

  for (let key in obj) {
    if (!value && !count) {
      value = key
      count = obj[key]
    }
    if (count < obj[key]) {
      value = key
      count = obj[key]
    }
  }
  return `${value} is repeated ${count} times`
}

console.log('mostFrequentNum', mostFrequentNum([4,3,3,3,5,6,4,7,9,2,4,6,3,4,6,3,4,3,3,3,3,3,8,5,1,5]))


/**
 * Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time and return the rotated array.
 * Rotation of the array means that each element is shifted right by one index.
 * For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
 */

const rotateArr = (arr) => {
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      temp.unshift(arr[i])
    } else {
      temp.push(arr[i])
    }
  }
  return temp
}

console.log('rotateArr', rotateArr([3,8,9,7,6]))
