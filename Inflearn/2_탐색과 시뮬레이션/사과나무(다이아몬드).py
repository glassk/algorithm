import sys
n = int(sys.stdin.readline())
apple = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
answer = 0

for i in range(n):
    if i < n//2:
        answer += sum(apple[i][n//2-i:n//2+i+1])
    elif i == n//2:
        answer += sum(apple[i])
    elif n//2 < i < n-1:
        answer += sum(apple[i][i-n//2:i+1])
    else:
        answer += apple[n-1][n//2]
print(answer)

#ref
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
res = 0
s = e = n//2
for i in range(n):
    for j in range(s, e+1):
        res += a[i][j]
    if i < n//2:
        s -= 1
        e += 1
    else:
        s += 1
        e -= 1
print(res)
