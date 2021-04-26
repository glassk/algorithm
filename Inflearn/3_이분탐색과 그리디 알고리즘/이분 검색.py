import sys

n, m = map(int, sys.stdin.readline().split())
num = list(map(int, sys.stdin.readline().split()))
num.sort()
start = 0
end = n - 1

while True:
    mid = num[(start+end)//2]
    if mid == m:
        print(num.index(m) + 1)
        break
    elif mid < m:
        start = num.index(mid)
    else:
        end = num.index(mid)

#ref
sys.stdin = open("input.txt", "r")
n, m = map(int, input().split())
a = list(map(int, input().split()))
a.sort()
lt = 0
rt = n-1
while lt <= rt:
    mid = (lt+rt)//2
    if a[mid] == m:
        print(mid+1)
        break
    elif a[mid] > m:
        rt = mid-1
    else:
        lt = mid+1
