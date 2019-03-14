// Code your solution here!

function printString(myString) {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0)
}

function isPalindrome(string) {
  //   return str === reverseString(str) ? true : false

  let strLen = string.length
  string = string.toLocaleLowerCase()

  if (strLen === 0 || strLen === 1) {
    return true
  }
  if (string[0] === string[strLen - 1]) {
    return isPalindrome(string.slice(1, strLen - 1))
  }
  return false
}
