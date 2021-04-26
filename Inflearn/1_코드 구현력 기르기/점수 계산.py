import sys
n = int(sys.stdin.readline())
score = list(map(int, sys.stdin.readline().split()))
total = 0
score_list = [0 for _ in range(len(score))]
for i in range(len(score)):
    if score[i] == 1:
        total += 1
        score_list[i] = total
    else:
        total = 0
        score_list[i] = total
print(sum(score_list))

# ref
sys.stdin = open("input.txt", "r")
n = int(input())
a = list(map(int, input().split()))
cnt = 0
sum = 0
for i in range(n):
    if a[i] == 1:
        cnt = cnt+1
        sum = sum+cnt
    else:
        cnt = 0

print(sum)
