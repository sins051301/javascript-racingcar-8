import Car from "./car.js";

function saveCarNames(inputArray) {
  const carNames = inputArray.map((name) => new Car(name));
  return carNames;
}

export default saveCarNames;
