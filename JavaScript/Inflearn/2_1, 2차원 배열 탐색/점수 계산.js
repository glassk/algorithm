function solution(resultArr) {
    let answer = 0, countHit = 0;

    for (result of resultArr) {
        if (result === 1) {
            countHit++;
            answer += countHit;
        } 
        else countHit = 0;
    }

    return answer;
}


console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));