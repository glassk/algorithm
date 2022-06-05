process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  console.log(solution(a, b));
});

const solution = (n, m) => {
  let answer = '';
  const row = '*'.repeat(n) + '\n';
  for (let i = 0; i < m; i++) {
    answer += row;
  }

  return answer;
};
