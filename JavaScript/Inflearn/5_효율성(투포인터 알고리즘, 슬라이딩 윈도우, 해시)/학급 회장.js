function solution(str) {
    let answer;
    let symbolMap = new Map();
    for (let letter of str) {
        if (symbolMap.has(letter)) {
            symbolMap.set(letter, symbolMap.get(letter) + 1);
        }
        else symbolMap.set(letter, 1);
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, value] of symbolMap) {
        if (value > max) {
            max = value;
            answer = key;
        }
    }

    return answer;
}

console.log(solution('BACBACCACCBDEDE')); // C