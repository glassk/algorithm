// 삽입 정렬 응용
function solution(size, arr) {
  const answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    // hit인지 miss인지 확인
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === arr[i]) pos = i;

    // miss
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // hit
    else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

// 배열 내장 함수(unshift, splice, pop) 활용
function solution(size, arr) {
  const answer = [];
  arr.forEach((x) => {
    // hit인지 miss인지 확인
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === arr[i]) pos = i;

    // miss
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    }
    // hit
    else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
