def isPrime(n):
    if n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    else:
        return True


def solution(nums):
    answer = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if isPrime(nums[i] + nums[j] + nums[k]):
                    answer += 1
    return answer


# ref
def solution(nums):
    from itertools import combinations
    return sum([isPrime(sum(c)) for c in combinations(nums, 3)])
