// 1~9로 채워진 7x7 격자판
// 가로 또는 세로 방향으로 길이 5자리 회문수 몇 개 있는지 구하기
// 회문수: 앞에서부터나 뒤에서부터 읽었을 때 같은 수
const solution = (board) => {
  const PALINDROME_LENGH = 5;
  const BOARD_LENGTH = 7;

  const isPalindrome = (arr) => {
    for (let i = 0; i < Math.floor(PALINDROME_LENGH / 2); i++) {
      if (arr[i] !== arr[PALINDROME_LENGH - i - 1]) return false;
    }
    return true;
  };

  let answer = 0;
  // 가로 방향
  for (let i = 0; i < BOARD_LENGTH; i++) {
    let start = 0;
    let end = start + PALINDROME_LENGH;
    for (let j = 0; j <= BOARD_LENGTH - PALINDROME_LENGH; j++) {
      if (isPalindrome(board[i].slice(start++, end++))) answer++;
    }
  }

  return answer;
};

console.log(
  solution([
    [2, 4, 1, 5, 3, 2, 6],
    [3, 5, 1, 8, 7, 1, 7],
    [8, 3, 2, 7, 1, 3, 8],
    [6, 1, 2, 3, 2, 1, 1],
    [1, 3, 1, 3, 5, 3, 2],
    [1, 1, 2, 5, 6, 5, 2],
    [1, 2, 2, 2, 2, 1, 5],
  ])
); // 3
