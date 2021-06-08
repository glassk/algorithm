def isRight(string):
    stack = []
    for x in string:
        if x == '(':
            stack.append(x)
        else:
            if stack:
                stack.pop()
            else:
                return False
    if stack:
        return False
    return True


def divide(string):
    u = ''
    v = ''
    for i in range(len(string)):
        u += string[i]
        if u.count('(') == u.count(')'):
            v = string[i+1:]
            break
    return u, v


# ref: solution 함수 자체를 재귀함수로 활용하기
def solution(p):
    if not p:
        return ''
    u, v = divide(p)
    if isRight(u):
        return u + solution(v)
    else:
        answer = '(' + solution(v) + ')'
        for i in range(1, len(u)-1):
            if u[i] == '(':
                answer += ')'
            else:
                answer += '('
        return answer


print(solution("(()())()"))  # "(()())()"
print(solution(")("))  # "()"
print(solution("()))((()"))  # "()(())()"

print(solution(")()()()("))  # "(((())))"
