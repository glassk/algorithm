function solution(n) {
    let answer;
    
    answer = Math.ceil(n/12);

    return answer;
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15