import sys


def DFS(time, sum, tsum):
    global res
    if res < sum:
        res = sum
    if sum+(sum_time-tsum) < res:
        print(res)
        sys.exit(0)
    else:
        for i in range(n):
            if ch[i] == 0 and time < m:
                ch[i] = 1
                DFS(time+q[i][1], sum+q[i][0], tsum+q[i][0])
                ch[i] = 0
                DFS(time, sum, tsum+q[i][0])


if __name__ == "__main__":
    n, m = map(int, input().split())
    q = list()
    res = 0
    ch = [0]*n

    for _ in range(n):
        s, t = map(int, input().split())
        q.append((s, t))
    q.sort(reverse=True)

    sum_time = 0
    for i in range(len(q)):
        sum_time += q[i][1]
    DFS(0, 0, 0)


# ref
def DFS(L, sum, time):
    global res
    if time > m:
        return
    if L == n:
        if sum > res:
            res = sum
    else:
        DFS(L+1, sum+pv[L], time+pt[L])
        DFS(L+1, sum, time)


if __name__ == "__main__":
    n, m = map(int, input().split())
    pv = list()
    pt = list()
    for i in range(n):
        a, b = map(int, input().split())
        pv.append(a)
        pt.append(b)
    res = -2147000000
    DFS(0, 0, 0)
    print(res)
