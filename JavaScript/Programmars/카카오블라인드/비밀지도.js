function solution(n, arr1, arr2) {
  const decimalToBinary = (num) => {
    return num.toString(2).padStart(n, '0');
  };

  const answer = [];
  for (let i = 0; i < n; i++) {
    const binary1 = decimalToBinary(arr1[i]);
    const binary2 = decimalToBinary(arr2[i]);
    let row = '';
    for (let j = 0; j < n; j++) {
      if (+binary1[j] + +binary2[j] === 0) row += ' ';
      else row += '#';
    }
    answer.push(row);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
