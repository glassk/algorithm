import sys
string = sys.stdin.readline()
letter = ""
count = 0

for i in string:
    if i.isdigit():
        letter += i
num = int(letter)
for i in range(1, num+1):
    if num % i == 0:
        count += 1
print(num)
print(count)

#ref
sys.stdin = open("input.txt", "r")
s = input()
res = 0
for x in s:
    if x.isdecimal():
        res = res*10+int(x)
print(res)
cnt = 0
for i in range(1, res+1):
    if res % i == 0:
        cnt += 1
print(cnt)
