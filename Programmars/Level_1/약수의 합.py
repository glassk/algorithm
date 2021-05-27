def solution(n):
    answer = 0
    for i in range(1, n+1):
        if n % i == 0:
            answer += n//i
    return answer


print(solution(12))  # 28
print(solution(5))  # 6


# ref: 한 줄로 표현
def solution(num):
    return sum([i for i in range(1, num+1) if num % i == 0])
