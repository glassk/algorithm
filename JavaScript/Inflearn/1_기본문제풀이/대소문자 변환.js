function solution(str) {
    let answer = '';

    for (let letter of str) {
        if (letter === letter.toUpperCase()) answer += letter.toLowerCase();
        else answer += letter.toUpperCase();
    }

    return answer;
}

console.log(solution('StuDY'));