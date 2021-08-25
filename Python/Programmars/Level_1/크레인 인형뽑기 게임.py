def solution(board, moves):
    answer = 0
    basket = []
    for x in moves:
        for i in range(len(board)):
            if board[i][x-1] != 0:
                if basket and basket[-1] == board[i][x-1]:
                    basket.pop()
                    answer += 2
                else:
                    basket.append(board[i][x-1])
                board[i][x-1] = 0
                break
    return answer


print(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [
      0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))
