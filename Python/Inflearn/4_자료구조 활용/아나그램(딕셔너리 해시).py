import sys
a = input()
b = input()
p = dict()
for x in a:
    p[x] = 0
for x in a:
    p[x] += 1
for key, value in p.items():
    for x in b:
        if key == x:
            p[key] = p[key] - 1
print("YES") if all(value == 0 for key, value in p.items()) else print("NO")

#ref 딕셔너리
sys.stdin = open("input.txt", "r")
a = input()
b = input()
str1 = dict()
str2 = dict()
for x in a:
    str1[x] = str1.get(x, 0)+1
for x in b:
    str2[x] = str2.get(x, 0)+1

for i in str1.keys():
    if i in str2.keys():
        if str1[i] != str2[i]:
            print("NO")
            break  # for문 탈출
    else:  # 정상적인 아나그램이 아님
        print("NO")
        break
else:
    print("YES")


#<개선된 코드>
#sys.stdin=open("in1.txt", "r")
a = input()
b = input()
sH = dict()
for x in a:
    sH[x] = sH.get(x, 0)+1
for x in b:
    sH[x] = sH.get(x, 0)-1

for x in a:
    if(sH.get(x) > 0):
        print("NO")
        break
else:
    print("YES")
