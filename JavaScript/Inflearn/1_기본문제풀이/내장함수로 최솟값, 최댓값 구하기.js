function solution(arr) {
    console.log(Math.min(3, 2, 7, 9, 1)); // 1

    console.log(Math.min(...arr)); // 1
    console.log(Math.min.apply(null, arr)); // 1

    console.log(Math.max(...arr)); // 11
    console.log(Math.max.apply(null, arr)); // 11
}

solution([5, 7, 1, 3, 2, 9, 11]);
