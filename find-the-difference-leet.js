//You are given two strings s and t.

//String t is generated by random shuffling string s and then add one more letter at a random position.

//Return the letter that was added to t.

 

//Example 1:

//Input: s = "abcd", t = "abcde"
//Output: "e"
//Explanation: 'e' is the letter that was added.
//Example 2:

//Input: s = "", t = "y"
//Output: "y"
 

//Constraints:

//0 <= s.length <= 1000
//t.length == s.length + 1
//s and t consist of lowercase English letters.

var findTheDifference = function(s, t) {
  const sFrequency = new Array(26).fill(0);
  const tFrequency = new Array(26).fill(0); 

  for (const char of s) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    sFrequency[index]++;
  }

  for (const char of t) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    tFrequency[index]++;
  }

  for (let i = 0; i < 26; i++) {
    if (sFrequency[i] !== tFrequency[i]) {
      return String.fromCharCode('a'.charCodeAt(0) + i);
    }
  }
  
  return '';
}