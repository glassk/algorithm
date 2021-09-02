### #10952 A+B -5

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const testCases = [];
for (let i = 0; ; i++) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCases.push({ a: tempValue[0], b: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}

solution(testCases);

function solution(testCases) {
  let a = testCases[0].a;
  let b = testCases[0].b;
  let idx = 1;
  while (a !== 0 || b !== 0) {
    console.log(a + b);
    a = testCases[idx].a;
    b = testCases[idx].b;
    idx++;
  }
}
```

```
1 1
2 3
3 4
9 8
5 2
0 0
```

- tempValue의 두 값이 모두 0이면 break하고 solution 함수 실행
- testCases에 넣는 과정에서 마지막 [0, 0]도 들어가므로 solution에서 각 testcase의 a와 b가 0인지 확인해야 한다

```javascript
// ref: while 대신 for문으로 처리했을 때
function solution(testCases) {
  for (let i = 0; ; i++) {
    const a = testCases[i].a;
    const b = testCases[i].b;
    if (a === 0 && b === 0) break;
    console.log(a + b);
  }
}
```

```javascript
// ref: while (true)로 하고 if문으로 제어하는 방식이 코드상 좀 더 간결하지만 무한루프를 돌 가능성이 있기 때문에 지양한다
function solution(testCases) {
  let a = 0;
  let b = 0;
  let idx = 0;
  while (true) {
    a = testCases[idx].a;
    b = testCases[idx].b;
    if (a === 0 && b === 0) {
      break;
    }
    console.log(a + b);
    idx++;
  }
}
```



### #10951 A+B -4

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const testCases = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === '') {
    break;
  }
  const tempValue = input[i].split(' ').map((item) => +item);
  testCases.push({ a: tempValue[0], b: tempValue[1] });
}

solution(testCases);

function solution(testCases) {
  let idx = 0;
  while (idx != testCases.length) {
    console.log(testCases[idx].a + testCases[idx].b);
    idx += 1;
  }
}
```

```
1 1
2 3
3 4
9 8
5 2
```

- 종료조건이 따로 정해져 있지 않은 경우 input이 `''`일 때 종료



### #1110 더하기 사이클

```javascript
// ref
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(n) {
  let makeNum = n;
  let answer = 0;
  while (makeNum !== n || answer === 0) {
    let ten;
    let one;
    if (makeNum >= 10) {
      ten = +String(makeNum)[0];
      one = +String(makeNum)[1];
    } else {
      ten = 0;
      one = +String(makeNum)[0];
    }

    makeNum = ten + one;
    let makeNumOne;
    if (makeNum >= 10) {
      makeNumOne = +String(makeNum)[1];
    } else {
      makeNumOne = +String(makeNum)[0];
    }
    makeNum = +(String(one) + String(makeNumOne));

    answer++;
  }
  console.log(answer);
}
```

- 십의 자리는 ten, 일의 자리는 one으로 나눠서 처리
- makeNum을 업데이트하면서 answer 증가시킴
