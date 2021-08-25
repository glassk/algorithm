import sys
from collections import deque
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]
m, n = map(int, input().split())
tomato = [list(map(int, input().split())) for _ in range(n)]
check = [[0]*m for _ in range(n)]
res = 2147000000
cnt = 0
Q = deque()

for i in range(n):
    for j in range(m):
        if tomato[i][j] == 1 and check[i][j] == 0:
            check[i][j] = 1
            Q.append((i, j))
            while Q:
                tmp = Q.popleft()
                for k in range(4):
                    x = tmp[0] + dx[k]
                    y = tmp[1] + dy[k]
                    if 0 <= x < n and 0 <= y < m and tomato[x][y] == 0:
                        tomato[x][y] = 1
                        Q.append((x, y))
for x in tomato:
    print(x)
print(cnt)


# ref
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(m)]
Q = deque()
dis = [[0]*n for _ in range(m)]
for i in range(m):
    for j in range(n):
        if board[i][j] == 1:
            Q.append((i, j))
while Q:
    x, y = Q.popleft()
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if 0 <= nx < m and 0 <= ny < n and board[nx][ny] == 0:
            board[nx][ny] = 1
            dis[nx][ny] = dis[x][y]+1
            Q.append((nx, ny))
flag = 1
for i in range(m):
    for j in range(n):
        if board[i][j] == 0:
            flag = 0
result = 0
if flag == 1:
    for i in range(m):
        for j in range(n):
            if dis[i][j] > result:
                result = dis[i][j]
    print(result)
else:
    print(-1)
