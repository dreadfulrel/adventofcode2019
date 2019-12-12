function hasDouble(int) {
  let hasDouble = false;
  const digits = int.toString(10).split('').map(Number)
  digits.push(-1)
  digits.unshift(-1)
  for (let i=0;i<digits.length-1;i++){
    if (digits[i] === digits[i+1]) {
      if (digits[i+2] != digits[i] && digits[i-1] != digits[i]) {
        hasDouble = true;
        break;
      }
    }
  }
  return hasDouble;
}

function incrementIncreasing(int) {
  const digits = int.toString(10).split('').map(Number)
  const indexNine = digits.indexOf(9)
  if (indexNine === -1) {
    return int + 1;
  }
  const newNum = digits[indexNine-1] + 1
  for (let i=indexNine-1;i<digits.length;i++){
    digits[i]=newNum
  }
  return Number(digits.join(''))
}

function nonDecreasing(int) {
  const digits = int.toString(10).split('').map(Number)
  let isDecreasing = false;
  let i = 0;
  for (i;i<digits.length-1;i++){
    if (digits[i] > digits[i+1]) {
      isDecreasing = true;
      break;
    }
  }
  if (!isDecreasing) {
    return int
  }
  const newNum = digits[i]
  for (i;i<digits.length;i++) {
    digits[i] = newNum;
  }
  return Number(digits.join(''))
}

function increasingDoubles(start, end) {
  let doubles = 0
  let i = nonDecreasing(start);
  while (i<=end) {
    if (hasDouble(i)){
      doubles++
    }
    i = incrementIncreasing(i)
  }
  return doubles
}

console.log(increasingDoubles(264360,746325))
