# ref: https://data-engineer.tistory.com/22
def possible(x, y, col):
    for i in range(x):
        # 같은 열 또는 같은 대각선에 위치하는지 확인
        if y == col[i] or abs(y - col[i]) == x - i:
            return False
    return True


def queen(x, n, col):
    # row가 끝까지 갔으면 성공!
    if x == n:
        return 1

    count = 0
    for y in range(n):
        # 다음 퀸을 놓을 수 있는 경우만 진행
        if possible(x, y, col):
            # x번째 row의 col index 저장 ex) col[0] = 2  0번째 행의 2번째 col에 놓여져 있다.
            col[x] = y
            count += queen(x+1, n, col)  # row index 증가 후 호출
    return count


def solution(n):
    col = [0] * n
    answer = queen(0, n, col)  # 시작 행, 맵의 크기, row의 index를 담는 리스트
    return answer


print(solution(4))  # 2
