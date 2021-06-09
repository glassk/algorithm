# ref: https://velog.io/@devjuun_s/%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%95%95%EC%B6%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4python2020-Kakao-%EA%B3%B5%EC%B1%84
def solution(s):
    length = []
    if len(s) == 1:
        return 1
    for cut in range(1, len(s)//2 + 1):
        result = ''
        count = 1
        temp = s[:cut]
        for i in range(cut, len(s), cut):
            if s[i:i+cut] == temp:
                count += 1
            else:
                if count == 1:
                    count = ""
                result += str(count) + temp
                temp = s[i:i+cut]
                count = 1
        if count == 1:
            count = ""
        result += str(count) + temp
        length.append(len(result))
    return min(length)


print(solution("aabbaccc"))  # 7
print(solution("ababcdcdababcdcd"))  # 9
print(solution("abcabcdede"))  # 8
print(solution("abcabcabcabcdededededede"))  # 14
print(solution("xababcdcdababcdcd"))  # 17
