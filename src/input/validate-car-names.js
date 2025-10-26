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
  const inputArray = input.split(",").map((name) => name.trim());

  if (inputArray.length <= 1) {
    throw new Error(
      "[ERROR] 자동차가 두대 이상이어야 경주를 시작할 수 있습니다."
    );
  }

  const isValid = inputArray.every(
    (name) => name.length > 0 && name.length <= 5
  );
  if (!isValid) {
    throw new Error("[ERROR] 자동차 이름은 1~5글자 사이여야 합니다.");
  }

  return inputArray;
}

export default validateCarNames;
