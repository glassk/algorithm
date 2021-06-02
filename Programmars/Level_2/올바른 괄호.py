def solution(s):
    stack = []
    for i in range(len(s)):
        if s[i] == '(':
            stack.append(s[i])
        else:
            if not stack:
                return False
            stack.pop()
    if stack:
        return False
    return True


print(solution("()()"))  # true
print(solution("(())()"))  # true
print(solution(")()("))  # false
print(solution("(()("))  # false
