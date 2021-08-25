import sys
n = int(sys.stdin.readline())
award = [0 for _ in range(n)]
for i in range(n):
    a, b, c = map(int, sys.stdin.readline().split())
    if a == b == c:
        award[i] = 10000 + a * 1000
    elif a == b or c == a:
        award[i] = 1000 + a * 100
    elif b == c:
        award[i] = 1000 + b * 100
    else:
        award[i] = max(a, b, c) * 100
print(max(award))

# ref
sys.stdin = open("input.txt", "r")
max = 0
res = 0
n = int(input())
for i in range(n):
    tmp = input().split()
    tmp.sort()
    a, b, c = map(int, tmp)
    if a == b and b == c:
        money = 10000+(a*1000)
    elif a == b or a == c:
        money = 1000+(a*100)
    elif b == c:
        money = 1000+(b*100)
    else:
        money = c*100
    if money > res:
        res = money

print(res)
