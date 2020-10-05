#11720 숫자의 합
#check1: 공백없이 주어지는 N개의 숫자는 리스트형으로 형변환해서 입력받는다.
#참고: https://xeros.dev/103
N = int(input())

if 1 <= N <= 100:
    sum = 0
    numbers = list(input())

    for i in range(N):
        sum += int(numbers[i])
    print(sum)
else: 
    print("Check input condition: 1 <= input <= 100")
