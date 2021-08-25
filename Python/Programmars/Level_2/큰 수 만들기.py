# ref: https://eda-ai-lab.tistory.com/465
def solution(number, k):
    stack = [number[0]]
    for num in number[1:]:
        while stack and stack[-1] < num and k > 0:
            k -= 1
            stack.pop()
        stack.append(num)
    if k != 0:
        stack = stack[:-k]
    return ''.join(stack)


print(solution("1924", 2))  # "94"
print(solution("1231234", 3))  # "3234"
print(solution("4177252841", 4))  # "775841"
