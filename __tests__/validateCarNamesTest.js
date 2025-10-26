import validateCarNames from "../src/input/validate-car-names.js";

describe("validateCarNames", () => {
  test.each([
    ["pobi,woni,jun", ["pobi", "woni", "jun"]],
    ["pobi, woni , jun", ["pobi", "woni", "jun"]],
    ["pobi , jun", ["pobi", "jun"]],
  ])("정상 입력: '%s'", (input, expected) => {
    expect(validateCarNames(input)).toEqual(expected);
  });

  test.each([
    ["", "[ERROR] 자동차 이름을 1개 이상 입력해주세요."],
    ["   ", "[ERROR] 자동차 이름을 1개 이상 입력해주세요."],
    [",pobi, jun", "[ERROR] 쉼표로 시작하거나 끝날 수 없습니다."],
    ["jun, pobi,", "[ERROR] 쉼표로 시작하거나 끝날 수 없습니다."],
    ["jun", "[ERROR] 자동차가 두대 이상이어야 경주를 시작할 수 있습니다."],
    ["pobi,,jun", "[ERROR] 쉼표는 연속해서 사용할 수 없습니다."],
    ["pobi,woni,junwoo", "[ERROR] 자동차 이름은 1~5글자 사이여야 합니다."],
  ])("에러 입력: '%s'", (input, errorMsg) => {
    expect(() => validateCarNames(input)).toThrow(errorMsg);
  });
});
