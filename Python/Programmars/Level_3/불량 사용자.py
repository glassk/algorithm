# 제재 아이디 목록 추출까지는 했는데 경우의 수는 구하지 못함
from itertools import permutations


def findUnmasked(bid):
    index = []
    for i in range(len(bid)):
        if bid[i] != '*':
            index.append(i)
    return index


def solution(user_id, banned_id):
    answer = 1
    ids = []
    for bid in banned_id:
        temp = []
        for uid in user_id:
            if len(bid) == len(uid):
                if all(uid[i] == bid[i] for i in findUnmasked(bid)):
                    temp.append(uid)
        ids.append(temp)
    return answer


print(solution(["frodo", "fradi", "crodo",
                "abc123", "frodoc"], ["fr*d*", "abc1**"]))  # 2
print(solution(["frodo", "fradi", "crodo", "abc123",
                "frodoc"], ["*rodo", "*rodo", "******"]))  # 2
print(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],
               ["fr*d*", "*rodo", "******", "******"]))  # 3


# ref: 순열
def isMatch(user_set, banned_set):
    for i in range(len(user_set)):
        if len(user_set[i]) != len(banned_set[i]):
            return False
        for j in range(len(user_set[i])):
            if banned_set[i][j] == '*':
                continue
            if user_set[i][j] != banned_set[i][j]:
                return False
    return True


def solution(user_id, banned_id):
    ans = []
    for com_set in permutations(user_id, len(banned_id)):
        if isMatch(com_set, banned_id):
            com_set = set(com_set)  # 중복 제거
            if com_set not in ans:
                ans.append(com_set)
    return len(ans)
