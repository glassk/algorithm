def solution(a, b):
    day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    last = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    res = 0
    for i in range(1, a):
        res += last[i]
    res += b
    return day[(res-1) % 7]


print(solution(5, 24))  # "TUE"
