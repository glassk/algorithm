import sys
from collections import Counter

n, m = map(int, sys.stdin.readline().split())
sum_list = []
max_list = []

for i in range(1, n+1):
    for j in range(1, m+1):
        sum_list.append(i + j)

count = Counter(sum_list).most_common()
max_sum = count[0][1]
for num in count:
    if num[1] == max_sum:
        max_list.append(num[0])

for i in max_list:
    print(i, end=' ')

# ref
sys.stdin = open("input.txt", "r")
n, m = map(int, input().split())
cnt = [0]*(n+m+3)
max = 0
for i in range(1, n+1):
    for j in range(1, m+1):
        cnt[i+j] = cnt[i+j]+1

for i in range(n+m+1):
    if cnt[i] > max:
        max = cnt[i]

for i in range(n+m+1):
    if cnt[i] == max:
        print(i, end=' ')
