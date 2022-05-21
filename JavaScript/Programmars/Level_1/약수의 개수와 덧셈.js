function solution(left, right) {
  const countDivisor = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }

    return count;
  };

  let answer = 0;
  for (let num = left; num <= right; num++) {
    if (countDivisor(num) % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }

  return answer;
}

// 다른 풀이: 제곱근 정수이면 약수 개수 홀수
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
