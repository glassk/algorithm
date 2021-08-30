### #1330 두 수 비교하기

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(a, b) {
  if (a > b) {
    console.log('>');
  } else if (a < b) {
    console.log('<');
  } else {
    console.log('==');
  }
}
```

```
1 2
```



### #9498 시험 성적

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath));

solution(input);

function solution(score) {
  if (90 <= score && score <= 100) {
    console.log('A');
  } else if (80 <= score && score <= 89) {
    console.log('B');
  } else if (70 <= score && score <= 79) {
    console.log('C');
  } else if (60 <= score && score <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}
```

```
100
```



### #2753 윤년

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString());

solution(input);

function solution(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1);
  } else {
    console.log(0);
  }
}
```

```
2000
```



### #14681 사분면 고르기

```javascript
// 백준 node.js 채점 시스템이 이상한 것 같다..! 런타임 에러(EACCES)
// fs 모듈로 처리하면 오류 발생하는 문제
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);
console.log(input);

solution(input[0], input[1]);

function solution(x, y) {
  let answer;
  if (x > 0) {
    answer = y > 0 ? 1 : 4;
  } else {
    answer = y > 0 ? 2 : 3;
  }
  console.log(answer);
}
```

```
12
5
```

```javascript
// ref: fs 대신 readline으로 해결
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0], input[1]);
    process.exit();
});
```

- readline으로 직접 input 값을 입력하는데 값을 입력하면 line 이벤트가, 프로그램을 종료(command+C)하면 close 이벤트가 발생하여 input이 처리되고 solution에 input 값이 전달된다.



### #2884 알람 시계

```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(h, m) {
  if (m >= 45) {
    m -= 45;
  } else {
    m = 60 - (45 - m);
    h -= 1;
  }
  h = h < 0 ? 23 : h;
  console.log(`${h} ${m}`);
}
```

```
10 10
```

```javascript
// ref: 일단 m에서 45를 뺀 후 m이 음수인 경우에 한해 처리
	function solution(H, M) {
    M -= 45;
    if (M < 0) {
        M += 60;
        H -= 1;
    }
    if (H < 0) {
        H = 23;
    }
    console.log(H, M);
}
```

