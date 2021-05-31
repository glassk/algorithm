from collections import deque


def solution(maps):
    n = len(maps)
    m = len(maps[0])
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    distance = [[0]*m for _ in range(n)]
    Q = deque()
    Q.append((0, 0))
    distance[0][0] = 1
    while Q:
        temp = Q.popleft()
        for i in range(4):
            x = temp[0] + dx[i]
            y = temp[1] + dy[i]
            if 0 <= x < n and 0 <= y < m and maps[x][y] == 1:
                maps[x][y] = 0
                distance[x][y] = distance[temp[0]][temp[1]] + 1
                Q.append((x, y))
    if distance[n-1][m-1] == 0:
        return -1
    else:
        return distance[n-1][m-1]


print(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [
      1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]))  # 11
print(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [
      1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]))  # -1
