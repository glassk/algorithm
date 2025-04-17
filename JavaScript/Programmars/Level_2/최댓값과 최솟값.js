const solution = (s) => {
  s = s.split(' ').map((n) => +n);
  return `${Math.min(...s)} ${Math.max(...s)}`;
};

// 250417
function solution(s) {
  const numbers = s.split(' ').map((item) => Number(item));

  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

console.log(solution('1 2 3 4')); // "1 4"
console.log(solution('-1 -2 -3 -4')); // "-4 -1"
console.log(solution('-1 -1')); // "-1 -1"
