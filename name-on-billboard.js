/* You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/
//brute force
function billboard(name, price = 30){
  let total = 0
  for (let i = 0; i < name.length; i++) {
    total += price
  }
  return total
} 

//optimised version for less lines of code
function billboard(name, price = 30){
  return name.split('').map(e => e = price).reduce((a, b) => a + b, 0)
} 
