import sys
n = int(sys.stdin.readline())
num_list = [i for i in range(2, n+1)]

for num in range(3, len(num_list) + 2):
    for i in range(2, num):
        if num % i == 0:
            num_list.remove(num)
            break
print(num_list)

#ref
sys.stdin = open("input.txt", "r")
n = int(input())
ch = [0]*(n+1)
cnt = 0
for i in range(2, n+1):
    if ch[i] == 0:
        cnt += 1
        for j in range(i, n+1, i):
            ch[j] = 1
print(cnt)
