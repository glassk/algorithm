import sys
n = int(sys.stdin.readline())
height = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
board = [[0]*(n+2) for _ in range(n+2)]
count = 0

for i in range(n):
    for j in range(n):
        board[i+1][j+1] = height[i][j]

for i in range(1, n+1):
    for j in range(1, n+1):
        if max(board[i][j], board[i][j-1], board[i][j+1], board[i-1][j], board[i+1][j]) == board[i][j] and max(board[i][j-1], board[i][j+1], board[i-1][j], board[i+1][j]) != board[i][j]:
            count += 1

print(count)

# ref
#sys.stdin = open("input.txt", 'r')
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
a.insert(0, [0]*n)
a.append([0]*n)
for x in a:
    x.insert(0, 0)
    x.append(0)

cnt = 0
for i in range(1, n+1):
    for j in range(1, n+1):
        if all(a[i][j] > a[i+dx[k]][j+dy[k]] for k in range(4)):
            cnt += 1
print(cnt)
