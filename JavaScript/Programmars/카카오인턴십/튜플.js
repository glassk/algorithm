// 참고: https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-2/%ED%8A%9C%ED%94%8C.js
// 설명: https://tech.kakao.com/2020/04/01/2019-internship-test/
function solution(s) {
  const answer = [];
  let sets = s
    .slice(2, -2)
    .split('},{')
    .map((set) => set.split(',').map((x) => +x))
    .sort((a, b) => a.length - b.length);

  console.log(sets);

  for (let set of sets) {
    answer.push(...set.filter((x) => !answer.includes(x)));
  }

  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]
console.log(solution('{{123}}')); // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); // [3, 2, 4, 1]
