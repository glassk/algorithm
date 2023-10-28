// Level 1 같은 숫자는 싫어 https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 첫 번째 요소는 항상 포함하고 두 번째 요소부터 answer의 마지막 요소와 다를 때만 추가
function solution(arr) {
  const answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
