function solution(n, arrN, m, arrM) {
    let answer = [];
    arrN.sort((a, b) => a - b);
    arrM.sort((a, b) => a - b);
    
    let pointerN = pointerM = 0;
    while (pointerN < n && pointerM < m) {
        if (arrN[pointerN] === arrM[pointerM]) {
            answer.push(arrN[pointerN++]);
            pointerM++;
        }
        else if (arrN[pointerN] < arrM[pointerM]) pointerN++;
        else pointerM++;
    }

    return answer;
}

console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8])); // [ 2, 3, 5 ]