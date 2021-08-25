# ref
if __name__ == "__main__":
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    dy = [[0]*n for _ in range(n)]
    dy[0][0] = arr[0][0]
    for i in range(1, n):
        dy[0][i] = dy[0][i-1]+arr[0][i]
        dy[i][0] = dy[i-1][0]+arr[i][0]
    for i in range(1, n):
        for j in range(1, n):
            dy[i][j] = min(dy[i-1][j], dy[i][j-1])+arr[i][j]
    print(dy[n-1][n-1])
