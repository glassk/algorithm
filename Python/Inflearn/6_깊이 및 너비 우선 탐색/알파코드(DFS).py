def DFS(L, s):
    global res, alpha
    if s > 26:
        return

    if L == l:
        alpha += chr(s+64)
        print(alpha)
        res += 1
        alpha = ''
    else:
        alpha += chr(s+64)
        DFS(L+1, a[L])
        DFS(L+1, int(str(s)+str(a[L])))


code = input()
a = list()
for x in code:
    a.append(int(x))
l = len(a)
alpha = ''
res = 0
DFS(1, a[0])
print(res)


# ref
def DFS(L, P):
    global cnt
    if L == n:
        cnt += 1
        for j in range(P):
            print(chr(res[j]+64), end='')
        print()
    else:
        for i in range(1, 27):
            if code[L] == i:
                res[P] = i
                DFS(L+1, P+1)
            elif i >= 10 and code[L] == i//10 and code[L+1] == i % 10:
                res[P] = i
                DFS(L+2, P+1)


if __name__ == "__main__":
    code = list(map(int, input()))
    n = len(code)
    code.insert(n, -1)
    res = [0]*(n+3)
    cnt = 0
    DFS(0, 0)
    print(cnt)
