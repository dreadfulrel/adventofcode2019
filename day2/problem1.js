var assert = require('assert');

function evaluateIntcode(intcode) {
      const intcodeArray = intcode.split(',').map(a => +a);
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
      return intcodeArray;
}

assert.deepEqual(evaluateIntcode('1,9,10,3,2,3,11,0,99,30,40,50'),[3500,9,10,70,2,3,11,0,99,30,40,50]);
assert.deepEqual(evaluateIntcode('1,0,0,0,99'), [2,0,0,0,99]);
assert.deepEqual(evaluateIntcode('2,3,0,3,99'), [2,3,0,6,99]);
assert.deepEqual(evaluateIntcode('2,4,4,5,99,0'), [2,4,4,5,99,9801]);
assert.deepEqual(evaluateIntcode('1,1,1,4,99,5,6,0,99'), [30,1,1,4,2,5,6,0,99]);

