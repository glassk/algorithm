function solution(str) {
    let answer = 'YES';
    let stack = [];
    for (let item of str) {
        if (item === '(') stack.push(item);
        else {
            if (stack.length === 0) return 'NO';
            stack.pop();
        }
    }

    if (stack.length > 0) return 'NO';
    
    return answer;
}

console.log(solution('(()(()))(()')); // NO