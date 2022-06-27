// 진료순서 정하기
// 접수 순서 목록에서 가장 앞에 있는 환자목록 꺼냄
// 나머지 대기목록 중 꺼낸 환자보다 위험도가 높은 환자가 있으면
// 대기목록 제일 뒤에 다시 넣는다. 없으면 진료 받음
// n명 환자, m번째 환자는 몇 번째로 진료 받는지 출력(0번째~)
const solution = (n, m, arr) => {
  const queue = arr.map((value, index) => [index, value]);
  let answer = 0;
  let current, flag;
  while (true) {
    current = queue.shift();
    flag = 0;
    for (let patient of queue) {
      if (patient[1] > current[1]) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      answer++;
      if (current[0] === m) {
        return answer;
      }
    } else {
      queue.push(current);
    }
  }
};

console.log(solution(5, 2, [60, 50, 70, 80, 90])); // 3
console.log(solution(6, 0, [60, 60, 90, 60, 60, 60])); // 5
