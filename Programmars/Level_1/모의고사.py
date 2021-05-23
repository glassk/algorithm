from collections import deque


def solution(answers):
    patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5],
                [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    score = [0]*(len(patterns))
    answer = []
    max_score = 0
    for index, pattern in enumerate(patterns):
        for num in answers:
            pattern = deque(pattern)
            temp = pattern.popleft()
            if temp == num:
                score[index] += 1
            pattern.append(temp)
    for i in range(len(score)):
        if score[i] == max(score):
            answer.append(i+1)
    return answer


print(solution([1, 2, 3, 4, 5]))  # [1]
print(solution([1, 3, 2, 4, 2]))  # [1, 2, 3]


# ref
def solution(answers):
    p = [[1, 2, 3, 4, 5],
         [2, 1, 2, 3, 2, 4, 2, 5],
         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    s = [0] * len(p)

    for q, a in enumerate(answers):
        for i, v in enumerate(p):
            if a == v[q % len(v)]:
                s[i] += 1
    return [i + 1 for i, v in enumerate(s) if v == max(s)]
