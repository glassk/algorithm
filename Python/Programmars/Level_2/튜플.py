def solution(s):
    answer = []
    string = s.split(',')
    for i in range(len(string)):
        temp = ''
        for j in range(len(string[i])):
            if string[i][j].isdecimal():
                temp += string[i][j]
        string[i] = int(temp)

    check = dict()
    for x in string:
        check[x] = check.get(x, 0) + 1
    sorted_check = sorted(check.items(), reverse=True, key=lambda x: x[1])
    for x in sorted_check:
        answer.append(x[0])
    return answer


print(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))  # [2, 1, 3, 4]
print(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))  # [2, 1, 3, 4]
print(solution("{{20,111},{111}}"))  # [111, 20]
print(solution("{{123}}"))  # [123]
print(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))  # [3, 2, 4, 1]


# ref: 문자열 파싱(lstrip, rstrip, split), sort(key=len) 활용
def solution(s):
    answer = []

    s1 = s.lstrip('{').rstrip('}').split('},{')

    new_s = []
    for i in s1:
        new_s.append(i.split(','))

    new_s.sort(key=len)

    for i in new_s:
        for j in range(len(i)):
            if int(i[j]) not in answer:
                answer.append(int(i[j]))

    return answer
