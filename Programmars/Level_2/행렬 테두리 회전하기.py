# ref: https://bladejun.tistory.com/131
def solution(rows, columns, queries):
    answer = []
    board = [[] for _ in range(rows)]

    for i in range(1, rows+1):
        for j in range(1, columns+1):
            board[i-1].append((i-1)*columns+j)

    for x1, y1, x2, y2 in queries:
        temp = board[x1-1][y2-1]
        min_value = 10001

        # 북쪽 테두리
        min_value = min(min(board[x1-1][y1-1:y2-1]), min_value)
        board[x1-1][y1:y2] = board[x1-1][y1-1:y2-1]

        # 서쪽 테두리
        for i in range(x1, x2):
            min_value = min(board[i][y1-1], min_value)
            board[i-1][y1-1] = board[i][y1-1]

        # 남쪽 테두리
        min_value = min(min(board[x2-1][y1:y2]), min_value)
        board[x2-1][y1-1:y2-1] = board[x2-1][y1:y2]

        # 동쪽 테두리
        for i in range(x2-2, x1-2, -1):
            min_value = min(board[i][y2-1], min_value)
            board[i+1][y2-1] = board[i][y2-1]

        board[x1][y2-1] = temp
        min_value = min(min_value, temp)

        answer.append(min_value)

    return answer


# [8, 10, 25]
print(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]))
print(
    solution(3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]))  # [1, 1, 5, 3]
print(solution(100, 97, [[1, 1, 100, 97]]))  # [1]
