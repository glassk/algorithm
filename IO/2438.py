#2438 별 찍기 - 1
N = int(input())

if 1 <= N <= 100:
    for i in range(1, N+1):
        print('*'*i)
else:
    print('Check input condition: 1 <= input <= 100')
