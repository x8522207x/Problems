function calculate(bitString) {
  let bitArray = bitString.split("");
  let digit = bitArray.length - bitArray.findIndex(n => n === '1');
  let remainOneCounts = bitArray.filter(n => n === "1").length - 1;
  let actionSums = digit + remainOneCounts;
  return actionSums;
}

let S='10011';

document.write(calculate(S));
dddd
