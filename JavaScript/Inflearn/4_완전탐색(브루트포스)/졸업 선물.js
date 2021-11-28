function solution(n, m, gifts) {
    let answer = 0;

    gifts.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let discount = 0; discount < n; discount++) {
        let budget = m - (gifts[discount][0] / 2 + gifts[discount][1]);
        let giftCount = 1;
        for (let giftId = 0; giftId < n; giftId++) {
            if (giftId !== discount) {
              if (gifts[giftId][0] + gifts[giftId][1] > budget) break;
              else {
                budget -= gifts[discount][0] + gifts[giftId][1];
                giftCount++;
              }
            }
        }
        answer = Math.max(answer, giftCount);
    }

    return answer;
}

console.log(
    solution(5, 28, [
        [6, 6],
        [2, 2],
        [4, 3],
        [4, 5],
        [10, 3],
    ])
); // 4
