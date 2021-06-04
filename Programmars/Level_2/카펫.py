def solution(brown, yellow):
    width = brown + yellow
    row = 3  # 가능한 row의 최솟값은 3
    column = 0
    while True:
        column = width//row
        if width % row == 0 and row <= column:
            if (column-2)*(row-2) == yellow:
                return [column, row]
        row += 1


print(solution(10, 2))  # [4, 3]
print(solution(8, 1))  # [3, 3]
print(solution(24, 24))  # [8, 6]
print(solution(50, 22))  # [24, 3]
