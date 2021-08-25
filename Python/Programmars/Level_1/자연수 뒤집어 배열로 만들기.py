def solution(n):
    answer = list(str(n))
    answer.reverse()
    for i in range(len(answer)):
        answer[i] = int(answer[i])
    return answer


print(solution(12345))  # [5,4,3,2,1]


# ref: list, map, reversed 활용
def digit_reverse(n):
    return list(map(int, reversed(str(n))))
