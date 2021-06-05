from collections import Counter


def solution(s):
    if len(s) % 2 != 0:
        return 0
    if any(x % 2 != 0 for x in Counter(s).values()):
        return 0
    stack = []
    stack.append(s[0])
    for i in range(1, len(s)):
        if stack and stack[-1] == s[i]:
            stack.pop()
        else:
            stack.append(s[i])
    if stack:
        return 0
    else:
        return 1


print(solution('baabaa'))  # 1
print(solution('cdcd'))  # 0
