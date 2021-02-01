#2522 별 찍기 - 12
N = int(input())

if 1 <= N <= 100:
    for i in range(1, N+1):
        print(" "*(N-i) + "*"*i)
    for i in range(N-1, 0, -1):
        print(" "*(N-i) + "*"*i)
else:
    print("Check input condition: 1 <= input <= 100")