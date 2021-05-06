import itertools as it
import sys


def DFS(L, sum):
    if L == n and sum == f:
        for x in p:
            print(x, end=' ')
        sys.exit(0)
    else:
        for i in range(1, n+1):
            if ch[i] == 0:
                ch[i] = 1
                p[L] = i
                DFS(L+1, sum+(p[L]*b[L]))
                ch[i] = 0


if __name__ == "__main__":
    n, f = map(int, input().split())
    b = [1]*n
    p = [0]*n
    ch = [0]*(n+1)
    for i in range(1, n):
        b[i] = b[i-1]*(n-i)//i
    DFS(0, 0)


# 라이브러리를 이용한 순열
n, f = map(int, input().split())
b = [1]*n
cnt = 0
for i in range(1, n):
    b[i] = b[i-1]*(n-i)/i
a = list(range(1, n+1))

for tmp in it.permutations(a):
    sum = 0
    for L, x in enumerate(tmp):
        sum += (x*b[L])
    if sum == f:
        for x in tmp:
            print(x, end=' ')
        break
