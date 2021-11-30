function solution(str) {
    const stack = [];
    let answer = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') stack.push(str[i]);
        else {
            stack.pop();
            if (str[i-1] === '(') answer += stack.length;
            else answer++;
        }
    }

    return answer;
}

console.log(solution('()(((()())(())()))(())')); // 17
console.log(solution('(((()(()()))(())()))(()())')); // 24