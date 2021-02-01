#10991 별 찍기 - 16
N = int(input())

if 1 <= N <= 100:
    for i in range(1, N+1):
        print(" "*(N-i) + "* "*i)
else:
    print("Check input condition: 1 <= input <= 100")