n, m = map(int, input().split())
a = [[0]*n for _ in range(n)]
for _ in range(m):
    s, e, w = map(int, input().split())
    a[s-1][e-1] = w
for i in range(len(a)):
    for j in range(len(a)):
        print(a[i][j], end=' ')
    print()

'''
# ref: 무방향 그래프
import sys
sys.stdin=open("input.txt", "r")
n=int(input())
m=int(input())
g=[[0]*(n+1) for _ in range(n+1)]
for i in range(m):
    a, b=map(int, input().split())
    g[a][b]=1
    g[b][a]=1

for i in range(1, n+1):
    for j in range(1, n+1):
        print(g[i][j], end=' ')
    print()
'''
