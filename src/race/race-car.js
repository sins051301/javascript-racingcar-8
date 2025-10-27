import { Console } from "@woowacourse/mission-utils";

function raceCar(cars, tryCount) {
  Console.print("\n실행 결과");
  for (let i = 0; i < tryCount; i++) {
    moveCars(cars);
    printRaceState(cars);
  }
}

function moveCars(cars) {
  cars.forEach((car) => car.move());
}

function printRaceState(cars) {
  cars.forEach((car) => {
    Console.print(`${car.name} : ${car.getTrack()}`);
  });
  Console.print("");
}

export default raceCar;
