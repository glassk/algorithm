def solution(lottos, win_nums):
    no_lank = 7
    highest = lowest = no_lank
    for lotto in lottos:
        if lotto == 0:
            highest -= 1
        for num in win_nums:
            if lotto == num:
                highest -= 1
                lowest -= 1
    answer = [highest, lowest]
    for i in range(len(answer)):
        if answer[i] == no_lank:
            answer[i] -= 1
    return answer


print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))  # [3, 5]
print(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))  # [1, 6]
print(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))  # [1, 1]


# ref
# 리스트.count(원소): 리스트 내의 특정 원소 개수 리턴
# 등수를 rank 리스트로 표현 (가독성 좋아짐)
def solution(lottos, win_nums):
    rank = [6, 6, 5, 4, 3, 2, 1]
    cnt_0 = lottos.count(0)
    ans = 0
    for x in win_nums:
        if x in lottos:
            ans += 1
    return rank[cnt_0 + ans], rank[ans]
