def DFS(x, y):
    global res
    if x == 6 and y == 6:
        res += 1
    else:
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx <= 6 and 0 <= ty <= 6 and board[tx][ty] == 0:
                board[tx][ty] = 1
                DFS(tx, ty)
                board[tx][ty] = 0


dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
size = 7
board = [list(map(int, input().split())) for _ in range(size)]
board[0][0] = 1
res = 0
DFS(0, 0)
print(res)
