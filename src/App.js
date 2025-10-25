import { MissionUtils } from "@woowacourse/mission-utils";
import saveCarNames from "./input/save-car-names.js";
import validateCarNames from "./input/validate-car-names.js";
import validateTryCount from "./input/validate-try-count.js";
import raceCar from "./race/race-car.js";
import getWinnerCars from "./result/get-winner-cars.js";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)를 기준으로 구분)"
      );
      const inputArray = validateCarNames(input);
      const carNames = saveCarNames(inputArray);

      const tryCount = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
      const tryCountNumber = validateTryCount(tryCount);
      raceCar(carNames, tryCountNumber);
      getWinnerCars(carNames);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
