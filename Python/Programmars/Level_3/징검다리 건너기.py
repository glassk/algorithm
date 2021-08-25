# 오답 및 시간초과
def solution(stones, k):
    answer = min(stones) + 1
    for i in range(len(stones)):
        stones[i] -= 1
    for _ in range(max(stones)):
        for i in range(len(stones)):
            if stones[i] > 0:
                stones[i] -= 1
        count = 0
        for i in range(len(stones)):
            if stones[i] == 0:
                count += 1
            else:
                count = 0
            if count == k:
                return answer
        answer += 1
    return answer


print(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3))  # 3
# 1 3 4 2 1 0 3 1 4 0


# ref: https://wiselog.tistory.com/65
# 이분탐색, 리스트.copy()
def solution(stones, k):
    left = 1
    right = 200000000
    while left <= right:
        temp = stones.copy()
        mid = (left + right) // 2
        cnt = 0
        for t in temp:
            if t - mid <= 0:
                cnt += 1
            else:
                cnt = 0
            if cnt >= k:
                break
        if cnt >= k:
            right = mid - 1
        else:
            left = mid + 1

    return left
