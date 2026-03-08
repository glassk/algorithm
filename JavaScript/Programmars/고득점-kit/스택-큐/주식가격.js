// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript
function solution(prices) {
  const result = new Array(prices.length).fill(0);
  const stack = []; // 아직 가격이 떨어진 시점을 못 만난 인덱스 목록

  for (let i = 0; i < prices.length; i++) {
    // 현재 가격이 스택 top의 가격보다 낮으면 -> 가격이 떨어진 시점
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const top = stack.pop();
      result[top] = i - top;
    }
    stack.push(i);
  }

  // 스택에 남은 건 끝까지 가격이 안 떨어진 것들
  while (stack.length > 0) {
    const top = stack.pop();
    result[top] = prices.length - 1 - top;
  }

  return result;
}
