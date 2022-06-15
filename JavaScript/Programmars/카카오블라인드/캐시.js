// 문제: https://programmers.co.kr/learn/courses/30/lessons/17680
// 예외: https://programmers.co.kr/questions/19566
function solution(cacheSize, cities) {
  const HIT = 1;
  const MISS = 5;

  if (cacheSize === 0) return MISS * cities.length;

  const cache = Array.from({ length: cacheSize }, () => 0);
  const names = cities.map((city) => city.toUpperCase());
  let position;
  let answer = 0;
  for (let city of names) {
    position = cache.indexOf(city);
    if (position >= 0) {
      answer += HIT;
      for (let i = position; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else if (position === -1) {
      answer += MISS;
      for (let i = cacheSize - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = city;
  }

  return answer;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
); // 50
console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
); // 21
console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 60
console.log(
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 52
console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])); // 16
console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])); // 25

// ✅ 다른 풀이: splice(), shift() 활용
function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];
  let index;
  cities.forEach((city) => {
    city = city.toUpperCase();
    index = cache.indexOf(city);
    if (index > -1) {
      cache.splice(index, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }
    cache.push(city);
  });

  return answer;
}
