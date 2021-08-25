def DFS(L):
    global res
    if L == n:
        if s[0] != s[1] and s[1] != s[2] and s[0] != s[2]:
            d = max(s) - min(s)
            if d < res:
                res = d
    else:
        for i in range(len(s)):
            s[i] += a[L]
            DFS(L+1)
            s[i] -= a[L]


n = int(input())
a = list()
s = [0]*3
res = 2147000000
for _ in range(n):
    c = int(input())
    a.append(c)
DFS(0)
print(res)


# ref
def DFS(L):
    global res
    if L == n:
        cha = max(money)-min(money)
        if cha < res:
            tmp = set()
            for x in money:
                tmp.add(x)
            if len(tmp) == 3:
                res = cha
    else:
        for i in range(3):
            money[i] += coin[L]
            DFS(L+1)
            money[i] -= coin[L]


if __name__ == "__main__":
    n = int(input())
    coin = []
    tmp = []
    money = [0]*3
    res = 2147000000
    for _ in range(n):
        coin.append(int(input()))
    DFS(0)
    print(res)
