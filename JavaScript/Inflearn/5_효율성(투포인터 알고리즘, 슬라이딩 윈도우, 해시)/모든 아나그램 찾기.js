function isSameMap(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) return false;
    }

    return true;
}

function solution(s, t) {
    let answer = 0;
    let tMap = new Map();
    let sMap = new Map();
    for (let letter of t) {
        if (tMap.has(letter)) tMap.set(letter, tMap.get(letter) + 1);
        else tMap.set(letter, 1);
    }

    let tLen = t.length;
    for (let i = 0; i < tLen - 1; i++) {
        if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
        else sMap.set(s[i], 1);
    }

    let left = 0;
    for (let right = tLen - 1; right < s.length; right++) {
        if (sMap.has(s[right])) sMap.set(s[right], sMap.get(s[right]) + 1);
        else sMap.set(s[right], 1);

        if (isSameMap(sMap, tMap)) answer++;
        
        sMap.set(s[left], sMap.get(s[left]) - 1);

        if (sMap.get(s[left]) === 0) sMap.delete(s[left]);
        
        left++;
    }
     
    return answer;
}

console.log(solution('bacaAacba', 'abc'));