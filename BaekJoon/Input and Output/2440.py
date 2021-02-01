#2440 별 찍기 - 3 
N = int(input())

if 1 <= N <= 100:
    for i in range(N, 0, -1):
        print("*"*i)
else:
    print("Check input condition: 1 <= N <= 100")