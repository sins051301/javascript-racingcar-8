function validateTryCount(tryCount) {
  const parsed = Number(tryCount);

  if (isNaN(parsed)) {
    throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
  }

  if (parsed <= 0) {
    throw new Error("[ERROR] 시도 횟수는 0보다 커야 합니다.");
  }
  return parsed;
}

export default validateTryCount;
