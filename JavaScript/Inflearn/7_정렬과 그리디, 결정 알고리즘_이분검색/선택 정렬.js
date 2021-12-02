function solution(n, arr) {
    let answer = arr;
    for (let i = 0; i < n - 1; i++) {
        let index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[index]) index = j;
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }

    return answer;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15])); // [ 5, 7, 11, 13, 15, 23 ]