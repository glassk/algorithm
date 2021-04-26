import sys
n = int(sys.stdin.readline())
gotgam = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
m = int(sys.stdin.readline())
rotation = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

for i in range(m):
    temp = []
    row = rotation[i][0] - 1
    direction = rotation[i][1]
    num = rotation[i][2]
    if direction == 0:
        for j in range(num % n, n):
            temp.append(gotgam[row][j])
        for j in range(0, num % n):
            temp.append(gotgam[row][j])
    else:
        for j in range((n-num) % n, n):
            temp.append(gotgam[row][j])
        for j in range(0, (n-num) % n):
            temp.append(gotgam[row][j])
    gotgam[row] = temp

start = 0
end = n
answer = 0

for i in range(n):
    for j in range(start, end):
        answer += gotgam[i][j]
    if i < n//2:
        start += 1
        end -= 1
    else:
        start -= 1
        end += 1
print(answer)

#ref
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
m = int(input())
for i in range(m):
    h, t, k = map(int, input().split())
    if(t == 0):
        for _ in range(k):
            a[h-1].append(a[h-1].pop(0))
    else:
        for _ in range(k):
            a[h-1].insert(0, a[h-1].pop())

res = 0
s = 0
e = n-1
for i in range(n):
    for j in range(s, e+1):
        res += a[i][j]
    if i < n//2:
        s += 1
        e -= 1
    else:
        s -= 1
        e += 1
print(res)
