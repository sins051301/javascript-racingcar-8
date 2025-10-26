function validateTryCount(tryCount) {
  const tryCountNumber = Number(tryCount);

  if (isNaN(tryCountNumber)) {
    throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
  }

  if (tryCountNumber <= 0) {
    throw new Error("[ERROR] 시도 횟수는 0보다 커야 합니다.");
  }
  return tryCountNumber;
}

export default validateTryCount;
