// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript

// 사전순 정렬 활용
// 시간복잡도: O(n log n)
// - 정렬: O(n log n)
// - 순회: O(n)
function solution(phone_book) {
  const sorted = phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

// Hash Table(Set) 활용
// 시간복잡도: O(n * m) — n: 전화번호 수, m: 전화번호 평균 길이
// - Set 생성: O(n)
// - 순회: O(n) * 접두어 슬라이싱 O(m) * Set.has() O(1) = O(n * m)
function solution(phone_book) {
  const set = new Set(phone_book);

  for (const item of set) {
    for (let i = 1; i < item.length; i++) {
      if (set.has(item.slice(0, i))) {
        return false;
      }
    }
  }

  return true;
}
