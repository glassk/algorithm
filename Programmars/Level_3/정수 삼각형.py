# 시간 초과(문제 유형을 DFS/BFS로 착각했음)
def DFS(level, index, sum):
    global answer
    if level == len(tri)-1:
        if answer < sum:
            answer = sum
    else:
        DFS(level+1, index, sum+tri[level+1][index])
        DFS(level+1, index+1, sum+tri[level+1][index+1])


def solution(triangle):
    global tri, answer
    if len(triangle) == 1:
        return triangle[0][0]
    answer = 0
    tri = triangle
    DFS(0, 0, triangle[0][0])
    return answer


print(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))  # 30


# ref: https://codedrive.tistory.com/49
def solution(triangle):
    for i in range(1, len(triangle)):
        for j in range(i+1):
            if j == 0:
                triangle[i][j] += triangle[i-1][j]
            elif j == i:
                triangle[i][j] += triangle[i-1][j-1]
            else:
                triangle[i][j] += max(triangle[i-1][j], triangle[i-1][j-1])
    return max(triangle[-1])
