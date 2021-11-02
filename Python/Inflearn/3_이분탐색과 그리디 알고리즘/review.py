# 이분탐색과 그리디 알고리즘 review
# 이분검색
def solution(n, m, nums):
    nums.sort()
    lt, rt = 0, n-1
    while lt <= rt:
        mid = (lt+rt)//2
        if nums[mid] == m:
            return mid+1
        elif nums[mid] > m:
            rt = mid-1
        else:
            lt = mid+1


if __name__ == "__main__":
    n, m = map(int, input().split())
    nums = list(map(int, input().split()))
    print(solution(n, m, nums))
