function solution(heightArray) {
  let answer = 0, maxHeight = heightArray[0];

  for (height of heightArray) {
    if (height > maxHeight) {
      answer++;
      maxHeight = height;
    }
  }

  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); // 5
