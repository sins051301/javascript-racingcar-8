import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random >= 4) this.position++;
  }

  getTrack() {
    return "-".repeat(this.position);
  }
}

export default Car;
