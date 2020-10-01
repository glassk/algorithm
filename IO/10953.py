#10953 A+B -6
#check1: 기준문자로 문자열을 분리할 때 -> split('기준문자')
T = int(input())

for _ in range(T): 
    A, B = map(int, input().split(','))
    if 0 < A < 10 and 0 < B < 10:
        print(A+B)
    else:
        print("Check input condition: 0 < input < 10")
