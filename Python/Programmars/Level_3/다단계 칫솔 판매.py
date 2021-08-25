from collections import defaultdict


def solution(enroll, referral, seller, amount):
    answer = []
    profit = defaultdict(int)
    relation = dict()
    for e, r in zip(enroll, referral):
        relation[e] = r
    for s, a in zip(seller, amount):
        a = a*100
        while relation[s] != '-' and a//10 >= 1:
            profit[s] += a - a//10
            s = relation[s]
            a = a//10
        profit[s] += a - a//10
    for x in enroll:
        answer.append(profit[x])
    return answer


print(solution(["john", "mary", "edward", "sam",
                "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]))  # [360, 958, 108, 0, 450, 18, 180, 1080]
print(solution(["john", "mary", "edward", "sam",
                "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["sam", "emily", "jaimie", "edward"], [2, 3, 5, 4]))  # [0, 110, 378, 180, 270, 450, 0, 0]
