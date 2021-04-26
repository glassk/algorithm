import sys
l = int(sys.stdin.readline())
box = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())

box.sort()
for _ in range(m):
    box[l-1] -= 1
    box[0] += 1
    box.sort()
print(box[l-1]-box[0])

#ref
sys.stdin = open("input.txt", "r")
L = int(input())
a = list(map(int, input().split()))
m = int(input())
a.sort()
for _ in range(m):
    a[0] += 1
    a[L-1] -= 1
    a.sort()

print(a[L-1]-a[0])
