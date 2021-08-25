def solution(n):
    import math
    if math.sqrt(n).is_integer():
        return int((math.sqrt(n)+1)**2)
    return -1


print(solution(121))  # 144
print(solution(3))  # -1


# ref: 제곱근 n**(1/2)
def solution(n):
    sqrt = n ** (1/2)
    if sqrt % 1 == 0:
        return (sqrt + 1) ** 2
    return -1
