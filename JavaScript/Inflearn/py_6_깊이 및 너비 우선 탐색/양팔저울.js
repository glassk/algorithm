// 무게가 서로 다른 k개의 추와 빈 그릇
// 양팔저울 한 번만 이용해서 원하는 물의 무게를 그릇에 담는다
// 1~S(모든 추 무게의 합) 중 측정이 불가능한 물의 무게 구하기
// 추 개수 k, 추 무게 arr
const solution = (k, arr) => {
  const sumSet = new Set();
  const arrSum = arr.reduce((acc, val) => acc + val, 0);

  const dfs = (level, sum) => {
    if (level === k) {
      if (sum > 0 && sum <= arrSum) sumSet.add(sum);
    } else {
      // ✅ 각 추에 대해 빈 그릇에 놓이는 경우/반대 그릇에 놓이는 경우/놓이지 않는 경우
      dfs(level + 1, sum - arr[level]);
      dfs(level + 1, sum + arr[level]);
      dfs(level + 1, sum);
    }
  };

  dfs(0, 0);

  return arrSum - sumSet.size;
};

console.log(solution(3, [1, 5, 7])); // 2
