# 시간 초과
from collections import deque


def solution(s):
    answer = []
    for x in s:
        count = 0
        i = 0
        while i < len(x)-2:
            if x[i:i+3] == '110':
                count += 1
                x = x[:i]+x[i+3:]
                i = 0
            else:
                i += 1

        if len(x) < 3:
            x = '110'*count + x
        else:
            for j in range(len(x)-2):
                if x[j:j+3] == '111':
                    x = x[:j] + '110'*count + x[j:]
                    break
            else:
                x = x + '110'*count
        answer.append(x)
    return answer


# ["1101","100110110","0110110111"]
print(solution(["1110", "100111100", "0111111010"]))


# ref: https://black-hair.tistory.com/86
# 스택
def solution(s):
    answer = []
    for string in s:
        stack = []
        count = 0
        for char in string:
            if char == '0':
                if stack[-2:] == ['1', '1']:
                    count += 1
                    stack.pop()
                    stack.pop()
                else:
                    stack.append(char)
            else:
                stack.append(char)

        if count == 0:
            answer.append(string)
        else:
            temp = deque()
            while stack:
                if stack[-1] == '1':
                    temp.append(stack.pop())
                elif stack[-1] == '0':
                    break

            while count > 0:
                temp.appendleft('0')
                temp.appendleft('1')
                temp.appendleft('1')
                count -= 1
            while stack:
                temp.appendleft(stack.pop())
            answer.append(''.join(map(str, temp)))

    return answer
