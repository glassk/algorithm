// 2번 동명이인
function solution(name, others) {
  let answer = 0;
  others.forEach((v) => {
    if (new RegExp(name).test(v)) {
      answer++;
    }
  });

  return answer;
}

console.log(solution('fred', ['sam', 'fredy', 'fredi', 'ilium'])); // 2
console.log(solution('dalgu', ['dalgu', 'benjamin', 'oscar', 'goormee'])); // 1
