import sys


def DFS(L, sum, end):
    global res
    if end >= n:
        return

    if L == n:
        if res < sum:
            res = sum
    else:
        DFS(L+1, sum+pl[L], end+tl[L])
        DFS(L+1, sum, end)


if __name__ == "__main__":
    n = int(input())
    res = -2147000000
    tl = list()
    pl = list()
    for _ in range(n):
        t, p = map(int, input().split())
        tl.append(t)
        pl.append(p)
    DFS(0, 0, 0)
    print(res)


# ref
def DFS(L, sum):
    global res
    if L == n+1:
        if sum > res:
            res = sum
    else:
        if L+T[L] <= n+1:
            DFS(L+T[L], sum+P[L])
        DFS(L+1, sum)


if __name__ == "__main__":
    n = int(input())
    T = list()
    P = list()
    for i in range(n):
        a, b = map(int, input().split())
        T.append(a)
        P.append(b)
    res = -2147000000
    T.insert(0, 0)
    P.insert(0, 0)
    DFS(1, 0)
    print(res)
