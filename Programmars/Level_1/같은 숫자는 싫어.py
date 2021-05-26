def solution(arr):
    answer = []
    for x in arr:
        answer.append(x)
        if len(answer) > 1 and answer[-2] == answer[-1]:
            answer.pop()
    return answer


print(solution([1, 1, 3, 3, 0, 1, 1]))  # [1,3,0,1]
print(solution([4, 4, 4, 3, 3]))  # [4,3]
