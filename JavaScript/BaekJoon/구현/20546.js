// 20546 🐜 기적의 매매법 🐜
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const cash = +input[0];
const stockArr = input[1].split(' ').map((price) => +price);

function bnp(cash, stockArr) {
  let balance = cash;
  let sharesTotal = 0;
  let sharesNum;

  for (let stock of stockArr) {
    if (balance <= 0) break;
    if (balance < stock) continue;

    sharesNum = Math.floor(balance / stock);
    balance -= stock * sharesNum;
    sharesTotal += sharesNum;
  }

  return [balance, sharesTotal];
}

function timing(cash, stockArr) {
  let balance = cash;
  let sharesTotal = 0;

  for (let i = 3; i < stockArr.length; i++) {
    const [first, second, third] = stockArr.slice(i - 3, i);

    if (first < second && second < third) {
      if (sharesTotal === 0) continue;

      balance += stockArr[i] * sharesTotal;
      sharesTotal = 0;
    } else if (first > second && second > third) {
      if (balance <= 0 || balance < stockArr[i]) continue;

      let sharesNum = Math.floor(balance / stockArr[i]);
      balance -= stockArr[i] * sharesNum;
      sharesTotal += sharesNum;
    }
  }

  return [balance, sharesTotal];
}

function calculateTotal(balance, lastDayStock, sharesNum) {
  return balance + lastDayStock * sharesNum;
}

function solution(cash, stockArr) {
  const [bnpBalance, bnpSharesTotal] = bnp(cash, stockArr);
  const [timingBalance, timingSharesTotal] = timing(cash, stockArr);
  const lastDayStock = stockArr[stockArr.length - 1];

  const bnpTotal = calculateTotal(bnpBalance, lastDayStock, bnpSharesTotal);
  const timingTotal = calculateTotal(
    timingBalance,
    lastDayStock,
    timingSharesTotal
  );

  let answer;
  if (bnpTotal > timingTotal) {
    answer = 'BNP';
  } else if (bnpTotal < timingTotal) {
    answer = 'TIMING';
  } else {
    answer = 'SAMESAME';
  }

  console.log(answer);
}

solution(cash, stockArr);
