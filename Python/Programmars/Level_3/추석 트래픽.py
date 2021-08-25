# ref: https://programmers.co.kr/learn/courses/30/lessons/17676/solution_groups?language=python3
def solution(lines):

    # get input
    S, E = [], []
    totalLines = 0
    for line in lines:
        totalLines += 1
        type(line)
        (d, s, t) = line.split(" ")

       # time to float
        t = float(t[0:-1])
        (hh, mm, ss) = s.split(":")
        seconds = float(hh) * 3600 + float(mm) * 60 + float(ss)

        E.append(seconds + 1)
        S.append(seconds - t + 0.001)

    # count the maxTraffic
    S.sort()

    curTraffic = 0
    maxTraffic = 0
    countE = 0
    countS = 0
    while((countE < totalLines) & (countS < totalLines)):
        if(S[countS] < E[countE]):
            curTraffic += 1
            maxTraffic = max(maxTraffic, curTraffic)
            countS += 1
        else:  # it means that a line is over.
            curTraffic -= 1
            countE += 1

    return maxTraffic


print(solution([
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:07.000 2s"
]))  # 1
print(solution([
    "2016-09-15 01:00:04.002 2.0s",
    "2016-09-15 01:00:07.000 2s"
]))  # 2
print(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
]))  # 7


# 다른 풀이: https://dev-note-97.tistory.com/170
def solution(lines):
    answer = 0
    total_times = []
    for i in range(len(lines)):
        start_time, end_time = get_times(lines[i])
        total_times.append((start_time, end_time, i))

    for i in range(len(total_times)):
        count = 1
        end_time = total_times[i][1]
        for j in range(len(total_times)):
            if i == j:
                continue
            t_start_time = total_times[j][0]
            t_end_time = total_times[j][1]
            if t_start_time >= end_time and t_start_time < end_time + 1000:
                count += 1
            elif t_end_time >= end_time and t_end_time < end_time + 1000:
                count += 1
            elif end_time >= t_start_time and end_time + 1000 <= t_end_time:
                count += 1
        if count > answer:
            answer = count
    return answer


def get_times(log):
    temp = log.split(" ")
    end_time = temp[1].split(':')
    end_time = int(end_time[0]) * 3600000 + int(end_time[1]
                                                ) * 60000 + int(end_time[2].replace('.', ''))
    start_time = end_time - int(float(temp[2].replace('s', ''))*1000) + 1
    return (start_time, end_time) if start_time > 0 else (0, end_time)
