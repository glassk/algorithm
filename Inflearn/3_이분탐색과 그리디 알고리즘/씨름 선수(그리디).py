import sys

n = int(sys.stdin.readline())
apply = []
for _ in range(n):
    height, weight = map(int, sys.stdin.readline().split())
    apply.append((height, weight))
apply.sort()
end_weight = apply[0][1]
count = n
for i in range(1, n):
    if end_weight < apply[i][1]:
        count -= 1
        continue
    end_weight = apply[i][1]
print(count)

#ref
sys.stdin = open("input.txt", "r")
n = int(input())
body = []
for i in range(n):
    a, b = map(int, input().split())
    body.append((a, b))
body.sort(reverse=True)
largest = 0
cnt = 0
for x, y in body:
    if y > largest:
        largest = y
        cnt += 1
print(cnt)
