# Floyd-Warshall 알고리즘(시간 초과)
from collections import defaultdict


def solution(n, edge):
    answer = 0
    dis = [[20005]*n for _ in range(n)]
    for i in range(n):
        dis[i][i] = 1
    for i in range(len(edge)):
        dis[edge[i][0]-1][edge[i][1]-1] = 1
        dis[edge[i][1]-1][edge[i][0]-1] = 1
    for k in range(n):
        for i in range(n):
            for j in range(n):
                dis[i][j] = min(dis[i][j], dis[i][k]+dis[k][j])
    for i in range(n):
        if dis[0][i] == max(dis[0]):
            answer += 1
    return answer


print(solution(6, [[3, 6], [4, 3], [3, 2], [
      1, 3], [1, 2], [2, 4], [5, 2]]))  # 3


# ref
def bfs(graph, start, distances):
    q = [start]
    visited = set([start])

    while len(q) > 0:
        current = q.pop(0)
        for neighbor in graph[current]:
            if neighbor not in visited:
                visited.add(neighbor)
                q.append(neighbor)
                distances[neighbor] = distances[current] + 1


def solution(n, edge):
    # 그래프 만들기
    graph = defaultdict(list)

    for e in edge:
        graph[e[0]].append(e[1])
        graph[e[1]].append(e[0])

    # bfs 탐색 (최단 거리를 구해야 하므로)
    distances = [0]*(n+1)
    bfs(graph, 1, distances)

    max_distance = max(distances)
    answer = 0

    for distance in distances:
        if distance == max_distance:
            answer += 1

    return answer
