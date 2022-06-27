// 숫자의 자릿수 중 m개 제거해서 가장 큰 수 만들기
// 숫자 순서 유지해야 함
const solution = (n, m) => {
  const numbers = String(n).split('');
  let stack = [];
  numbers.forEach((num) => {
    // ✅ m이 0 이상일 때 다음 수가 스택 마지막 수보다 크면 pop
    while (stack.length > 0 && m > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      m--;
    }
    stack.push(num);
  });

  if (m !== 0) stack = stack.slice(0, stack.length - m);

  return +stack.join('');
};

console.log(solution(5276823, 3)); // 7823
console.log(solution(9977252641, 5)); // 99776
