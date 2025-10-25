import { MissionUtils } from "@woowacourse/mission-utils";
import saveCarNames from "./save-car-names.js";
import validateCarNames from "./validate-car-names.js";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)를 기준으로 구분)"
      );
      const inputArray = validateCarNames(input);
      const carNames = saveCarNames(inputArray);
      MissionUtils.Console.print(`결과 : ${carNames}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
