function convert(n) {
  // Convert To String
  let str = n.toString();

  // Create Empty Array
  let emptyArray = [];

  // Loop On String
  for (let i = 0; i < str.length; i++) {
    emptyArray.unshift(+str[i]);
  }

 
  return emptyArray;
}

console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
