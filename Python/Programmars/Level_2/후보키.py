# ref: https://whwl.tistory.com/104
from itertools import combinations


def solution(relation):
    row = len(relation)
    col = len(relation[0])

    candidates = []
    for i in range(1, col+1):
        candidates.extend(combinations(range(col), i))

    unique = []
    for candidate in candidates:
        temp = [tuple([item[i] for i in candidate]) for item in relation]
        if len(set(temp)) == row:
            unique.append(candidate)

    answer = set(unique)
    for i in range(len(unique)):
        for j in range(i+1, len(unique)):
            if len(unique[i]) == len(set(unique[i]) & set(unique[j])):
                answer.discard(unique[j])
    return len(answer)


print(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], [
      "400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]))  # 2
