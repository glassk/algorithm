import sys

n = int(sys.stdin.readline())
board = [0 for _ in range(n)]
for i in range(n):
    board[i] = list(map(int, sys.stdin.readline().split()))
answer = 0

for i in range(n):
    answer = max(answer, sum(board[i]))

for i in range(n):
    total = 0
    for j in range(n):
        total += board[j][i]
    answer = max(answer, total)

total = 0
for i in range(n):
    total += board[i][i]
answer = max(answer, total)

total = 0
for i in range(n):
    total += board[i][n-1-i]
answer = max(answer, total)

print(answer)

#ref
sys.stdin = open("input.txt", 'r')
n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
largest = -2147000000
for i in range(n):
    sum1 = sum2 = 0
    for j in range(n):
        sum1 += a[i][j]
        sum2 += a[j][i]
    if sum1 > largest:
        largest = sum1
    if sum2 > largest:
        largest = sum2
sum1 = sum2 = 0
for i in range(n):
    sum1 += a[i][i]
    sum2 += a[i][n-i-1]
if sum1 > largest:
    largest = sum1
if sum2 > largest:
    largest = sum2
print(largest)
