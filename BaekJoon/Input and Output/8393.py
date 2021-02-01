#8393 합
n = int(input())

if 1 <= n <= 10000:
    sum = 0
    for i in range(1, n+1):
        sum += i
    print(sum)
else:
    print("Check input condition: 1 <= input <= 10000")
