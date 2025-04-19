function solution(begin, target, words) {
  let answer = Number.MAX_SAFE_INTEGER;
  const wordsLen = words.length;
  const visited = Array(wordsLen).fill(false);

  // 한 자씩 와일드카드로 바꾼 패턴 생성
  const makePatterns = (word) => {
    return [...word].map((_, i) => {
      return word.slice(0, i) + '.' + word.slice(i + 1);
    });
  };

  function dfs(current, count) {
    if (current === target) {
      answer = Math.min(answer, count);
      return;
    }

    const patterns = makePatterns(current).map((p) => new RegExp(`^${p}$`));

    for (let i = 0; i < wordsLen; i++) {
      if (visited[i]) continue;

      for (let j = 0; j < patterns.length; j++) {
        if (patterns[j].test(words[i])) {
          visited[i] = true;
          dfs(words[i], count + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(begin, 0);

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
