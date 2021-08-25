def solution(s):
    answer = 0
    if len(s) == 1:
        return 1
    if s == s[::-1]:
        return len(s)
    for i in range(len(s)-1, 0, -1):
        for j in range(len(s)-i+1):
            start = j
            end = j + i - 1
            count = 0
            while start < end:
                if s[start] == s[end]:
                    count += 1
                else:
                    break
                start += 1
                end -= 1
            if count == i//2:
                return i
    return answer


print(solution("abcdcba"))  # 7
print(solution("abacde"))  # 3


# ref: https://github.com/dwkim-97/CodingTest/blob/main/Programmers/Python/%5B%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%97%B0%EC%8A%B5%5D%EA%B0%80%EC%9E%A5%20%EA%B8%B4%20%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC.py
def solution(s):
    answer = 1
    for i in range(len(s) - 1):
        if i != 0 and s[i - 1] == s[i + 1]:
            count = check(s, i-1, i+1, 1)
            answer = count if answer < count else answer

        if s[i] == s[i + 1]:
            count = check(s, i, i+1, 0)
            answer = count if answer < count else answer
    return answer


def check(s, left, right, count):
    while s[left] == s[right]:
        count += 2
        left -= 1
        right += 1
        if left == -1 or right == len(s):
            break
    return count
