import sys
n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())
m_list = list(map(int, sys.stdin.readline().split()))

nm_list = n_list + m_list
nm_list.sort()
for nm in nm_list:
    print(nm, end=' ')

#ref
sys.stdin = open("input.txt", "r")
n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))
p1 = p2 = 0
c = []
while p1 < n and p2 < m:
    if a[p1] < b[p2]:
        c.append(a[p1])
        p1 += 1
    else:
        c.append(b[p2])
        p2 += 1
if p1 < n:
    c = c+a[p1:]
if p2 < m:
    c = c+b[p2:]
for x in c:
    print(x, end=' ')
