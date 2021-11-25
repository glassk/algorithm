function solution(arr) {
  // let answer = arr; // shallow copy
  let answer = [...arr]; // deep copy
  let arrSum = answer.reduce((acc, val) => acc + val, 0);
  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (arrSum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
