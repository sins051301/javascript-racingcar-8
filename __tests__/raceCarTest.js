import { MissionUtils } from "@woowacourse/mission-utils";
import raceCar from "../src/race/race-car.js";
import Car from "../src/car.js";

describe("raceCar", () => {
  beforeEach(() => {
    jest.spyOn(MissionUtils.Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("3번 시도했는데 '-'가 4개 이상이면 오류", () => {
    const car = new Car("pobi");
    const cars = [car];
    raceCar(cars, 3);

    const trackLength = car.getTrack().length;

    expect(trackLength).toBeLessThanOrEqual(3);
  });
});
