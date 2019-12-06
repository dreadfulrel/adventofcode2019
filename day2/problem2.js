var assert = require('assert');
  
const initialIntcode = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,6,23,2,23,13,27,1,27,5,31,2,31,10,35,1,9,35,39,1,39,9,43,2,9,43,47,1,5,47,51,2,13,51,55,1,55,9,59,2,6,59,63,1,63,5,67,1,10,67,71,1,71,10,75,2,75,13,79,2,79,13,83,1,5,83,87,1,87,6,91,2,91,13,95,1,5,95,99,1,99,2,103,1,103,6,0,99,2,14,0,0';

function evaluateIntcode(noun, verb) {
      const intcodeArray = initialIntcode.split(',').map(a => +a);
      intcodeArray[1] = noun;
      intcodeArray[2] = verb;
      for(let i=0; i < intcodeArray.length; i = i+4){
              if (intcodeArray[i] === 99) {
                break;
              }
              if (intcodeArray[i] === 1) {
                      intcodeArray[intcodeArray[i+3]] = intcodeArray[intcodeArray[i+1]] + intcodeArray[intcodeArray[i+2]]
                        continue;
              }
              if (intcodeArray[i] === 2) {
                      intcodeArray[intcodeArray[i+3]] = intcodeArray[intcodeArray[i+1]] * intcodeArray[intcodeArray[i+2]]
                        continue;
              }
      }
      return intcodeArray[0];
}

function findNounVerb(result) {
	const origin = evaluateIntcode(0,0);
	const nounRate = evaluateIntcode(1,0) - origin;
	const verbRate = evaluateIntcode(0,1) - origin;
	const largeMargin = nounRate > verbRate ? nounRate : verbRate;
	const smallMargin = nounRate < verbRate ? nounRate : verbRate;
	console.log(largeMargin, smallMargin)
	const large = Math.floor(result / largeMargin);
	const resultMinusLargeChunk = result - (large * largeMargin) - origin;
	const small = resultMinusLargeChunk / smallMargin;
	return largeMargin === nounRate ? [large, small] : [small, large]
}

console.log(findNounVerb(19690720))
