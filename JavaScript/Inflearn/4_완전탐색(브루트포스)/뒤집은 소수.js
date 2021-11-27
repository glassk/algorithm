function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// 방법 1: 문자 배열로 변환
function solution(numArr) {
    let answer = [];
    
    for (let num of numArr) {
        reversedNum = Number(num.toString().split('').reverse().join(''));
        if (isPrime(reversedNum)) answer.push(reversedNum);
    }

    return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]))


// 방법 2: 나머지 연산
function solution(numArr) {
  let answer = [];

  for (let num of numArr) {
      let reversedNum = 0;
      while (num) {
          reversedNum = reversedNum*10 + num%10;
          num = parseInt(num/10);
      } 
      if (isPrime(reversedNum)) answer.push(reversedNum);
  }

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));