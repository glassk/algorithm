from collections import deque


def solution(progresses, speeds):
    answer = []
    Q = deque()
    for i in range(len(progresses)):
        count = 0
        while progresses[i] < 100:
            progresses[i] = progresses[i] + speeds[i]
            count += 1
        Q.append(count)
    out = 1
    limit = 0
    while Q:
        temp = Q.popleft()
        limit = max(limit, temp)
        if len(Q) and limit >= Q[0]:
            out += 1
        else:
            answer.append(out)
            out = 1
    return answer


print(solution([93, 30, 55], [1, 30, 5]))  # [2,1]
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))  # [1,3,2]
print(solution([99, 1, 99, 1], [1, 1, 1, 1]))  # [1, 3]


# ref
def solution(progresses, speeds):
    answer = []
    time = 0
    count = 0
    while len(progresses) > 0:
        if (progresses[0] + time*speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)
    return answer
