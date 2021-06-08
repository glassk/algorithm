# ref: https://velog.io/@wisepine/Programmers-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1-Python-3
# '왼쪽과 오른쪽 모두 이동 거리가 같을 경우, 오른쪽으로 이동해야 한다.'라는 조건이 명시되지 않았다
def solution(name):
    name = list(name)
    answer = 0
    i = 0

    while True:
        answer += min(ord(name[i])-ord('A'), ord('Z')-ord(name[i])+1)
        name[i] = 'A'

        if name.count('A') == len(name):
            return answer

        left, right = 1, 1
        for l in range(1, len(name)):
            if name[i-l] == 'A':
                left += 1
            else:
                break

        for r in range(1, len(name)):
            if name[i+r] == 'A':
                right += 1
            else:
                break

        if left < right:
            answer += left
            i -= left
        else:
            answer += right
            i += right


print(solution("JEROEN"))  # 56
print(solution("JAN"))  # 23
