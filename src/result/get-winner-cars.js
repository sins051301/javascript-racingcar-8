import { Console } from "@woowacourse/mission-utils";

function getWinnerCars(cars) {
  const winners = findWinnerNames(cars);
  printWinners(winners);
}

function getMaxPosition(cars) {
  return Math.max(...cars.map((car) => car.position));
}

function findWinnerNames(cars) {
  const maxPosition = getMaxPosition(cars);
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
}

function printWinners(winners) {
  const winnerNames = winners.join(", ");
  Console.print(`최종 우승자 : ${winnerNames}`);
}

export default getWinnerCars;
