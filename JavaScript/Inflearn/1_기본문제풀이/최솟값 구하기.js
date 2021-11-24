function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    answer = min;

    return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
console.log(solution([5, 7, 1, 3, 2, 9, 11])); // 1