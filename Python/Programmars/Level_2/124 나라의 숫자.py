def solution(n):
    answer = ''
    num = ['4', '1', '2']
    while n > 0:
        n, mod = divmod(n, 3)
        if mod == 0:
            n -= 1
        answer = num[mod] + answer
    return answer


print(solution(1))  # 1
print(solution(2))  # 2
print(solution(3))  # 4
print(solution(4))  # 11
