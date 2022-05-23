function solution(price, money, count) {
  let balance = money;
  for (let i = 1; i <= count; i++) {
    balance -= price * i;
  }

  return balance >= 0 ? 0 : Math.abs(balance);
}

console.log(solution(3, 20, 4)); // 10
