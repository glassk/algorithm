import sys
n, m = map(int, sys.stdin.readline().split())
a = list(map(int, sys.stdin.readline().split()))
count = 0
sum = 0
for i in range(n):
    sum = 0
    for j in range(i, n):
        sum += a[j]
        if a[j] == m:
            count += 1
            continue
        if sum == m:
            count += 1
        elif sum > m:
            break
print(count)

#ref
sys.stdin = open("input.txt", 'r')
n, m = map(int, input().split())
a = list(map(int, input().split()))
lt = 0
rt = 1
tot = a[0]
cnt = 0
while True:
    if tot < m:
        if rt < n:
            tot += a[rt]
            rt += 1
        else:
            break
    elif tot == m:
        cnt += 1
        tot -= a[lt]
        lt += 1
    else:
        tot -= a[lt]
        lt += 1
print(cnt)
