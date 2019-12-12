
function createWirePath(input) {
  let currentX = 0;
  let currentY = 0;
  let currentSteps = 0;
  const wirePathX = {0: {0: currentSteps}};
  const wirePathY = {0: {0: currentSteps}};
  const instructions = input.split(',');
  for (let j = 0; j < instructions.length; j++) {
    let instruction = instructions[j];
    let direction = instruction.substring(0, 1);
    const instructionDistance = +instruction.substring(1);
    switch (direction) {
      case 'R':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          if (currentX + i + 1 in wirePathX) {
            wirePathX[currentX + i + 1][currentY] = currentSteps;
          } else {
            const newY = {};
            newY[currentY] = currentSteps;
            wirePathX[currentX + i + 1] = newY;
          }
          wirePathY[currentY][currentX + i + 1] = currentSteps;
        }
        currentX += instructionDistance;
        break;
      case 'L':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          if (currentX - i - 1 in wirePathX) {
            wirePathX[currentX - i - 1][currentY] = currentSteps;
          } else {
            const newY = {};
            newY[currentY] = currentSteps;
            wirePathX[currentX - i - 1] = newY;
          }
          wirePathY[currentY][currentX - i - 1] = currentSteps;
        }
        currentX -= instructionDistance;
        break;
      case 'U':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          if (currentY + i + 1 in wirePathY) {
            wirePathY[currentY + i + 1][currentY] = currentSteps;
          } else {
            const newX = {};
            newX[currentX] = currentSteps;
            wirePathY[currentY + i + 1] = newX;
          }
          wirePathX[currentX][currentY + i + 1] = currentSteps;
        }
        currentY += instructionDistance;
        break;
      case 'D':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          if (currentY - i - 1 in wirePathY) {
            wirePathY[currentY - i - 1][currentX] = currentSteps;
          } else {
            const newX = {};
            newX[currentX] = currentSteps;
            wirePathY[currentY - i - 1] = newX;
          }
          wirePathX[currentX][currentY - i - 1] = currentSteps;
        }
        currentY -= instructionDistance;
        break;
    }
  }
  console.log(wirePathX);
  return wirePathX;
}

function checkWireCrossings(input, wirePathX) {
  let shortestCrossing = false;
  let shortestDistance = false;
  let currentX = 0;
  let currentY = 0;
  let currentSteps = 0;
  const instructions = input.split(',');
  for (let j = 0; j < instructions.length; j++) {
    let instruction = instructions[j];

    let direction = instruction.substring(0, 1);
    const instructionDistance = +instruction.substring(1);
    switch (direction) {
      case 'R':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          currentX += 1;
          if (currentX in wirePathX && currentY in wirePathX[currentX]) {
            if (!shortestCrossing) {
              shortestCrossing = [currentX, currentY];
              shortestDistance = wirePathX[currentX][currentY] + currentSteps;
            } else {
              let distance = wirePathX[currentX][currentY] + currentSteps;
              let currentPoint = [currentX, currentY];
              shortestCrossing = distance < shortestDistance ? currentPoint : shortestCrossing;
              shortestDistance = distance < shortestDistance ? distance : shortestDistance;
            }
          }
        }
        break;
      case 'L':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          currentX -= 1;
          if (currentX in wirePathX && currentY in wirePathX[currentX]) {
            if (!shortestCrossing) {
              shortestCrossing = [currentX, currentY];
              shortestDistance = wirePathX[currentX][currentY] + currentSteps;
            } else {
              let distance = wirePathX[currentX][currentY] + currentSteps;
              let currentPoint = [currentX, currentY];
              shortestCrossing = distance < shortestDistance ? currentPoint : shortestCrossing;
              shortestDistance = distance < shortestDistance ? distance : shortestDistance;
            }
          }
        }
        break;
      case 'U':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          currentY += 1;
          if (currentX in wirePathX && currentY in wirePathX[currentX]) {
            if (!shortestCrossing) {
              shortestCrossing = [currentX, currentY];
              shortestDistance = wirePathX[currentX][currentY] + currentSteps;
            } else {
              let distance = wirePathX[currentX][currentY] + currentSteps;
              let currentPoint = [currentX, currentY];
              shortestCrossing = distance < shortestDistance ? currentPoint : shortestCrossing;
              shortestDistance = distance < shortestDistance ? distance : shortestDistance;
            }
          }
        }
        break;
      case 'D':
        for (let i = 0; i < instructionDistance; i++) {
          currentSteps++;
          currentY -= 1;
          if (currentX in wirePathX && currentY in wirePathX[currentX]) {
            if (!shortestCrossing) {
              shortestCrossing = [currentX, currentY];
              shortestDistance = wirePathX[currentX][currentY] + currentSteps;
            } else {
              let distance = wirePathX[currentX][currentY] + currentSteps;
              let currentPoint = [currentX, currentY];
              shortestCrossing = distance < shortestDistance ? currentPoint : shortestCrossing;
              shortestDistance = distance < shortestDistance ? distance : shortestDistance;
            }
          }
        }
        break;
    }
  }
  return shortestDistance;
}
