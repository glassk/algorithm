# 효율성 시간 초과
import heapq


def solution(n, works):
    answer = 0
    for _ in range(n):
        works[works.index(max(works))] -= 1
    for work in works:
        if work > 0:
            answer += work**2
    return answer


print(solution(4, [4, 3, 3]))  # 12
print(solution(1, [2, 1, 2]))  # 6
print(solution(3, [1, 1]))  # 0
print(solution(99, [2, 15, 22, 55, 55]))  # 580


# ref: https://velog.io/@daon9apples/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level3-%EC%95%BC%EA%B7%BC-%EC%A7%80%EC%88%98-Python
# 최대 힙(heapq) 활용
def solution(n, works):
    answer = 0
    heap = []

    for work in works:
        heapq.heappush(heap, (-work, work))

    while True:
        if n == 0:
            break
        work = heapq.heappop(heap)[1]-1
        heapq.heappush(heap, (-work, work))
        n -= 1

    for h in heap:
        if h[1] < 0:
            continue
        answer += h[1]**2

    return answer
