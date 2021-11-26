function solution(str) {
    const newStr = str.toLowerCase().replace(/[^a-z]/g, '');
    let answer = 'YES';

    if (newStr.split('').reverse().join('') !== newStr) return 'NO';

    return answer;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES