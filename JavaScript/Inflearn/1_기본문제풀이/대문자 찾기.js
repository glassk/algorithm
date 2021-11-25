// 방법 1: charCodeAt과 ASCII code(대문자 65~90) 이용
function solution(str) {
    let answer = 0;
    
    for (let letter of str) {
        let num = letter.charCodeAt();
        
        if (num >= 65 && num <= 90) answer++;
    }

    return answer
}

console.log(solution('KoreaTimeGood')); // 3


// 방법 2: toUpperCase 이용
function solution(str) {
    let answer = 0;
    
    for (let letter of str) {
        if (letter === letter.toUpperCase()) answer++;
    }

    return answer
}

console.log(solution('KoreaTimeGood')); // 3