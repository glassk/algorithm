function solution(exp) {
    const stack = [];
    let answer;

    for (item of exp) {
        if (!isNaN(item)) stack.push(Number(item));
        else {
            let right = stack.pop();
            let left = stack.pop();
            if (item === '+') stack.push(left + right);
            else if (item === '-') stack.push(left - right);
            else if (item === '*') stack.push(left * right);
            else if (item === '/') stack.push(left / right);
        }
    }

    answer = stack[0];

    return answer;
}

console.log(solution('352+*9-')); // 12