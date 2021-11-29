function solution(n, m, arr) {
    let answer = 0, left = 0, sum = 0;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        while (sum > m) {
            sum -= arr[left++];
        }
        answer += right - left + 1;
    }

    return answer;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));