// 방법 1: toLowerCase() 이용
function solution(str) {
    const lowerStr = str.toLowerCase();
    const strLen = str.length;
    let answer = 'YES';

    for (let i = 0; i < Math.floor(strLen / 2); i++) {
        if (lowerStr[i] !== lowerStr[strLen-i-1]) return 'NO';
    }

    return answer;
}

console.log(solution('gooG'));


// 방법 2: split(), reverse(), join() 이용
function solution(str) {
    const lowerStr = str.toLowerCase();
    let answer = 'YES';

    if (lowerStr.split('').reverse().join('') !== lowerStr) return 'NO';

    return answer;
}

console.log(solution('gooG'));