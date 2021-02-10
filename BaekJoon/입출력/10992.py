#10992 별 찍기 - 17
N = int(input())

if 1 <= N <= 100:
    for i in range(1, N+1):
        if i == 1:
            print(" "*(N-1) + "*") 
        elif i == N:
            print("*"*(2*N - 1))
        else:
            print(" "*(N-i) + "*" + " "*(2*(i-1) - 1) + "*")
else:
    print("Check input condition: 1 <= input <= 100")

#check1: 아래대로 하면 출력은 동일하게 나오는데 N의 값에 상관없이 불필요하게 코드를 모두 실행하게 된다.
#   특히 N이 1일 경우 -1번 string을 출력하게 되는데 실행은 되더라도 원칙적으로 맞지 않다.
'''
print(" "*(N-1) + "*")
for i in range(2, N):
    print(" "*(N-i) + "*" + " "*(2*(i-1) - 1) + "*")
print("*"*(2*N - 1))
'''