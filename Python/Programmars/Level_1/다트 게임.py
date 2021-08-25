def solution(dartResult):
    answer = 0
    bonus = [-1, 'S', 'D', 'T']
    res = []

    for i in range(len(dartResult)):
        if dartResult[i].isdecimal():
            if dartResult[i+1] in bonus:
                if dartResult[i-1] == '1' and dartResult[i] == '0':
                    res.append(10**bonus.index(dartResult[i+1]))
                else:
                    res.append(int(dartResult[i]) **
                               bonus.index(dartResult[i+1]))
            elif dartResult[i] == '1' and dartResult[i+1] == '0':
                pass
        elif dartResult[i] == '*':
            if len(res) >= 2:
                res[-2] = res[-2]*2
            res[-1] = res[-1]*2
        elif dartResult[i] == '#':
            res[-1] = -res[-1]
    answer = sum(res)
    return answer


print(solution('1S2D*3T'))  # 37
print(solution('1D2S#10S'))  # 9
print(solution('1D2S0T'))  # 3
print(solution('1S*2T*3S'))  # 23
print(solution('1D#2S*3S'))  # 5
print(solution('1T2D3D#'))  # -4
print(solution('1D2S3T*'))  # 59


# ref
def solution(dartResult):
    point = []
    answer = []
    dartResult = dartResult.replace('10', 'k')
    point = ['10' if i == 'k' else i for i in dartResult]
    print(point)

    i = -1
    sdt = ['S', 'D', 'T']
    for j in point:
        if j in sdt:
            answer[i] = answer[i] ** (sdt.index(j)+1)
        elif j == '*':
            answer[i] = answer[i] * 2
            if i != 0:
                answer[i - 1] = answer[i - 1] * 2
        elif j == '#':
            answer[i] = answer[i] * (-1)
        else:
            answer.append(int(j))
            i += 1
    return sum(answer)
