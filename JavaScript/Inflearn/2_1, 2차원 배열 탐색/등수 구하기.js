// Array.from() 활용
function solution(scoreArr) {
    let scoreArrLength = scoreArr.length;
    let answer = Array.from({length: scoreArrLength}, () => 1);

    for (let i = 0; i < scoreArrLength; i++) {
        for (let j = 0; j < scoreArrLength; j++) {
            if (scoreArr[j] > scoreArr[i]) answer[i]++;
        }
    }

    return answer;
}

console.log(solution([87, 89, 92, 100, 76])); //[ 4, 3, 2, 1, 5 ]