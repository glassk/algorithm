#2441 별 찍기 - 4
N = int(input())

if 1 <= N <= 100:
    for i in range(N, 0, -1):
        print(" "*(N-i) + "*"*i)

else:
    print("Check input condition: 1 <= N <= 100")