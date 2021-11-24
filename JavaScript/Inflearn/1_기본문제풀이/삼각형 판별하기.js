function solution(a, b, c){
    let answer = "YES", max;
    const total = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if (max >= total-max) answer = "NO";
    
    return answer;
}

console.log(solution(13, 33, 17)); // NO
console.log(solution(6, 7, 11)); // YES