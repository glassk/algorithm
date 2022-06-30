// https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
// 일부 런타임 에러
const solution = (m, musicinfos) => {
  const splitNotes = (notes) => {
    return notes.match(/[ABCDEFG]#?/g);
  };

  const calculatePlayTime = (start, end) => {
    const [startHour, startMin] = start.split(':').map((num) => +num);
    const [endHour, endMin] = end.split(':').map((num) => +num);
    return endHour * 60 + endMin - (startHour * 60 + startMin);
  };

  const isIncludeMelodies = (played, melodies) => {
    const playedLen = played.length;
    const melodiesLen = melodies.length;
    let index = 0;
    for (let i = 0; i < playedLen; i++) {
      if (played[i] === melodies[index]) index++;
      else index = 0;

      if (index === melodiesLen) return true;
    }
    return false;
  };

  const musicMap = new Map();
  const answers = [];
  const melodies = splitNotes(m);
  musicinfos.forEach((info) => {
    let [start, end, title, notes] = info.split(',');
    notes = splitNotes(notes);
    const playTime = calculatePlayTime(start, end);

    let played;
    if (playTime > notes.length) {
      played =
        notes.join('').repeat(Math.floor(playTime / notes.length)) +
        notes.slice(0, playTime % notes.length).join('');
    } else {
      played = notes.slice(0, playTime).join('');
    }
    musicMap.set(title, played);

    if (isIncludeMelodies(splitNotes(played), melodies)) {
      answers.push(title);
    }
  });

  if (answers.length === 0) return '(None)';
  else if (answers.length === 1) return answers[0];
  else {
    answers.sort((a, b) => musicMap.get(b).length - musicMap.get(a).length);
    return answers[0];
  }
};

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "HELLO"
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
); // "FOO"
console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "WORLD"
