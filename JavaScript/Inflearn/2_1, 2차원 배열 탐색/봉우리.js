function solution(n, arr) {
    let answer = 0;
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let tempX = i + dx[k];
                let tempY = j + dy[k];
                if (tempX >= 0 && tempX < n && tempY >= 0 && tempY < n && arr[tempX][tempY] >= arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer++;
        }
    }
    
    return answer;
}

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); // 10
