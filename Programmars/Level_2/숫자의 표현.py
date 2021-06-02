from math import ceil


def solution(n):
    answer = 0
    stack = []
    num = 1
    while num <= ceil(n//2)+2:
        total = sum(stack)
        if total == n:
            answer += 1
            stack.pop(0)
            stack.append(num)
            num += 1
        elif total > n:
            stack.pop(0)
        else:
            stack.append(num)
            num += 1
    return answer+1


print(solution(15))  # 4


# ref
def solution(num):
    answer = 0
    for i in range(1, num + 1):
        s = 0
        while s < num:
            s += i
            i += 1
        if s == num:
            answer += 1
    return answer
