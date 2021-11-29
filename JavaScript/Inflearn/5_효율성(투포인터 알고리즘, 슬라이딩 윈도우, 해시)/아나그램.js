function solution(str1, str2) {
    let answer = 'YES';
    let letterMap = new Map();
    for (let letter of str1) {
      if (letterMap.has(letter)) letterMap.set(letter, letterMap.get(letter) + 1);
      else letterMap.set(letter, 1);
    }

    for (let letter of str2) {
        if (!letterMap.has(letter) || letterMap.get(letter) === 0) return 'NO';
        else letterMap.set(letter, letterMap.get(letter) - 1)
    }

    return answer;
}

console.log(solution('AbaAeCe', 'baeeACA')); // YES
console.log(solution('abaCC', 'Caaab')); // NO