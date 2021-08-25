from collections import deque
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]
n = int(input())
board = [list(map(int, input())) for _ in range(n)]
cnt = 0
Q = deque()
res = []
for i in range(n):
    for j in range(n):
        if board[i][j] == 1:
            board[i][j] = 0
            Q.append((i, j))
            cnt = 1
            while Q:
                tmp = Q.popleft()
                for k in range(4):
                    x = tmp[0] + dx[k]
                    y = tmp[1] + dy[k]
                    if 0 <= x < n and 0 <= y < n and board[x][y] == 1:
                        cnt += 1
                        board[x][y] = 0
                        Q.append((x, y))
            res.append(cnt)
print(len(res))
res.sort()
for x in res:
    print(x)
