import { Console } from "@woowacourse/mission-utils";
import saveCarNames from "./input/save-car-names.js";
import validateCarNames from "./input/validate-car-names.js";
import validateTryCount from "./input/validate-try-count.js";
import raceCar from "./race/race-car.js";
import getWinnerCars from "./result/get-winner-cars.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const inputArray = validateCarNames(input);
    const carNames = saveCarNames(inputArray);
    const tryCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const tryCountNumber = validateTryCount(tryCount);
    raceCar(carNames, tryCountNumber);
    getWinnerCars(carNames);
  }
}

export default App;
