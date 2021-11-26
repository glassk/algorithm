function solution(string) {
    let answer = '';

    string += ' ';
    let countLetter = 1;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === string[i+1]) countLetter++;
        else {
            answer += string[i];
            if (countLetter > 1) {
                answer += String(countLetter);
                countLetter = 1;
            }
        }
    }

    return answer
}

console.log(solution('KKHSSSSSSSE')); // K2HS7E