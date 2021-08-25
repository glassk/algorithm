import sys
card = [i for i in range(1, 21)]

for i in range(10):
    m, n = map(int, sys.stdin.readline().split())
    temp = card[m-1:n]
    temp.reverse()
    count = 0
    for j in range(m-1, n):
        card[j] = temp[count]
        count += 1
for i in card:
    print(i, end=' ')

#ref
sys.stdin = open("input.txt", "r")
a = list(range(21))
for _ in range(10):
    s, e = map(int, input().split())
    for i in range((e-s+1)//2):
        a[s+i], a[e-i] = a[e-i], a[s+i]
a.pop(0)
for x in a:
    print(x, end=' ')
