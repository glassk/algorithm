function solution(numArray) {
  let answer;

  answer = numArray.filter((num, index) => {
    if (index === 0 || num > numArray[index-1]) return num;
  });

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12])); // [ 7, 9, 6, 12 ]


// push 이용
function solution(numArray) {
  let answer = [];

  answer.push(numArray[0]);

  for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] > numArray[i-1]) answer.push(numArray[i]);
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12])); // [ 7, 9, 6, 12 ]
