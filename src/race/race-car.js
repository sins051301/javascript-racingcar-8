import { MissionUtils } from "@woowacourse/mission-utils";

function raceCar(cars, tryCount) {
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
    MissionUtils.Console.print(`${car.name} : ${car.getTrack()}`);
  });
  MissionUtils.Console.print("");
}

export default raceCar;
