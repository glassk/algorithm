def solution(arr1, arr2):
    row = len(arr1)
    col = len(arr2[0])
    answer = [[0]*col for _ in range(row)]
    for i in range(row):
        for j in range(col):
            for k in range(len(arr1[0])):
                answer[i][j] += (arr1[i][k] * arr2[k][j])
    return answer


# [[15, 15], [15, 15], [15, 15]]
print(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]))
print(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],
               [[5, 4, 3], [2, 4, 1], [3, 1, 1]]))  # [[22, 22, 11], [36, 28, 18], [29, 20, 14]]


# ref: zip을 활용해서 arr1을 행별로, arr2를 열별로 함께 묶음
def solution(arr1, arr2):
    return [[sum(a*b for a, b in zip(A_row, B_col)) for B_col in zip(*arr2)] for A_row in arr1]
