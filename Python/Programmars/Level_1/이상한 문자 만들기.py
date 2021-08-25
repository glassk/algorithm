def solution(s):
    answer = ''
    s = s.split(' ')
    for x in s:
        for i in range(len(x)):
            if i % 2 == 0:
                answer += x[i].upper()
            else:
                answer += x[i].lower()
        answer += ' '
    return answer[:-1]


print(solution("try hello world"))  # "TrY HeLlO WoRlD"
