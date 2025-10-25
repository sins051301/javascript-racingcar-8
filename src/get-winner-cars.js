import { MissionUtils } from "@woowacourse/mission-utils";

function getWinnerCars(cars) {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  const winnerNames = winners.join(", ");
  MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
}

export default getWinnerCars;
