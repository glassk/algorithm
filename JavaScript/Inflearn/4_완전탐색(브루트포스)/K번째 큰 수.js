function solution(n, k, cards) {
    let answer;
    let cardSumSet = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let s = j + 1; s < n; s++) {
             cardSumSet.add(cards[i] + cards[j] + cards[s])
            }
        }
    }

    let cardSumArray = Array.from(cardSumSet).sort((a, b) => b - a);
    answer = cardSumArray[k-1];

    return answer;
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42])); // 143
