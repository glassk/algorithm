function solution(strings) {
    let answer = '', maxStringLength = Number.MIN_SAFE_INTEGER;

    for (let string of strings) {
        if (string.length > maxStringLength) {
            maxStringLength = string.length;
            answer = string;
        }
    }

    return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good'])); // beautiful