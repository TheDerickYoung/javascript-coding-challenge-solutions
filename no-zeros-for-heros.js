//Numbers ending with zeros are boring.

//They might be fun in your world, but not here.

//Get rid of them. Only the ending ones.

//1450 -> 145
//960000 -> 96
//1050 -> 105
//-1050 -> -105

function noBoringZeros(n) {
  let split = n.toString().split('');

  while (split.length > 1 && split[split.length - 1] === '0') {
    split.pop();
  }

  return Number(split.join(''));
}
