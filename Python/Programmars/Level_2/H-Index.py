def solution(citations):
    if all(citation == 0 for citation in citations):
        return 0
    for h in range(max(citations), -1, -1):
        target = []
        rest = []
        for i in range(len(citations)):
            if citations[i] >= h:
                target.append(i)
            if citations[i] <= h:
                rest.append(i)
        if len(target) >= h and len(rest) <= h:
            return h


print(solution([3, 0, 6, 1, 5]))  # 3
print(solution([1, 3, 5, 7, 9, 11]))
print(solution([0, 0, 0]))


# ref: H-Index가 큰 경우부터 검사
def solution(citations):
    citations = sorted(citations)
    l = len(citations)
    for i in range(l):
        if citations[i] >= l-i:
            return l-i
    return 0
