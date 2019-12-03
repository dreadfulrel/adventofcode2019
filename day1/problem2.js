function incrementObjectElements(obj, increment) {
  Object.keys(obj).forEach(function(key){ obj[key] += increment });
}

let weightFuelMap = {};
const moduleWeights = [
  //data goes here
];
let total = 0;
for (let i = 0; i < moduleWeights.length; i++){
  let currentModuleWeight = moduleWeights[i];
  if (currentModuleWeight in weightFuelMap) {
    total += weightFuelMap[currentModuleWeight]
    continue;
  }
  
  let currentFuelWeight = Math.floor(currentModuleWeight/3)-2;
  currentFuelWeight = currentFuelWeight < 0 ? 0 : currentFuelWeight;

  let workingWeightFuelMap = {}
  workingWeightFuelMap[currentModuleWeight] = currentFuelWeight
  
  while (currentFuelWeight > 0) {
    if (currentFuelWeight in weightFuelMap){
      incrementObjectElements(workingWeightFuelMap, weightFuelMap[currentFuelWeight])
      total += workingWeightFuelMap[currentModuleWeight];
      break;
    }
    nextFuelWeight = Math.floor(currentFuelWeight/3)-2;
    nextFuelWeight = nextFuelWeight < 0 ? 0 : nextFuelWeight;
    if (nextFuelWeight === 0) {
      workingWeightFuelMap[currentFuelWeight] = 0
      total += workingWeightFuelMap[currentModuleWeight]
      break;
    }
    workingWeightFuelMap[currentFuelWeight] = 0;
    incrementObjectElements(workingWeightFuelMap, nextFuelWeight)
    currentFuelWeight = nextFuelWeight;
  }
  Object.keys(workingWeightFuelMap).forEach(function(key){ weightFuelMap[key] = workingWeightFuelMap[key]});
}

console.log('total',total);

