def solution(arr):
    arr.remove(min(arr))
    if len(arr) == 0:
        return [-1]
    else:
        return arr


print(solution([4, 3, 2, 1]))  # [4,3,2]
print(solution([10]))  # [-1]
