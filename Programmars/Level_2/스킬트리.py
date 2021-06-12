# ref: https://hazung.tistory.com/55
def solution(skill, skill_trees):
    answer = 0
    for skills in skill_trees:
        skill_list = list(skill)
        for s in skills:
            if s in skill:
                if s != skill_list.pop(0):
                    break
        else:
            answer += 1
    return answer


print(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))  # 2
