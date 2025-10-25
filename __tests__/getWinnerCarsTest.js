import { MissionUtils } from "@woowacourse/mission-utils";
import getWinnerCars from "../src/result/get-winner-cars.js";

describe("getWinnerCars", () => {
  beforeEach(() => {
    jest.spyOn(MissionUtils.Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("단일 우승자를 올바르게 출력한다", () => {
    const cars = [
      { name: "pobi", position: 4 },
      { name: "woni", position: 2 },
      { name: "jun", position: 3 },
    ];

    getWinnerCars(cars);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : pobi"
    );
  });

  test("여러 우승자를 쉼표로 구분하여 출력한다", () => {
    const cars = [
      { name: "pobi", position: 3 },
      { name: "woni", position: 3 },
      { name: "jun", position: 1 },
    ];

    getWinnerCars(cars);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : pobi, woni"
    );
  });
});
