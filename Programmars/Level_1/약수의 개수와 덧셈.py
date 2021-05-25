def count_divisor(n):
    count = 0
    for i in range(1, n+1):
        if n % i == 0:
            count += 1
    return count


def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        if count_divisor(i) % 2 == 0:
            answer += i
        else:
            answer -= i
    return answer


print(solution(13, 17))  # 43
print(solution(24, 27))  # 52
