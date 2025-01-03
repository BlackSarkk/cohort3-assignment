/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const { Query } = require("mongoose");


// sort string 1,
// sort string 2,
// if str1 = str2 => true
// else => false

function isAnagram(str1, str2) {
  
  const lowerCaseString1 = str1.toLowerCase();
  const arr1 = lowerCaseString1.split("")     //har => ["h", "a", "r"]
  arr1.sort();                                //["a", "h", "r"]
  const sortedString1 = arr1.join("");        //"ahr"


  const lowerCaseString2 = str2.toLowerCase();
  const arr2 = lowerCaseString2.split("");     
  arr2.sort();                    
  const sortedString2 = arr2.join("");  



  if (sortedString1 == sortedString2){
    return true
  } else{
    return false
  }
}



module.exports = isAnagram;
