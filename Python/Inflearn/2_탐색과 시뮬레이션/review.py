# 탐색과 시뮬레이션 review
# 회문 문자열 검사
def solution(string):
    string = string.upper()
    return "YES" if string == string[::-1] else "NO"


if __name__ == "__main__":
    n = int(input())
    for i in range(n):
        print(f'#{i+1} {solution(input())}')


# 숫자만 추출
def count_divisor(n):
    count = 0
    for x in range(1, n+1):
        if n % x == 0:
            count += 1
    return count


def solution(string):
    answer = ''
    for x in string:
        if x.isdecimal():
            answer += x
    return int(answer)


if __name__ == "__main__":
    num = solution(input())
    print(num)
    print(count_divisor(num))


# 카드 역배치
def solution(sections):
    cards = list(range(1, 21))
    for a, b in sections:
        temp = cards[a-1:b]
        temp.reverse()
        cards = cards[:a-1] + temp + cards[b:]
    # 다른 방법(swap)
    # for a, b in sections:
    #     for i in range((a-b+1//2)):
    #         cards[b+i], cards[a-i] = cards[a-i], cards[b+i]
    # cards.pop(0)
    return cards


if __name__ == "__main__":
    sections = [list(map(int, input().split())) for _ in range(10)]
    for x in solution(sections):
        print(x, end=' ')


# 두 리스트 합치기
def solution(n, a, m, b):
    p1 = p2 = 0
    result = []

    while p1 < n and p2 < m:
        if a[p1] < b[p2]:
            result.append(a[p1])
            p1 += 1
        else:
            result.append(b[p2])
            p2 += 1

    if p1 < n:
        result += a[p1:]
    if p2 < m:
        result += b[p2:]
    return result


if __name__ == "__main__":
    n = int(input())
    a = list(map(int, input().split()))
    m = int(input())
    b = list(map(int, input().split()))
    for x in solution(n, a, m, b):
        print(x, end=' ')


# 🔥 수들의 합 (연속 부분합 구하기)
def solution(n, m, a):
    answer = 0
    lt, rt = 0, 1
    total = a[0]

    while True:
        if total < m:
            if rt < n:
                total += a[rt]
                rt += 1
            else:
                break
        elif total == m:
            answer += 1
            total -= a[lt]
            lt += 1
        else:
            total -= a[lt]
            lt += 1

    return answer


if __name__ == "__main__":
    n, m = map(int, input().split())
    a = list(map(int, input().split()))
    print(solution(n, m, a))


# 격자판 최대합
def solution(n, board):
    answer = 0
    for i in range(n):
        sum1, sum2 = 0, 0
        for j in range(n):
            sum1 += board[i][j]
            sum2 += board[j][i]
        answer = max(sum1, sum2, answer)

    sum1, sum2 = 0, 0
    for i in range(n):
        sum1 += board[i][i]
        sum2 += board[i][n-i-1]
    answer = max(sum1, sum2, answer)

    return answer


if __name__ == "__main__":
    n = int(input())
    board = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, board))


# 사과나무(다이아몬드)
def solution(n, tree):
    answer = 0
    lt = rt = n//2
    for i in range(n):
        for j in range(lt, rt+1):
            answer += tree[i][j]
        if i < n//2:
            lt -= 1
            rt += 1
        else:
            lt += 1
            rt -= 1
    return answer


if __name__ == "__main__":
    n = int(input())
    tree = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, tree))


# 곶감(모래시계)
def count(n, yard):
    total = 0
    lt, rt = 0, n-1
    for i in range(n):
        for j in range(lt, rt+1):
            total += yard[i][j]
        if i < n//2:
            lt += 1
            rt -= 1
        else:
            lt -= 1
            rt += 1

    return total


def solution(n, yard, m, rotation):
    for a, b, c in rotation:
        if b == 0:
            for _ in range(c):
                yard[a-1].append(yard[a-1].pop(0))
        else:
            for _ in range(c):
                yard[a-1].insert(0, yard[a-1].pop())
    for x in yard:
        print(x)
    return count(n, yard)


if __name__ == "__main__":
    n = int(input())
    yard = [list(map(int, input().split())) for _ in range(n)]
    m = int(input())
    rotation = [list(map(int, input().split())) for _ in range(m)]
    print(solution(n, yard, m, rotation))


# 봉우리
def solution(n, board):
    answer = 0
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    board.append([0]*n)
    board.insert(0, [0]*n)
    for x in board:
        x.insert(0, 0)
        x.append(0)

    for i in range(1, n+1):
        for j in range(1, n+1):
            if all(board[i][j] > board[i+dx[k]][j+dy[k]] for k in range(4)):
                answer += 1
    return answer


if __name__ == "__main__":
    n = int(input())
    board = [list(map(int, input().split())) for _ in range(n)]
    print(solution(n, board))


# 스도쿠 검사
def check(board):
    for i in range(9):
        cnt1 = [0]*10
        cnt2 = [0]*10
        for j in range(9):
            cnt1[board[i][j]] = 1
            cnt2[board[j][i]] = 1
        if sum(cnt1) != 9 or sum(cnt2) != 9:
            return False

    for i in range(3):
        for j in range(3):
            cnt3 = [0]*10
            for k in range(3):
                for s in range(3):
                    cnt3[board[i*3+k][j*3+s]] = 1
            if sum(cnt3) != 9:
                return False

    return True


def solution(sudoku):
    return "YES" if check(sudoku) else "NO"


if __name__ == "__main__":
    sudoku = [list(map(int, input().split())) for _ in range(9)]
    print(solution(sudoku))


# 🔥 격자판 회문수
def solution(board):
    answer = 0
    length = 5
    for i in range(7-length+1):
        for j in range(7):
            temp = board[j][i:i+length]
            if temp == temp[::-1]:
                answer += 1
            for k in range(length//2):
                if board[i+k][j] != board[i+length-k-1][j]:
                    break
            else:
                answer += 1
    return answer


if __name__ == "__main__":
    board = [list(map(int, input().split())) for _ in range(7)]
    print(solution(board))
