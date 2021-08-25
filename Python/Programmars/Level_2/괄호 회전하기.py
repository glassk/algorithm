from collections import deque


def isRight(string):
    stack = []
    start = ['(', '[', '{']
    end = [')', ']', '}']
    for s in string:
        if s in start:
            stack.append(s)
        else:
            if not stack:
                return False
            for i in range(3):
                if s == end[i] and stack[-1] == start[i]:
                    stack.pop()
    if stack:
        return False
    return True


def solution(s):
    answer = 0
    for _ in range(len(s)-1):
        if isRight(s):
            answer += 1
        s = s[1:]+s[0]
    return answer


print(solution("[](){}"))  # 3
print(solution("}]()[{"))  # 2
print(solution("[)(]"))  # 0
print(solution("}}}"))  # 0
