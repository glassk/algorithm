def solution(n):
    answer = 0
    for x in str(n):
        answer += int(x)
    return answer


print(solution(123))  # 6
print(solution(987))  # 24


# ref: str 변환 없이 각 자릿수 합 구하기
def sum_digit(number):
    if number < 10:
        return number
    return (number % 10) + sum_digit(number // 10)
