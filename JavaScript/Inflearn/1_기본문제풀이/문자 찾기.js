// 방법 1: for문과 if문 이용
function solution(str, hit) {
    let answer = 0;

    for (let letter of str) {
        if (letter === hit) answer++;
    }

    return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R')); // 3


// 방법 2: split 이용
function solution(str, hit) {
    let answer = 0;

    answer = str.split(hit).length - 1;

    return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R')); // 3