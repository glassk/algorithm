def solution(s):
    if len(s) == 4 or len(s) == 6:
        if s.isdecimal():
            return True
    return False


print(solution("a234"))  # false
print(solution("1234"))  # true


# ref: 정규 표현식
def solution(s):
    import re
    return bool(re.match("^(\d{4}|\d{6})$", s))
