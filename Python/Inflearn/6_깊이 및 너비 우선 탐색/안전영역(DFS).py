dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]


def DFS(x, y, h):
    ch[x][y] = 1
    for i in range(4):
        tx = x + dx[i]
        ty = y + dy[i]
        if 0 <= tx < n and 0 <= ty < n and ch[tx][ty] == 0 and board[tx][ty] > h:
            DFS(tx, ty, h)


n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]
largest = -2147000000
for i in range(n):
    for j in range(n):
        if largest < board[i][j]:
            largest = board[i][j]
res = 0
for h in range(1, largest):
    cnt = 0
    ch = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if ch[i][j] == 0 and board[i][j] > h:
                cnt += 1
                DFS(i, j, h)
    res = max(cnt, res)
    if cnt == 0:
        break
print(res)
