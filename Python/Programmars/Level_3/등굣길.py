def solution(m, n, puddles):
    if m == 1 or n == 1:
        return 1

    col = m
    row = n
    board = [[0]*col for _ in range(row)]
    for puddle in puddles:
        board[puddle[1]-1][puddle[0]-1] = -1
    for i in range(col):
        if board[0][i] != -1:
            board[0][i] = 1
        else:
            break
    for i in range(row):
        if board[i][0] != -1:
            board[i][0] = 1
        else:
            break

    for i in range(1, row):
        for j in range(1, col):
            if board[i][j] == -1:
                continue
            up = board[i-1][j]
            left = board[i][j-1]
            if up != -1 and left != -1:
                board[i][j] = up+left
            elif up == -1 and left != -1:
                board[i][j] = left
            elif up != -1 and left == -1:
                board[i][j] = up
    return board[row-1][col-1] % 1000000007


print(solution(4, 3, [[2, 2]]))  # 4
