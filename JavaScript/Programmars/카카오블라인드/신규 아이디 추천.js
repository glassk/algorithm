function solution(new_id) {
  const stage1 = (id) => {
    return id.toLowerCase();
  };

  const stage2 = (id) => {
    const AVAILABLE_LETTERS = /[^a-z0-9-_.]/g;
    return id.replace(AVAILABLE_LETTERS, '');
  };

  const stage3 = (id) => {
    const ONLY_ONE_DOT = /[.]{1,}/g;
    return id.replace(ONLY_ONE_DOT, '.');
  };

  const stage4 = (id) => {
    let result = id;
    if (result[0] === '.') result = result.slice(1) || '';
    if (result[result.length - 1] === '.') result = result.slice(0, -1) || '';
    return result;
  };

  const stage5 = (id) => {
    return id.length === 0 ? 'a' : id;
  };

  const stage6 = (id) => {
    let result = id;
    if (result.length >= 16) result = result.slice(0, 15) || '';
    if (result[14] === '.') result = result.slice(0, -1) || '';
    return result;
  };

  const stage7 = (id) => {
    let result = id;
    if (result.length <= 2) {
      const lastLetter = result[result.length - 1];
      while (result.length < 3) result += lastLetter;
    }
    return result;
  };

  return stage7(stage6(stage5(stage4(stage3(stage2(stage1(new_id)))))));
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"

// 다른 풀이: padEnd, 정규표현식
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};
