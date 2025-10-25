import Car from "../car.js";

function saveCarNames(inputArray) {
  const nameCount = {};

  const cars = inputArray.map((name) => {
    if (!nameCount[name]) {
      nameCount[name] = 1;
    } else {
      nameCount[name]++;
    }

    let uniqueName = name;
    if (nameCount[name] > 1) {
      uniqueName = `${name}${nameCount[name]}`;
    }

    return new Car(uniqueName);
  });

  return cars;
}

export default saveCarNames;
