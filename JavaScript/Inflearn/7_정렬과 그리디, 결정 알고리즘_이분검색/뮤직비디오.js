function countDvd(songs, capacity) {
  let count = 1,
    acc = 0;

  for (let song of songs) {
    if (acc + song > capacity) {
      count++;
      acc = song;
    } else acc += song;
  }

  return count;
}

function solution(m, songs) {
  let left = Math.max(...songs),
    right = songs.reduce((acc, val) => acc + val, 0);

  let mid,
    answer = 0;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (countDvd(songs, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else left = mid + 1;
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
