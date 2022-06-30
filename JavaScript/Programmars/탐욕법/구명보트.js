// 문제: https://programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    if (people[people.length - 1] + people[0] <= limit) {
      people.pop();
      people.shift();
    } else {
      people.pop();
    }
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3

// ✅ 다른 풀이: 투포인터 알고리즘
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
      answer++;
    } else {
      right--;
      answer++;
    }
  }

  return answer;
}
