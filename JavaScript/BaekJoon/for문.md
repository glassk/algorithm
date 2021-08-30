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

