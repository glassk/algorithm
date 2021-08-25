def solution(n, times):
    min_time = min(times)
    answer = 0
    if n == 1:
        return min_time
    if len(times) == 1:
        return n*min_time

    def Count(time):
        count = 0
        for t in times:
            count += time//t
        return count

    left = 0
    right = n*min_time
    while left <= right:
        mid = (left+right)//2
        if Count(mid) >= n:
            answer = mid
            right = mid-1
        else:
            left = mid+1
    return answer


print(solution(6, [7, 10]))  # 28


# ref: https://wwlee94.github.io/category/algorithm/binary-search/immigration/
# count가 n 이상일 때 바로 break하면 좀 더 효율적이다
def solution(n, times):
    answer = 0
    leng = len(times)
    left = 1
    right = (leng+1) * max(times)
    while left <= right:
        mid = (left + right) // 2
        count = 0
        for time in times:
            count += mid // time
            # 심사 인원수를 넘으면 다음 단계
            if count >= n:
                break
        if count >= n:
            answer = mid
            right = mid - 1
        elif count < n:
            left = mid + 1

    return answer
