from math import gcd


# 2개 케이스 시간 초과
def solution(arr):
    answer = 2147000000
    product = 1
    for x in arr:
        product *= x
    for i in range(product, max(arr)+1, -max(arr)):
        if i < answer and all(i % x == 0 for x in arr):
            answer = i
    return answer


# ref: 세 수 a, b, c의 최소공배수 = 두 수 a, b의 최소공배수인 l과 c의 최소공배수 lcm
def LCM(num1, num2):
    return num1*num2 // gcd(num1, num2)


def solution(arr):
    while len(arr) >= 2:
        a = arr.pop()
        b = arr.pop()
        arr.append(LCM(a, b))
    return arr[0]


print(solution([2, 6, 8, 14]))  # 168
print(solution([1, 2, 3]))  # 6
