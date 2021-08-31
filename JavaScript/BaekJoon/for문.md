### #2739 구구단

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
```

```
2
```



### #10950 A+B - 3

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputT = Number(input[0]);
const inputTestCase = [];
for (let i = 1; i <= inputT; i++) {
  inputTestCase.push(input[i].split(' ').map((item) => +item));
}

solution(inputT, inputTestCase);

function solution(t, testCases) {
  for (let i = 0; i < t; i++) {
    console.log(testCases[i][0] + testCases[i][1]);
  }
}
```

```
5
1 1
2 3
3 4
9 8
5 2
```

```javascript
// ref: testCaseArray에 각 테스트케이스별 객체 push, 프로퍼티(.A, .B)로 계산
const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);
function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testcaseArray[i].A;
        const B = testcaseArray[i].B;
        console.log(A + B);
    }
}
```



### #8393 합

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  console.log(answer);
}
```



### #15552 빠른 A+B

```javascript
// ref(marco2520332): https://www.acmicpc.net/board/view/22716
// readline 모듈
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
    
  if(input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A+B + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})
```

```javascript
// ref(hanch): https://www.acmicpc.net/board/view/22716
// fs 모듈
let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")

let answer = ''

for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}

console.log(answer)
```

```
5
1 1
12 34
5 500
40 60
1000 1000
```



### #2741 N 찍기

```javascript
// 시간 초과
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

```
5
```

```javascript
// ref: https://gurtn.tistory.com/38
const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);
```

- 하나씩 출력하면 시간 초과가 나므로 결과값 + 개행 문자를 포함하는 문자열 하나를 출력한다.



### #2742 기찍 N

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

let answer = '';
for (let i = input; i >= 1; i--) {
  answer += i + '\n';
}
console.log(answer);
```

```
5
```



### #11021 A+B - 7

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const t = +input[0];
const testCases = [];
for (let i = 1; i <= t; i++) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCases.push({ a: tempValue[0], b: tempValue[1] });
}

solution(t, testCases);

function solution(t, testCases) {
  for (let i = 0; i < t; i++) {
    console.log(`Case #${i + 1}: ${testCases[i].a + testCases[i].b}`);
  }
}
```

```
5
1 1
2 3
3 4
9 8
5 2
```



### #11022 A+B - 8

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const t = +input[0];
const testCases = [];
for (let i = 1; i <= t; i++) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCases.push({ a: tempValue[0], b: tempValue[1] });
}

solution(t, testCases);

function solution(t, testCases) {
  for (let i = 0; i < t; i++) {
    const a = testCases[i].a;
    const b = testCases[i].b;
    console.log(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
  }
}
```

```
5
1 1
2 3
3 4
9 8
5 2
```



### #2438 별 찍기 - 1

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}
```

```
5
```

```javascript
// ref: https://blog.pkiop.me/boj-js/2438/
function solution(N) {
    // 별
    for (let line = 1; line <= N; ++line) {
        const starCnt = line;
        let printString = '';
        for (let i = 0; i < starCnt; ++i) {
            printString += '*';
        }
        console.log(printString);
    }
}
```



### #2439 별 찍기 - 2

```javascript
// ref: https://blog.pkiop.me/boj-js/2439/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  for (let line = 1; line <= n; line++) {
    const startCnt = line;
    const spaceCnt = n - line;
    let printString = '';
    for (let i = 0; i < spaceCnt; i++) {
      printString += ' ';
    }
    for (let i = 0; i < startCnt; i++) {
      printString += '*';
    }
    console.log(printString);
  }
}
```

```
5
```



### #10871 X보다 작은 수

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [n, x] = input[0].split(' ').map((item) => +item);
const a = input[1].split(' ').map((item) => +item);

solution(n, x, a);

function solution(n, x, a) {
  const answerArray = [];
  for (let i = 0; i < n; i++) {
    if (a[i] < x) {
      answerArray.push(a[i]);
    }
  }
  console.log(answerArray.join(' '));
}
```

```
10 5
1 10 4 9 2 3 8 5 7 6
```

