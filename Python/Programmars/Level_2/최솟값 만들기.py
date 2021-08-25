def solution(A, B):
    answer = 0
    for a, b in zip(sorted(A), sorted(B, reverse=True)):
        answer += a*b
    return answer


print(solution([1, 4, 2], [5, 4, 4]	))  # 29
print(solution([1, 2], [3, 4]))  # 10
