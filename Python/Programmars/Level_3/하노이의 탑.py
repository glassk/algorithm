# ref: https://velog.io/@djagmlrhks3/Algorithm-BaekJoon-9663.-N-Queen-by-Python-400wrffg
def solution(n):
    answer = []  # 원판을 옮기는 순서를 담을 배열

    def hanoi(n, start, end, assist):
        nonlocal answer
        if n == 1:  # 원판이 1개면 재귀 종료
            answer.append([start, end])
            return
        hanoi(n-1, start, assist, end)  # 원반 n-1개를 assist로 이동 / end는 보조기둥
        answer.append([start, end])
        # assist에 있는 원반 n-1개를 end로 이동 / start는 보조기둥
        hanoi(n-1, assist, end, start)
    hanoi(n, 1, 3, 2)  # 원판개수, 기둥번호(1 - 3 - 2 순)
    return answer


print(solution(2))  # [ [1,2], [1,3], [2,3] ]
