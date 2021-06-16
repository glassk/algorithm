# 효율성 시간 초과
import math


def solution(n, stations, w):
    answer = 0
    check = [0]*(n+1)
    for s in stations:
        for i in range(s-w, s+w+1):
            if 1 <= i <= n:
                check[i] = 1
    current = 1
    while current <= n:
        if check[current] == 0:
            for i in range(current, current+2*w+1):
                if i <= n:
                    check[i] = 1
                current = i
            answer += 1
        else:
            current += 1
    return answer


print(solution(11, [4, 11], 1))  # 3
print(solution(16, [9], 2))  # 3


# ref: https://dev-note-97.tistory.com/163
def solution(n, stations, w):
    answer = 0
    station_ranges = [(0, 0)]
    for s in stations:
        left = s - w if s - w >= 0 else 0
        right = s + w if s + w < n else n
        station_ranges.append((left, right))
    station_ranges.append((n+1, n+1))

    for i in range(len(station_ranges)-1):
        answer += math.ceil((station_ranges[i+1][0] -
                             (station_ranges[i][1] + 1)) / (2*w + 1))

    return answer
