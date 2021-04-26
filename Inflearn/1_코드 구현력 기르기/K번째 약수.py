import sys

n, k = map(int, sys.stdin.readline().split())
list = []

for i in range(1, n+1):
    if n % i == 0:
        list.append(i)
else:
    print(list[k-1]) if len(list) >= k else print(-1)

# ref
sys.stdin = open("input.txt", "r")
n, k = map(int, input().split())
cnt = 0
for i in range(1, n+1):
    if n % i == 0:
        cnt += 1
    if cnt == k:
        print(i)
        break
else:
    print(-1)
