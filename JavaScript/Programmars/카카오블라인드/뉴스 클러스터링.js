const solution = (str1, str2) => {
  const isValidString = (str) => {
    return !/[^A-Z]/g.exec(str);
  };

  const splitString = (str) => {
    const strings = [];
    const len = str.length;
    for (let i = 0; i < len - 1; i++) {
      strings.push(str.toUpperCase().substr(i, 2));
    }

    return strings;
  };

  const makeCountMap = (set) => {
    const countMap = new Map();
    for (let str of set) {
      countMap.set(str, (countMap.get(str) || 0) + 1);
    }

    return countMap;
  };

  const countIntersection = (map1, map2) => {
    let count = 0;
    for (let [str1, count1] of map1) {
      count += Math.min(count1, map2.get(str1) || 0);
    }

    return count;
  };

  const countUnion = (map1, map2) => {
    const unionMap = map1;
    for (let [str2, count2] of map2) {
      if (unionMap.get(str2)) {
        unionMap.set(str2, Math.max(unionMap.get(str2), count2));
      } else {
        unionMap.set(str2, count2);
      }
    }
    let count = 0;
    for (let [, cnt] of unionMap) {
      count += cnt;
    }

    return count;
  };

  const set1 = splitString(str1).filter((str) => isValidString(str));
  const set2 = splitString(str2).filter((str) => isValidString(str));
  let answer = 65536;
  if (set1.length === 0 && set2.length === 0) return answer;

  const map1 = makeCountMap(set1);
  const map2 = makeCountMap(set2);
  const intersectionCount = countIntersection(map1, map2);
  const unionCount = countUnion(map1, map2);

  return Math.floor((intersectionCount / unionCount) * answer);
};

console.log(solution('FRANCE', 'french')); // 16384
console.log(solution('handshake', 'shake hands')); // 65536
console.log(solution('aa1+aa2', 'AAAA12')); // 43690
console.log(solution('E=M*C^2', 'e=m*c^2')); // 65536
