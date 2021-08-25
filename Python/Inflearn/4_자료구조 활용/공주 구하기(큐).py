#ref
import sys
from collections import deque
sys.stdin = open("input.txt", "r")
n, k = map(int, input().split())
q = list(range(1, n+1))
dq = deque(q)
while dq:
    for _ in range(k-1):
        cur = dq.popleft()
        dq.append(cur)
    dq.popleft()
    if len(dq) == 1:
        print(dq[0])
        dq.popleft()
