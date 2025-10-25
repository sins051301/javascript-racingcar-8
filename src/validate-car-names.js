function validateCarNames(input) {
  if (!input || input.trim().length === 0) {
    throw new Error("[ERROR] 자동차 이름을 1개 이상 입력해주세요.");
  }

  if (input.startsWith(",") || input.endsWith(",")) {
    throw new Error("[ERROR] 쉼표로 시작하거나 끝날 수 없습니다.");
  }

  if (/, {0,}\,+/.test(input)) {
    throw new Error("[ERROR] 쉼표는 연속해서 사용할 수 없습니다.");
  }
  const carNames = input.split(",").map((name) => name.trim());

  const isValid = carNames.every((name) => name.length > 0 && name.length <= 5);
  if (!isValid) {
    throw new Error("[ERROR] 자동차 이름은 1~5글자 사이여야 합니다.");
  }

  return carNames;
}

export default validateCarNames;
