import validateTryCount from "../src/input/validate-try-count.js";

describe("validateTryCount", () => {
  test.each([1, 3, 10])("정상 입력: %s", (count) => {
    expect(() => validateTryCount(count)).not.toThrow();
  });

  test.each(["a", "five"])("숫자가 아닐 경우 에러 발생: %s", (count) => {
    expect(() => validateTryCount(count)).toThrow(
      "[ERROR] 시도 횟수는 정수여야 합니다."
    );
  });

  test.each([0, -1, -10])("0 이하일 경우 에러 발생: %s", (count) => {
    expect(() => validateTryCount(count)).toThrow(
      "[ERROR] 시도 횟수는 0보다 커야 합니다."
    );
  });
});
