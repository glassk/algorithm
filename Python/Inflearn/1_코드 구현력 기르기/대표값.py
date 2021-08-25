import sys
n = int(sys.stdin.readline())
score = list(map(int, sys.stdin.readline().split()))
average = sum(score) / n
score_min = abs(average - score[0])

for i in range(len(score)):
    if abs(average - score[i]) < score_min:
        score_min = abs(average - score[i])
        num = i + 1

print(f'{int(round(average, 0))} {num}')

# ref
sys.stdin = open("input.txt", "r")
n = int(input())
a = list(map(int, input().split()))
ave = sum(a)/n
ave = ave + 0.5
ave = int(ave)
min = 2147000000
for idx, x in enumerate(a):
    tmp = abs(x-ave)
    if tmp < min:
        min = tmp
        score = x
        res = idx+1
    elif tmp == min:
        if x > score:
            score = x
            res = idx+1
print(ave, res)
