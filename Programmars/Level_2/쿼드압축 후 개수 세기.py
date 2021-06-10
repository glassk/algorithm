# ref: https://inspirit941.tistory.com/293
def solution(arr):
    def check(y, x, n):
        if n == 1:
            return [0, 1] if arr[y][x] == 1 else [1, 0]
        left_up = check(y, x, n//2)
        right_up = check(y, x+n//2, n//2)
        left_down = check(y+n//2, x, n//2)
        right_down = check(y+n//2, x+n//2, n//2)
        if left_up == right_up == left_down == right_down == [0, 1] or left_up == right_up == left_down == right_down == [1, 0]:
            return left_up
        else:
            return list(map(sum, zip(left_up, right_up, left_down, right_down)))
    return check(0, 0, len(arr))


print(solution([[1, 1, 0, 0], [1, 0, 0, 0],
                [1, 0, 0, 1], [1, 1, 1, 1]]))  # [4,9]
print(solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [
      0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]]))  # [10,15]
