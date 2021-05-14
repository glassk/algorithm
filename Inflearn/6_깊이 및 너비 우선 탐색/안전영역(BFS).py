from collections import deque
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]
n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]
highest = 1
res = 0
for i in range(n):
    for j in range(n):
        if highest < board[i][j]:
            highest = board[i][j]
Q = deque()
for level in range(1, highest+1):
    ch = [[0]*n for _ in range(n)]
    cnt = 0
    for i in range(n):
        for j in range(n):
            if ch[i][j] == 0 and board[i][j] > level:
                ch[i][j] = 1
                Q.append((i, j))
                while Q:
                    tmp = Q.popleft()
                    for k in range(4):
                        x = tmp[0] + dx[k]
                        y = tmp[1] + dy[k]
                        if 0 <= x < n and 0 <= y < n and ch[x][y] == 0:
                            ch[x][y] = 1
                            if board[x][y] > level:
                                Q.append((x, y))
                cnt += 1
    if cnt > res:
        res = cnt
print(res)
