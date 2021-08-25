#ref
import sys
sys.stdin = open("input.txt", "r")
n = int(input())
meeting = []
for i in range(n):
    a, b = map(int, input().split())
    meeting.append((a, b))
meeting.sort(key=lambda x: (x[1], x[0]))
et = 0  # et(end time)
cnt = 0
for x, y in meeting:  # x/y는 위의 a/b와 같은 역할
    if x >= et:
        et = y
        cnt += 1
print(cnt)
