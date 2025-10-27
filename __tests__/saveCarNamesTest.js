import saveCarNames from "../src/input/save-car-names.js";
import Car from "../src/car.js";

describe("saveCarNames", () => {
  test("Car 클래스가 정상적으로 생성되고 초기 position은 0이다", () => {
    const input = ["carA", "carB"];
    const cars = saveCarNames(input);

    cars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
      expect(car.position).toBe(0);
      expect(car.getTrack()).toBe("");
    });
  });

  // test("중복된 이름이 있을 경우 숫자를 붙여 고유 이름을 생성한다", () => {
  //   const input = ["pobi", "woni", "pobi", "pobi", "woni"];

  //   const cars = saveCarNames(input);

  //   expect(cars).toHaveLength(5);
  //   expect(cars.map((c) => c.name)).toEqual([
  //     "pobi",
  //     "woni",
  //     "pobi2",
  //     "pobi3",
  //     "woni2",
  //   ]);
  // });
});
