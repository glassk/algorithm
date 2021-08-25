def solution(N, stages):
    answer = []
    current = dict()
    fail = [0]*(N+1)
    for stage in stages:
        current[stage] = current.get(stage, 0) + 1
    for i in range(1, N+1):
        for stage, count in current.items():
            if i <= stage:
                fail[i] += count
        if current.get(i):
            fail[i] = current[i] / fail[i]
        else:
            fail[i] = 0
        answer.append((i, fail[i]))
    answer.sort(reverse=True, key=lambda x: x[1])
    for i in range(len(answer)):
        answer[i] = answer[i][0]
    return answer


print(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))  # [3, 4, 2, 1, 5]
print(solution(4, [4, 4, 4, 4, 4]))  # [4, 1, 2, 3]

'''
# ref
def solution(N, stages):
    result = {}
    denominator = len(stages)
    for stage in range(1, N+1):
        if denominator != 0:
            count = stages.count(stage)
            result[stage] = count / denominator
            denominator -= count
        else:
            result[stage] = 0
    return sorted(result, key=lambda x: result[x], reverse=True)
'''
