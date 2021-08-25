from collections import deque


def solution(people, limit):
    answer = 0
    people.sort()
    people = deque(people)
    while people:
        if len(people) == 1:
            answer += 1
            return answer
        if people[0]+people[-1] <= limit:
            answer += 1
            people.popleft()
            people.pop()
        else:
            people.pop()
            answer += 1
    return answer


print(solution([70, 50, 80, 50], 100))  # 3
print(solution([70, 80, 50], 100))  # 3
