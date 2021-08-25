def solution(d, budget):
    answer = 0
    total = 0
    d.sort()
    for x in d:
        if (total+x) <= budget:
            total += x
            answer += 1
    return answer


print(solution([1, 3, 2, 5, 4], 9))  # 3
print(solution([2, 2, 3, 3], 10))  # 10
