# ref: https://blog.naver.com/PostView.nhn?blogId=jaeyoon_95&logNo=221904129221&categoryNo=74&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search
def solution(n, t, m, timetable):
    timetable = [int(time[:2])*60 + int(time[3:5]) for time in timetable]
    timetable.sort()
    last_time = (60*9) + (n-1)*t

    for i in range(n):
        if len(timetable) < m:
            return '%02d:%02d' % (last_time//60, last_time % 60)
        if i == n - 1:
            if timetable[0] <= last_time:
                last_time = timetable[m-1] - 1
            return '%02d:%02d' % (last_time//60, last_time % 60)
        for j in range(m-1, -1, -1):
            bus_arrive = (60*9) + i * t
            if timetable[j] <= bus_arrive:
                del timetable[j]


print(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]))  # "09:00"
print(solution(2, 10, 2, ["09:10", "09:09", "08:00"]))  # "09:09"
print(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]))  # "08:59"
# "00:00"
print(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"]))
print(solution(1, 1, 1, ["23:59"]))  # "09:00"
print(solution(10, 60, 45, ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59",
                            "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]))  # "18:00"


# 다른 풀이: https://walwal234.tistory.com/43
def solution(n, t, m, timetable):
    crew = [int(tt.split(":")[0])*60+int(tt.split(":")[1]) for tt in timetable]
    # 크루의 도착시간
    crew.sort()

    # bus[x] = (버스시간, 승객 수, 마지막 탄 크루의 도착시간)
    bus = [(540+t*i, 0, None) for i in range(n)]

    bidx, cidx = 0, 0
    while cidx < len(crew):
        c = crew[cidx]
        if bidx == len(bus):
            break
        if c <= bus[bidx][0] and bus[bidx][1] < m:
            tt, cnt, _ = bus[bidx]
            bus[bidx] = (tt, cnt+1, c)
            cidx += 1
        else:
            bidx += 1

    ret = bus[-1][0]
    if bus[-1][2]:
        if bus[-1][1] == m:
            ret = bus[-1][2] - 1

    return '%02d:%02d' % (ret // 60, ret % 60)
