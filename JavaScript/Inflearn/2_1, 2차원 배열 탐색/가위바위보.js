function solution(n, arrayA, arrayB) {
    let answer = '';

    for (let i = 0; i < n; i++) {
        if (arrayA[i] === arrayB[i]) answer += 'D\n';
        else if (arrayA[i] === 1 && arrayB[i] === 3) answer += 'A\n';
        else if (arrayA[i] === 3 && arrayB[i] === 2) answer += 'A\n';
        else if (arrayA[i] === 2 && arrayB[i] === 1) answer += 'A\n';
        else answer += 'B\n';
    }
    
    return answer;
}


console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));