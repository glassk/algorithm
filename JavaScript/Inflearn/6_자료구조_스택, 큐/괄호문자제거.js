function solution(str) {
    let answer;
    let stack = [];
    for (item of str) {
        if (item === ')') {
            while(stack.pop() !== '(');
        }
        else stack.push(item);
    }

    answer = stack.join('');

    return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM

