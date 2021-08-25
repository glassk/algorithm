import sys


def reverse(x):
    if x >= 10:
        x = str(x)
        x_reversed = ""
        for i in range(len(x)-1, -1, -1):
            x_reversed += x[i]
        return int(x_reversed)
    else:
        return x


def isPrime(x):
    if x == 1:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    return True


n = int(sys.stdin.readline())
num_list = list(map(int, sys.stdin.readline().split()))
for num in num_list:
    if isPrime(reverse(num)):
        print(reverse(num), end=' ')

# ref
sys.stdin = open("input.txt", "r")
n = int(input())
a = list(map(int, input().split()))


def reverse(x):
    res = 0
    while x > 0:
        t = x % 10
        res = res*10+t
        x = x//10
    return res


def isPrime(x):
    if x == 1:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    else:
        return True


for x in a:
    tmp = reverse(x)
    if isPrime(tmp):
        print(tmp, end=' ')
