// https://school.programmers.co.kr/learn/courses/30/lessons/468370
function solution(message, spoiler_ranges) {
  // message 파싱
  const originalWords = [];
  let currentIndex = 0;
  for (const word of message.split(' ')) {
    originalWords.push({
      start: currentIndex,
      end: currentIndex + word.length - 1,
      word: word,
    });
    currentIndex += word.length + 1;
  }

  // 스포방지 구간에 겹치는 단어와 겹치지 않는 단어 구분
  const spoilerWords = [];
  const nonSpoiledWordSet = new Set();

  const isOverlapped = (wordStart, wordEnd, rangeStart, rangeEnd) => {
    return wordStart <= rangeEnd && wordEnd >= rangeStart;
  };

  for (const { start, end, word } of originalWords) {
    const isSpoiler = spoiler_ranges.some(([rangeStart, rangeEnd]) =>
      isOverlapped(start, end, rangeStart, rangeEnd),
    );

    if (isSpoiler) {
      spoilerWords.push(word);
    } else {
      nonSpoiledWordSet.add(word);
    }
  }

  const isRevealedSet = new Set(); // 스포 방지 단어 중 이미 공개된 단어
  let count = 0;
  for (const word of spoilerWords) {
    if (!nonSpoiledWordSet.has(word) && !isRevealedSet.has(word)) {
      count++;
    }
    isRevealedSet.add(word);
  }

  return count;
}
