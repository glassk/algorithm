# ref: https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level3-%EC%A4%84-%EC%84%9C%EB%8A%94-%EB%B0%A9%EB%B2%95-Python
from math import factorial


def solution(n, k):
    answer = []
    numberList = [i for i in range(1, n+1)]
    while (n != 0):
        temp = factorial(n) // n
        index = k // temp
        k = k % temp
        if k == 0:
            answer.append(numberList.pop(index-1))
        else:
            answer.append(numberList.pop(index))
        n -= 1
    return answer


print(solution(3, 5))  # [3,1,2]


# 효율성 시간 초과
def solution(n, k):
    from itertools import permutations
    for idx, val in enumerate(permutations(list(range(1, n+1)))):
        if idx == k-1:
            return [x for x in val]
