// 방법 1: 나머지 연산으로 자릿수 합 구하기
function solution(numArr) {
    let answer, maxSum = Number.MIN_SAFE_INTEGER;

    for (let num of numArr) {
        let numSum = 0, tempNum = num;
        while (tempNum) {
            numSum += tempNum % 10;
            tempNum = Math.floor(tempNum/10);
        }

        if (numSum > maxSum) {
            maxSum = numSum;
            answer = num;
        }
        else if (numSum === maxSum) {
            if (num > answer) answer = num;
        }
    }

    return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123])); // 137


// 방법 2: 문자 배열로 변환해서 자릿수 합 구하기
function solution(numArr) {
    let answer, maxSum = Number.MIN_SAFE_INTEGER;

    for (let num of numArr) {
        let numSum = num.toString().split('').reduce((sum, n) => sum + Number(n), 0);
        
        if (numSum > maxSum) {
            maxSum = numSum;
            answer = num;
        }
        else if (numSum === maxSum) {
            if (num > answer) answer = num;
        }
    }

    return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123])); // 137