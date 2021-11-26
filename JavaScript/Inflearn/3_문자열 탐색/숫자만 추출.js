// 방법 1: isNaN(), parseInt() 이용
function solution(str) {
    let answer = '';

    for (let item of str) {
        if (!isNaN(item)) answer += item;
    }

    return parseInt(answer);
}

console.log(solution('g0en2T0s8eSoft'));


// 방법 2: isNaN()과 Number() 이용
function solution(str) {
    let answer = 0;

    for (let item of str) {
        if (!isNaN(item)) answer = answer*10 + Number(item);
    }

    return answer;
}

console.log(solution('g0en2T0s8eSoft'));