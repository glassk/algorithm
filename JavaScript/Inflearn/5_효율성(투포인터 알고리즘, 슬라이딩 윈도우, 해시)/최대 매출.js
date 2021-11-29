function solution(n, m, arr) {
    let answer = 0, sum = 0;

    for (let i = 0; i < m; i++) {
        sum += arr[i];
    }

    answer = sum;

    for (let i = m; i < n; i++) {
        sum += arr[i] - arr[i-m];
        answer = Math.max(answer, sum);
    }

    return answer;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56