from collections import deque


def solution(n, lost, reserve):
    check = [1]*(n+1)
    answer = 0
    for x in lost:
        check[x] -= 1
    for x in reserve:
        check[x] += 1
    check = deque(check[1:])
    while check:
        temp = check.popleft()
        if temp == 2:
            answer += 1
            if check and check[0] == 0:
                check[0] = 1
        elif temp == 1:
            answer += 1
        elif temp == 0:
            if check and check[0] > 1:
                check[0] -= 1
                answer += 1
    return answer


print(solution(5, [2, 4], [1, 3, 5]))  # 5
print(solution(5, [2, 4], [3]))  # 4
print(solution(3, [3], [1]))  # 2
