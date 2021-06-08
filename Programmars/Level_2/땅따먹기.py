# 깊이우선탐색 - 런타임 에러
def DFS(row, total, last):
    global answer
    if row == len(arr):
        if total > answer:
            answer = total
    else:
        for i in range(4):
            if i != last:
                DFS(row+1, total+arr[row][i], i)


def solution(land):
    global arr, answer
    answer = 0
    arr = land
    DFS(0, 0, -1)
    return answer


print(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]))  # 16
print(solution([[1, 2, 3, 5], [5, 6, 7, 100], [4, 3, 2, 1]]))
print(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]))


# ref: 같은 열은 제외한 이전 행의 최댓값을 더해가는 방식(DP)
def solution(land):
    for i in range(1, len(land)):
        for j in range(len(land[0])):
            land[i][j] = max(land[i - 1][: j] + land[i - 1]
                             [j + 1:]) + land[i][j]
    return max(land[-1])
