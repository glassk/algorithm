function solution(str, text) {
    let answer = [];

    let distance = 1000;
    for (let letter of str) {
        if (letter === text) {
            distance = 0;
            answer.push(distance);
        }
        else {
            distance++;
            answer.push(distance);
        }
    }

    distance = 1000;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === text) distance = 0;
        else {
            distance++;
            answer[i] = Math.min(answer[i], distance);
        }
    }

    return answer;
}

console.log(solution('teachermode', 'e')); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]