#2577 숫자의 개수
def countNumberByDigit(product, digit):
    count = [0 for _ in range(10)]
    for i in range(digit):
        for j in range(10):
            if product % 10 == j:
                count[j] += 1
        product //= 10
    return count

A = int(input())
B = int(input())
C = int(input())

if 100 <= A < 1000 and 100 <= B < 1000 and 100 <= C < 1000:
    product = A * B * C
    digit = len(str(product))
    count = countNumberByDigit(product, digit)
    for i in range(len(count)):
        print(count[i])
else: 
    print("Check input condition: 100 <= input < 1000")