def isPrime(n):
    if n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    else:
        return True


# 1번째 풀이
def solution1(nums):
    answer = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if isPrime(nums[i] + nums[j] + nums[k]):
                    answer += 1
    return answer


# 2번째 풀이 (외부 라이브러리 없이 리스트에서 pick개 만큼 뽑는 조합 구하기)
# 1번째 풀이보다 속도는 훨씬 느리지만... 조합 DFS 알고리즘 복습 차원에서 구현
def checkSumOfPick(level, start, nums):
    global answer
    if level == pick:
        if isPrime(sum(result)):
            answer += 1
    else:
        for i in range(start, len(nums)):
            result[level] = nums[i]
            checkSumOfPick(level+1, i+1, nums)


def solution2(nums):
    global pick, answer, result
    answer = 0
    pick = 3
    result = [0]*(len(nums)+1)
    checkSumOfPick(0, 0, nums)

    return answer


# print(solution([1, 2, 3, 4]))  # 1
# print(solution([1, 2, 7, 6, 4]))  # 4

# ref
def solution(nums):
    from itertools import combinations
    return sum([isPrime(sum(c)) for c in combinations(nums, 3)])
