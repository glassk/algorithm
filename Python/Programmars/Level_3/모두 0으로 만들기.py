# ref: https://velog.io/@piopiop/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AA%A8%EB%91%90-0%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-Python
from collections import defaultdict
import sys
sys.setrecursionlimit(300000)
answer = 0


def dfs(x, a, tree, visited):
    global answer
    visited[x] = 1
    for y in tree[x]:
        if not visited[y]:
            a[x] += dfs(y, a, tree, visited)
    answer += abs(a[x])
    return a[x]


def solution(a, edges):
    global answer
    if sum(a) != 0:
        return -1
    tree = defaultdict(list)
    for i, j in edges:
        tree[i].append(j)
        tree[j].append(i)
    visited = [0] * len(a)
    dfs(0, a, tree, visited)
    return answer


print(solution([-5, 0, 2, 1, 2], [[0, 1], [3, 4], [2, 3], [0, 3]]))  # 9
print(solution([0, 1, 0], [[0, 1], [1, 2]]))  # -1
