// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12981
const solution = (n, words) => {
  const wordLen = words.length;
  const wordSet = new Set([words[0]]);
  let lastLetter = words[0][words[0].length - 1];
  for (let i = 1; i < wordLen; i++) {
    if (lastLetter === words[i][0] && !wordSet.has(words[i])) {
      wordSet.add(words[i]);
      lastLetter = words[i][words[i].length - 1];
    } else {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
};

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
); // [3,3]
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0,0]
console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
); // [1, 3]
