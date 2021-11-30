function solution(need, plan) {
    let answer = 'YES';
    let needQueue = need.split('');

    for (subject of plan) {
        if (needQueue.includes(subject)) {
            if (subject != needQueue.shift()) return 'NO';
        }
    }

    if (needQueue.length > 0) return 'NO';

    return answer;
}

console.log(solution('CBA', 'CBDAGE')); // YES