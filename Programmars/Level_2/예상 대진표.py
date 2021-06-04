from math import ceil


def solution(n, a, b):
    for i in range(1, n):
        if ceil(a/2**i) == ceil(b/2**i):
            return i


print(solution(8, 4, 7))  # 3


# ref
def solution(n, a, b):
    answer = 0
    while a != b:
        answer += 1
        a, b = (a+1)//2, (b+1)//2

    return answer
