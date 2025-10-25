function validateCarNames(carNames) {
  const isValid = carNames.every((carName) => {
    if (carName.length > 5) return false;
    else return true;
  });
  if (!isValid)
    throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력해주세요.");
}

export default validateCarNames;
