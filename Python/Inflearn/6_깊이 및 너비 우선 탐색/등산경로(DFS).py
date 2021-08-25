def DFS(x, y):
    global res
    if (x, y) == hp:
        res += 1
    else:
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx < n and 0 <= ty < n and ch[tx][ty] == 0 and a[x][y] < a[tx][ty]:
                ch[tx][ty] = 1
                DFS(tx, ty)
                ch[tx][ty] = 0


n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
ch = [[0]*n for _ in range(n)]
dx = [0, 1, 0, -1]  # 아래, 오른, 위, 왼
dy = [1, 0, -1, 0]
res = 0
lowest = 2147000000
highest = -2147000000
for i, x in enumerate(a):
    for j, y in enumerate(x):
        if y < lowest:
            lowest = y
            lp = (i, j)
        if y > highest:
            highest = y
            hp = (i, j)
DFS(lp[0], lp[1])
print(res)
