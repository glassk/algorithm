# 일부 케이스 오답
from collections import defaultdict


def solution(n, costs):
    answer = 0
    costs.sort(key=lambda x: x[2])
    tree = defaultdict(set)
    for x, y, cost in costs:
        if y not in tree[x]:
            answer += cost
            for node in tree[x]:
                tree[node].add(y)
                tree[y].add(node)
            for node in tree[y]:
                tree[node].add(x)
                tree[x].add(node)
            tree[x].add(y)
            tree[y].add(x)
        print(tree)
        if all(len(tree[node]) == n for node in tree):
            break
    return answer


print(solution(4, [[0, 1, 1], [0, 2, 2], [
      1, 2, 5], [1, 3, 1], [2, 3, 8]]))  # 4
print(solution(5, [[0, 1, 5], [1, 2, 3], [2, 3, 3],
                   [3, 1, 2], [3, 0, 4], [2, 4, 6], [4, 0, 7]]))  # 15
print(solution(5, [[0, 1, 1], [3, 4, 1], [1, 2, 2], [2, 3, 4]]))  # 8
print(solution(4, [[0, 1, 5], [1, 2, 3], [
      2, 3, 3], [1, 3, 2], [0, 3, 4]]))  # 9
print(solution(5, [[0, 1, 1], [3, 1, 1], [
      0, 2, 2], [0, 3, 2], [0, 4, 100]]))  # 104
print(solution(6, [[0, 1, 5], [0, 3, 2], [0, 4, 3], [
      1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]]))  # 11
print(solution(5, [[0, 1, 1], [2, 3, 1], [
      3, 4, 2], [1, 2, 2], [0, 4, 100]]))  # 6
print(solution(5, [[0, 1, 1], [0, 4, 5], [
      2, 4, 1], [2, 3, 1], [3, 4, 1]]))  # 8
print(solution(5, [[0, 1, 1], [0, 2, 2],
                   [0, 3, 3], [0, 4, 4], [1, 3, 1]]))  # 8


# ref: https://bladejun.tistory.com/93
def solution(n, costs):
    costs.sort(key=lambda x: x[2])
    routes = set([costs[0][0], costs[0][1]])
    answer = costs[0][2]

    while n != len(routes):
        for i, v in enumerate(costs[1:]):
            if v[0] in routes and v[1] in routes:
                continue

            if v[0] in routes or v[1] in routes:
                routes.update([v[0], v[1]])
                answer += v[2]
                costs[i+1] = [-1, -1, -1]
                break

    return answer
