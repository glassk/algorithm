# ref: https://inspirit941.tistory.com/101
def solution(n, s):
    if n > s:
        return [-1]
    result = []
    initial = s // n
    for _ in range(n):
        result.append(initial)
    idx = len(result) - 1
    for _ in range(s % n):
        result[idx] += 1
        idx -= 1
    return result


print(solution(2, 9))  # [4, 5]
print(solution(2, 1))  # [-1]
print(solution(2, 8))  # [4, 4]
