import Car from "../car.js";

function createUniqueName(name, nameCount) {
  if (!nameCount[name]) {
    nameCount[name] = 1;
  } else {
    nameCount[name]++;
  }

  let uniqueName = name;
  if (nameCount[name] > 1) {
    uniqueName = `${name}${nameCount[name]}`;
  }

  return uniqueName;
}

function saveCarNames(inputArray) {
  // const nameCount = {};

  const cars = inputArray.map((name) => {
    // const uniqueName = createUniqueName(name, nameCount);

    return new Car(name);
  });

  return cars;
}

export default saveCarNames;
