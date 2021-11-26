function solution(strings) {
    let answer;

    answer = strings.filter((string, index) => {
        if (strings.indexOf(string) === index) return string;
    })

    return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student'])); // ['good', 'time', 'student']