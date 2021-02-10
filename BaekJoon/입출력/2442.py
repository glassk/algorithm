#2442 별 찍기 - 5
#check1: 각 줄의 별 뒷부분에 공백을 넣을 경우 출력 오류가 발생한다. (굳이 출력할 필요 X)
N = int(input())

if 1 <= N <= 100:
    for i in range(1, N+1):
        print(" "*(N-i) + "*"*(2*i-1))
else:
    print("Check input condition: 1 <= N <= 100")