def solution(nums):
    answer = 0
    pick = len(nums)//2
    mon_type = dict()
    for num in nums:
        mon_type[num] = mon_type.get(num, 0) + 1
    if len(mon_type) > pick:
        answer = pick
    else:
        answer = len(mon_type)
    return answer


print(solution([3, 1, 2, 3]))  # 2
print(solution([3, 3, 3, 2, 2, 4]))  # 3
print(solution([3, 3, 3, 2, 2, 2]))  # 2


# ref (왜 set을 생각 못했을까..? 바보.. 리스트 원소의 중복 제거는 set..⭐️)
def solution(nums):
    return min(len(set(nums)), len(nums)//2)
