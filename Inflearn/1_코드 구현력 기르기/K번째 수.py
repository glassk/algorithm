import sys

t = int(sys.stdin.readline())

for i in range(1, t + 1):
    n, s, e, k = map(int, sys.stdin.readline().split())
    n_list = list(map(int, sys.stdin.readline().split()))
    n_sort_list = n_list[s-1:e]
    n_sort_list.sort()
    print(f'#{i} {n_sort_list[k-1]}')

# ref
sys.stdin = open("input.txt", "r")
T = int(input())
for t in range(T):
    n, s, e, k = map(int, input().split())
    a = list(map(int, input().split()))
    a = a[s-1:e]
    a.sort()
    print("#%d %d" % (t+1, a[k-1]))
