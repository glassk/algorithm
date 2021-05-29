import heapq as hq


def solution(scoville, K):
    answer = 0
    hq.heapify(scoville)
    while scoville:
        if all(x >= K for x in scoville):
            return answer
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        hq.heappush(scoville, hq.heappop(scoville) + hq.heappop(scoville)*2)
        answer += 1


print(solution([1, 2, 3, 9, 10, 12], 7))  # 2
