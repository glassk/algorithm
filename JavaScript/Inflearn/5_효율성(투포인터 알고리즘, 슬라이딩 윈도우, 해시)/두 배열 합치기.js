function solution(n, arrN, m, arrM) {
    let answer = [];
    let pointerN = pointerM = 0;

    while (pointerN < n && pointerM < m) {
        if (arrN[pointerN] <= arrM[pointerM]) {
            answer.push(arrN[pointerN++]);
        }
        else {
            answer.push(arrM[pointerM++]);
        }
    }

    while (pointerN < n) answer.push(arrN[pointerN++]);
    while (pointerM < m) answer.push(arrM[pointerM++]);

    return answer;
}

console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9])); // [1, 2, 3, 3, 5, 6, 7, 9]