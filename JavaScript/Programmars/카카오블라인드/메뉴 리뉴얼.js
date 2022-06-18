// https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript
const solution = (orders, course) => {
  const answer = [];
  const orderArr = orders.map((order) => order.split('').sort());
  let courseObj, courseLen, temp, menus, menuLen, maxCourseCount, result;

  const combination = (level, start) => {
    if (level === courseLen) {
      result = temp.join('');
      if (courseObj[result]) {
        courseObj[result]++;
        maxCourseCount = Math.max(maxCourseCount, courseObj[result]);
      } else courseObj[result] = 1;
    } else {
      for (let i = start; i < menuLen; i++) {
        temp[level] = menus[i];
        combination(level + 1, i + 1);
      }
    }
  };

  for (let num of course) {
    courseObj = {};
    courseLen = num;
    temp = Array.from({ length: num }, () => 0);
    maxCourseCount = 1;
    for (let order of orderArr) {
      menus = order;
      menuLen = menus.length;
      combination(0, 0);
    }

    // maxCourseCount를 따로 배열에 저장해서 최상위 스코프에서 filter로 answer 만드는 게 더 효율적
    if (maxCourseCount < 2) continue;
    for (let [courseStr, courseCount] of Object.entries(courseObj)) {
      if (courseCount === maxCourseCount) {
        answer.push(courseStr);
      }
    }
  }

  answer.sort();

  return answer;
};

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // 	["AC", "ACDE", "BCFG", "CDE"]
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // ["WX", "XY"]
