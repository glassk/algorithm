def DFS(x, y, cnt):
    if x == n-1:
        cnt += 1
    else:
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx < n and 0 <= ty < n and ch[tx][ty] == 0:
                if board[tx][ty] == 1:
                    ch[tx][ty] = cnt
                    print(tx, ty)
                    DFS(tx, ty, cnt)


n = int(input())
board = [list(map(int, input())) for _ in range(n)]
ch = [[0]*n for _ in range(n)]
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]
for x in board:
    print(x)
DFS(0, 0, 1)
for x in ch:
    print(x)


# ref
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def DFS(x, y):
    global cnt
    cnt += 1
    board[x][y] = 0
    for i in range(4):
        xx = x+dx[i]
        yy = y+dy[i]
        if 0 <= xx < n and 0 <= yy < n and board[xx][yy] == 1:
            DFS(xx, yy)


if __name__ == "__main__":
    n = int(input())
    board = [list(map(int, input())) for _ in range(n)]
    res = []
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                cnt = 0
                DFS(i, j)
                res.append(cnt)
    print(len(res))
    res.sort()
    for x in res:
        print(x)
