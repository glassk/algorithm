import sys
from collections import deque
order = list(input())
n = int(sys.stdin.readline())
count = 0
for i in range(n):
    temp = []
    plan = list(input())
    dq_order = deque(order)
    for x in plan:
        if any(x == y for y in dq_order):
            temp.append(x)
            dq_order.popleft()
    if temp == order:
        print(f'#{i+1} YES')
    else:
        print(f'#{i+1} NO')

#ref
sys.stdin = open("input.txt", "r")
need = input()
n = int(input())
for i in range(n):
    plan = input()
    dq = deque(need)
    for x in plan:
        if x in dq:
            if x != dq.popleft():
                print("#%d NO" % (i+1))
                break
    else:
        if len(dq) == 0:
            print("#%d YES" % (i+1))
        else:
            print("#%d NO" % (i+1))
