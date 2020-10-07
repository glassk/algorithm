#2739 구구단
N = int(input())

if 1 <= N <= 9:
    for i in range(1, 10):
        print(f'{N} * {i} = {N*i}')
else:
    print("Check input condition: 1 <= input <= 9")
