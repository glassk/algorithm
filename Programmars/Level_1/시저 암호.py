def solution(s, n):
    answer = ''
    s = list(s)
    for i in range(len(s)):
        if s[i].isalpha():
            if (s[i].isupper() and ord(s[i])+n > ord('Z')) or (s[i].islower() and ord(s[i])+n > ord('z')):
                answer += chr(ord(s[i])+n-26)
            else:
                answer += chr(ord(s[i])+n)
        else:
            answer += s[i]
    return answer


print(solution("AB", 1))  # "BC"
print(solution("z", 1))  # "a"
print(solution("a B z", 4))  # "e F d"
