import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)를 기준으로 구분)"
      );
      MissionUtils.Console.print(`결과 : ${carNames}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
