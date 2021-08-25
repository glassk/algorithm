def solution(msg):
    answer = []
    dictionary = [0]
    for i in range(65, 65+26):
        dictionary.append(chr(i))
    if len(msg) == 1:
        return [dictionary.index(msg)]
    idx = 0
    while len(msg) > 0:
        if idx == len(msg):
            break
        temp = msg[:idx+1]
        if not temp in dictionary:
            answer.append(dictionary.index(temp[:-1]))
            dictionary.append(temp)
            msg = msg[idx:]
            idx = 0
        idx += 1
    if msg in dictionary:
        answer.append(dictionary.index(msg[:idx]))
    else:
        answer.append(len(dictionary))
    return answer


print(solution('KAKAO'))  # [11, 1, 27, 15]
# [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
print(solution('TOBEORNOTTOBEORTOBEORNOT'))
print(solution('ABABABABABABABAB'))  # [1, 2, 27, 29, 28, 31, 30]

print(solution('A'))  # [1]
