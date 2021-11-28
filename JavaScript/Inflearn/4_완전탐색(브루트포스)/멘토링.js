function solution(n, m, arr) {
    let answer = 0;
    
    for (let mentoId = 1; mentoId <= n; mentoId++) {
        for (let menteeId = 1; menteeId <= n; menteeId++) {
            let testCount = 0;
            for (let round = 0; round < m; round++) {
                let mentoRank = menteeRank = 0;
                for (let rank = 0; rank < n; rank++) {
                    if (arr[round][rank] === mentoId) mentoRank = rank;
                    if (arr[round][rank] === menteeId) menteeRank = rank;
                }
                if (mentoRank < menteeRank) testCount++;
            }
            if (testCount === m) answer++;
        }
    }
    
    return answer;
}


console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // 3
