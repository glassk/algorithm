import sys


def digit_sum(x):
    digit_sum = 0
    for i in range(len(str(x))):
        digit_sum += int(str(x)[i])
    return digit_sum


n = int(sys.stdin.readline())
num_list = list(map(int, sys.stdin.readline().split()))
answer = 0
max = 0
for num in num_list:
    if (max < digit_sum(num)):
        max = digit_sum(num)
        answer = num
print(answer)

# ref
sys.stdin = open("input.txt", "r")

# 방법1


def digit_sum(x):
    sum = 0
    while x > 0:
        sum += x % 10
        x = x//10
    return sum

# 방법2


def digit_sum(x):
    sum = 0
    for i in str(x):
        sum += int(i)
    return sum


n = int(input())
a = list(map(int, input().split()))
res = 0
max = -2147000000
for x in a:
    tot = digit_sum(x)
    if tot > max:
        max = tot
        res = x
print(res)
