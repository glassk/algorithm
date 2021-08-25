def solution(n, m):
    max_divisor = 0
    min_multiple = 0
    for i in range(1, min(m, n)+1):
        if m % i == 0 and n % i == 0:
            max_divisor = i
    for i in range(m*n, 0, -max(m, n)):
        if i % m == 0 and i % n == 0:
            min_multiple = i
    return [max_divisor, min_multiple]


print(solution(3, 12))  # [3, 12]
print(solution(2, 5))  # [1, 10]


# ref: 유클리드 호제법
def solution(a, b):
    c, d = max(a, b), min(a, b)
    t = 1
    while t > 0:
        t = c % d
        c, d = d, t
    answer = [c, int(a*b/c)]

    return answer
