// 문제: https://programmers.co.kr/learn/courses/30/lessons/17686
const solution = (files) => {
  let head, number, tail;
  const answer = files.map((name) => {
    head = name.match(/\D+/g)[0];
    number = name.match(/\d{1,5}/g)[0];
    tail = name.substr(head.length + number.length);
    return [head, number, tail];
  });

  let aHead, bHead;
  answer.sort((a, b) => {
    aHead = a[0].toUpperCase();
    bHead = b[0].toUpperCase();
    if (aHead === bHead) return parseInt(a[1]) - parseInt(b[1]);
    else if (aHead < bHead) return -1;
    else if (aHead > bHead) return 1;
  });

  return answer.map((info) => info.join(''));
};

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
); //  ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ])
); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
