#ref
import sys
import heapq as hq
sys.stdin = open("input.txt", "r")
a = []
while True:
    n = int(input())
    if n == -1:
        break
    if n == 0:
        if len(a) == 0:  # 출력할 자료가 없으면 -1 출력
            print(-1)
        else:
            print(hq.heappop(a))
    else:
        hq.heappush(a, n)
