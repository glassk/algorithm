def DFS(level, total):
    global answer
    if level == len(nums):
        if total == t:
            answer += 1
    else:
        DFS(level+1, total + nums[level])
        DFS(level+1, total - nums[level])


def solution(numbers, target):
    global answer, nums, t, result
    answer = 0
    nums = numbers
    t = target
    result = []
    DFS(0, 0)
    return answer


print(solution([1, 1, 1, 1, 1], 3))  # 5
