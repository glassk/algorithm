def DFS(L, sum):
    global res
    if sum > t:
        return

    if L == k:
        if sum == t:
            res += 1
    else:
        for i in range(N[L]+1):
            DFS(L+1, sum + P[L]*i)


if __name__ == "__main__":
    t = int(input())
    k = int(input())
    P = list()
    N = list()
    res = 0
    for _ in range(k):
        p, n = map(int, input().split())
        P.append(p)
        N.append(n)
    DFS(0, 0)
    print(res)
